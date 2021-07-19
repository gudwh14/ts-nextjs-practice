import {PostType} from "../api/post";

type PostProps  = {
    posts : PostType[]
}

const Post = ({posts} : PostProps) => {
    return (
        <>
            {posts.map((post)=>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p>작성자 ID : {post.userId}</p>
                </div>
            )}
        </>
    )
}

export default Post;