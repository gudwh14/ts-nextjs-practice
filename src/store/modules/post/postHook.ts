import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../index";
import {getPostRequest} from "./post";


const usePost = () => {
    const loading = useSelector((state:RootState) => state.post.loading);
    const posts = useSelector((state : RootState) => state.post.data);
    const error = useSelector((state : RootState) => state.post.error);

    const dispatch = useDispatch();

    const getPosts = () => {
        dispatch(getPostRequest());
    }

    return {loading, posts, error, getPosts}
}

export default usePost;