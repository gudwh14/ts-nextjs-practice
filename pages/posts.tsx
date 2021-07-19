import usePost from "../src/store/modules/post/postHook";
import Post from "../src/components/Post";
import {useEffect} from "react";


const Posts = () => {
    const {loading, posts, error, getPosts} = usePost();

    useEffect(()=> {
        getPosts();
    },[])

    return (
        <>
            {loading && <span>로딩중 입니다...</span>}
            {posts && <Post posts={posts}/>}
            {error && <span>{error.error}</span>}
        </>
    )
}

export default Posts;