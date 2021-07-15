/*
    빌드 타임에 정적 생성되는 에러 페이지 입니다.
    404 에러는 스태틱 파일로 제공하는것이 좋다.

 */

import {Icon} from "semantic-ui-react";

const Error404 = () => {
    return (
        <div style={{padding : "200px 0", textAlign:"center", fontSize : 30}}>
            <Icon name="warning circle" color="red"/>
            페이지를 찾을 수 없습니다.
            <p>ERROR 404</p>
        </div>
    );
};

export default Error404;