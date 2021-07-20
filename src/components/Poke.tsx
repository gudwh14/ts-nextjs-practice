import {getPokemon, PokeType, usePokemon} from "../api/poke";
import {useInfiniteQuery} from "react-query";

const Poke = () => {

     const {data, fetchNextPage} = useInfiniteQuery('pokemon',({pageParam = ''})=>getPokemon(pageParam),{
         getNextPageParam  : (lastPage) => {
             // lastPage : 마지막 페이지의 data 를 가지고있다.
             // 마지막 페이지의 마지막 data 의 url 에서 offset 을 가져와서 다음 페이지를 부를때 사용하게 된다.
             const lastOffset = lastPage.results[lastPage.results.length - 1].url.split('/')[6];
             // API 에서 제공하는 offset 크기 최대치를 넘어서면 undefined 반환
             if(lastOffset > 1118) {
                 return undefined;
             }
             return lastOffset
         },
         staleTime : 1000,
     });
    /**
     InfiniteQuery 를 사용하면 data 에 pages, pageParams 객채를 가지고 있다.
     pages : Fetched 된 페이지들을 담고있다
     pageParams : 페이지를 Fetch 하기 위해 사용하는 페이지 Params 정보를 가지고 있다.
     또한 fetchNextPage(), fetchPreviousPage() 함수를 사용 할 수 있습니다.
     옵션으로는 getNextPageParam, getPreviousPageParam 옵션을 사용 할 수 있습니다.
     각각의 옵션은 fetchNextPage, fetchPreviousPage 함수가 실행될때 Query Function 에 추가적인 파라미터를 제공합니다.
     */

    return(
      <>
          <ul>
              {data?.pages.map((page)=> (
                  page.results.map((poke : PokeType)=>(
                      <li key={poke.name}>
                          <h3>{poke.name}</h3>
                      </li>
                  ))
              ))}
          </ul>
          <button onClick={()=>fetchNextPage()}>Load More</button>
      </>
    );
}

export default Poke;