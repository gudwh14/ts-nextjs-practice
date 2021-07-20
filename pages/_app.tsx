import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "semantic-ui-css/semantic.min.css"
import {wrapper} from "../src/store/modules";
import {QueryClient, QueryClientProvider} from "react-query";
import {Hydrate} from "react-query/hydration";
import {ReactQueryDevtoolsPanel} from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
  /**
   * Props 로 넘어온 Component 는 현재 페이지를 의미 한다,
   * pageProps 는 DataFetching 메소드를 통해 미리 가져온 초기 객체 입니다.
   * 사용하지 않으면 빈객체가 전달 된다.
   **/

  const queryClient = new QueryClient();

  return (
      <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydrateState}>
              <div style={{width: 1000, margin: "0 auto"}}>
                  {/*<Header/>*/}
                  <Component {...pageProps} />
                  <Footer/>
              </div>
          </Hydrate>
          <ReactQueryDevtoolsPanel/>
      </QueryClientProvider>
      )
}
// Redux 적용하기
export default wrapper.withRedux(MyApp);

/**
 모든 페이지는 _app 을 통합니다.
 페이지 전환시 상태값을 유지 할 수 있습니다.
 componentDidCatch 를 통해 커스텀 에러 핸들링을 할 수 있습니다.
 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
 글로벌 CSS 를 이곳에 선언합니다.
 */

/**
 Next.js 모든 페이지는 사전 렌더링(Pre-Rendering) 입니다.
 -> 더 좋은 퍼포먼스와 , 검색엔진 최적화 (SEO) 때문입니다.

 Next.js 에서 제공하는 사전 렌더링 방법입니다.
 1. SSG - 정적생성
 2. SSR - 서버사이드 렌더링

 두 개의 차이점은 어느 시점에 HTML 파일을 생성하는 가 입니다.

 [정적 생성]
 - 프로젝트가 빌드되는 시점에 HTML 파일을 생성합니다.
 - 모든 요청에 재사용하여 사용합니다.
 - Nest.js 퍼포먼스 향상을 위해 정적생성을 권고합니다.
 - 정적 생성된 페이지들은 CDN 에 캐시로 저장됩니다.
 - getStaticProps / getStaticPaths 를 통해 사용합니다.

 [서버사이드 렌더링]
 - 매 요청마다 HTML 을 생성합니다.
 - 항상 최신상태를 유지합니다.
 - getServerSideProps 를 통해 사용합니다.
 */