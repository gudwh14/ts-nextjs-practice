import axios from "axios";
import {useRouter} from "next/router";

const Login = () => {
    const router = useRouter();

    const login = () => {
        axios.post("/api/login")
            .then((response)=> {
                if(response.status === 200) {
                    // 로그인 성공
                    router.push("/admin");
                }
            });
    }

    return (
        <div>
            <input type="text" placeholder="ID"/>
            <input type="password" placeholder="PW"/>
            <button type="button" onClick={login}>로그인</button>
        </div>
    );
};

export default Login;