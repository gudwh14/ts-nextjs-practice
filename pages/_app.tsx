import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "semantic-ui-css/semantic.min.css"

function MyApp({ Component, pageProps }: AppProps) {
  /**
   * Props 로 넘어온 Component 는 현재 페이지를 의미 한다,
   * pageProps 는 DataFetching 메소드를 통해 미리 가져온 초기 객체 입니다.
   * 사용하지 않으면 빈객체가 전달 된다.
   **/
  return (
      <div style={{width : 1000, margin : "0 auto"}}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
      )
}
export default MyApp

/**
 모든 페이지는 _app 을 통합니다.
 페이지 전환시 상태값을 유지 할 수 있습니다.
 componentDidCatch 를 통해 커스텀 에러 핸들링을 할 수 있습니다.
 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
 글로벌 CSS 를 이곳에 선언합니다.
 */