import type {NextApiRequest, NextApiResponse} from "next";

const Logout = (req : NextApiRequest , res : NextApiResponse) => {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-age=0;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({message: "ok"});
}

export default Logout;