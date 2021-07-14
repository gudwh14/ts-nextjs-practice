import React from "react";
/*
    /pages 폴더에 생성하게 되면 자동으로 next.js 가 라우터 처리를 해준다.
    http://localhost:3000/pages/about 이 아닌
    http://localhost:3000/about 으로 접속하면 된다.
 */
const About : React.FC = () : JSX.Element=> {
    return (
        <div>
            About Page
        </div>
    );
};

export default About;
