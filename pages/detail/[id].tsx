import axios from "axios";
import {ListData} from "../index";
import ItemData from "../../src/components/Item";
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    GetStaticPaths,
    GetStaticProps, NextPage
} from "next";
import Head from "next/head";

/**
    다이나믹 라우터 + 정적 생성 사용시 주의사항
    fallback : true 일때
    페이지 새로고침시
    getStaticProps 에서 API 데이터 호출이 늦게(?) 작동 되므로
    item 타입이 undefined 가 될수 있다!!
 */
interface StaticProps {
    item? : ListData;
    name? : string
}

const ItemPage : NextPage<StaticProps>= ({item, name}) => {
    // // useRouter 사용하기
    // const router = useRouter();
    // // 동적 라우터를 통해 들어온 /item/:id 값을 가져올 수 있다.
    // const { id } = router.query;
    return (
        <>
            <Head>
                <title>{item?.name}</title>
                <meta name="description" content={item?.description}/>
            </Head>
            { item && <ItemData item={item}/> }
            {name} 입니다.
        </>
    )
}
export default ItemPage;

export const getStaticPaths : GetStaticPaths = () => {
    return {
        paths: [
            {params : {id : '740'}},
            {params : {id : '730'}},
            {params : {id : '729'}},
        ],
        // false 이면 페이지 대응을 하지 않음
        fallback : true
    }
}

export const getStaticProps : GetStaticProps<StaticProps> = async (context)  => {
    const id = context.params?.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const response = await axios.get(API_URL);
    const data = response.data;

    return {
        props : {
            item : data,
            name : process.env.name
        }
    }
}

