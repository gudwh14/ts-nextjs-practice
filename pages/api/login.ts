import type {NextApiRequest, NextApiResponse} from "next";

const Login = (req : NextApiRequest , res : NextApiResponse) => {
    if(req.method === 'POST') {
        res.setHeader("Set-Cookie", "a_name=Mike;Max-age=3600;HttpOnly,Secure");
        res.statusCode = 200;
        res.json({message: "ok"});
    }
}

export default Login;