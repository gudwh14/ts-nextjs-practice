import Gnb from "./Gnb";

const Header = () => {
    return (
        <div>
            {/**
                static 파일을 참조 할때는 /public 경로를 붙이지않고 바로 /images 를 참조하면 된다.
                public 폴더를 여러개 할경우 에러가 발생함. public 폴더 이름 변경 불가
            **/}
            <div style={{display : 'flex'}}>
                <img src="/images/jjo_ico.jpeg" alt="아이콘" width={80} height={80}/>
                <h1>JJo</h1>
            </div>
            <Gnb/>
        </div>
    );
};

export default Header;