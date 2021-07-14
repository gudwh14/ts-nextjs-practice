import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import {ListData} from "../index";
import ItemData from "../../src/components/Item";

const ItemPage = () => {
    // useRouter 사용하기
    const router = useRouter();
    // 동적 라우터를 통해 들어온 /item/:id 값을 가져올 수 있다.
    const { id } = router.query;

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const [list, setList] = useState<ListData | null>(null);

    const getData = async () => {
        await axios.get(API_URL)
            .then((response) => {
                setList(response.data);
            })
    }

    useEffect(()=> {
        if(id) {
            getData();
        }
    },[id])

    return (
        <>
            <ItemData item={list}/>
        </>
    )
}

export default ItemPage
