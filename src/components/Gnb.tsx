import {useRouter} from "next/router";
import {useState} from "react";

const Gnb = () => {
    const router = useRouter();
    const [active , setActive] = useState("home");
    console.log(router);

    // a 태그 onClick 타입?
    const goLink = (e : any) => {
        if(e.target.id === "home") {
            router.push('/');
            setActive("home");
        }
        else if(e.target.id === "about") {
            router.push('/about');
            setActive("about");
        }
    }

    return (
        <div className="ui inverted menu">
            <a className={active === "home" ? "item active" : "item"} onClick={goLink} id="home">
                Home
            </a>
            <a className={active === "about" ? "item active" : "item"}  onClick={goLink} id="about">
                About
            </a>
        </div>
    );
};

export default Gnb;

