/*
    서버 에러페이지는 정적으로 제공하지 않는다.
    에러가 밸생했을경우 서버로 에러를 보내주기 때문에
 */
import {NextPage} from "next";

type ErrorProps = {
    statusCode? : number
}

const Error : NextPage<ErrorProps>= ({statusCode}) => {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

Error.getInitialProps = ({res, err}) : ErrorProps => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error