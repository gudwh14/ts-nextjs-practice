import type {NextApiRequest, NextApiResponse} from "next";

/**
    다이나믹 라우터 와 마찬가지로 다이나믹 API 라우터 를 설정 할 수 있다.
 */
const DynamicApi = (req : NextApiRequest, res : NextApiResponse) => {
    res.statusCode = 200;
    res.json({id : req.query.id});
}

export default DynamicApi