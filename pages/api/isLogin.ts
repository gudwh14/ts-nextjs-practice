import type {NextApiRequest, NextApiResponse} from "next";

/*

 */
type isLoginData = {
    name : string | null
}

const isLogin = (req : NextApiRequest, res : NextApiResponse<isLoginData>) => {
    res.statusCode = 200;
    res.json({name : req.cookies.a_name});
}

export default isLogin;