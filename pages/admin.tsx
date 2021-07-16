import {useEffect} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const Admin = () => {
    const router = useRouter();

    const checkLogin = () => {
        axios.get('/api/isLogin')
            .then((response) => {
                if(response.status === 200 && response.data.name) {
                    //로그인
                }
                else {
                    router.push("/login");
                    // 로그인 안됨
                }
            });
    }

    useEffect(()=> {
        checkLogin();
    },[])

    const logout = () => {
        axios.get("/api/logout")
            .then((response)=> {
                if(response.status === 200) {
                    router.push("/");
                }
            })
    }

    return (
        <>
            <h1>어드민 페이지</h1>
            <button onClick={logout}>로그아웃</button>
        </>
    )
};

export default Admin;