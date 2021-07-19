import axios from "axios";

export interface PostType {
    userId : number,
    id : number
    title : string
    body : string
}

const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const getPosts = async () => {
    const response = await axios.get<PostType>(API_URL);
    return response.data;
}