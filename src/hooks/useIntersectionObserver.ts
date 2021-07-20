import {useEffect} from "react";

/**
 @root
 대상의 가시성을 확인하기위한 뷰포트로 사용되는 요소입니다. 대상의 조상이어야합니다.
 지정하지 않거나 if 인 경우 기본적으로 브라우저 뷰포트로 설정됩니다 null.

 @rootMargin
 뿌리 주위의 여백. CSS margin 속성 과 유사한 값을 가질 수 있습니다.
 10px 20px 30px 40px”
 ( 예 : “ (상단, 우측, 하단, 좌측). 값은 백분율 일 수 있습니다.이 값 세트는 교차점을 계산하기 전에 루트 요소의 경계 상자의 양쪽을 늘리거나 줄 이도록합니다. 모두 0입니다.

 @threshold
 관찰자의 콜백을 실행해야하는 대상 가시성 비율을 나타내는 단일 숫자 또는 숫자 배열입니다.
 가시성이 50 %를 초과하는 시점 만 감지하려는 경우 0.5 값을 사용할 수 있습니다.
 가시성이 다른 25 %를 초과 할 때마다 콜백을 실행하려면 배열 [0, 0.25, 0.5, 0.75, 1]을 지정합니다.
 기본값은 0입니다 (하나의 픽셀 만 표시되면 콜백이 실행됨을 의미). 1.0 값은 모든 픽셀이 표시 될 때까지 임계 값이 전달 된 것으로 간주되지 않음을 의미합니다.
 */
export default function useIntersectionObserver({
    root,
    target,
    onIntersect,
    threshold = 1.0,
    rootMargin = '0px',
    enable = true
                                                } : any) {
    useEffect(()=> {
        // 다음 페이지 가 존재하지 않으면 동작 X
        if(!enable) {
            return;
        }

        const observer = new IntersectionObserver(entries => entries.forEach(entry=> entry.isIntersecting && onIntersect()),{
            root : root && root.current,
            rootMargin,
            threshold
        })

        const el = target && target.current
        if(!el) {
            return;
        }

        observer.observe(el);
        return () => {
            observer.unobserve(el);
        }
    },[target,enable,root,threshold,rootMargin,onIntersect])
}