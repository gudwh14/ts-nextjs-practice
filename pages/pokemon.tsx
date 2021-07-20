import {GetServerSideProps, GetStaticProps} from "next";
import {QueryClient} from "react-query";
import {dehydrate} from "react-query/hydration";
import {getAllPokemon, getPokemon} from "../src/api/poke";
import Poke from "../src/components/Poke";

const Pokemon = () => {

    return (
        <>
            <Poke/>
        </>
    );
};

/**
    Hydration 을 통해 SSR 을 구축한다.
    initial Data 를 이용하면 간단하나 , 여러 컴포넌트에서 해당 데이터를 SSR 를 통해 보여주려고 한다면
    모든 컴포넌트에 initial Data 를 넘겨줘야 한다
 */
export const getServerSideProps : GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery('pokemon', ()=>getPokemon(),{
        staleTime : 1000 * 10// 10초
    });

    return {
        props : {
            /**
             * dehydrate 한 것을 stringify 했다가 다시 parse 하는 것은 InfiniteQuery 를 사용할 때 발생하는 이슈이다.
             * 그냥 dehydrate 한 상태로 넘겨주면 에러가 발생한다.
             * InfiniteQuery 에서 맨 처음 페이지에 해당하는 데이터의 pageParam 이 undefined 로 설정되기 때문에
             * hydration 과정에서 직렬화가 되지 않아서 저렇게 해주었다.
             */
            dehydrateState : JSON.parse(JSON.stringify(dehydrate(queryClient))),
        },
    };
};


export default Pokemon;

