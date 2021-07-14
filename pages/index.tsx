import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import {useEffect, useState} from "react";
import ItemList from "../src/components/ItemList";

export type ListData = {
    api_featured_image: string;
    brand: string;
    category: null | string
    created_at: string
    currency: null | string
    description: string
    id: number
    image_link: string
    name: string
    price: string
    price_sign: null | string
    product_api_url: string
    product_colors: {hex_value : string , colour_name : null | string}
    product_link: string
    product_type: string
    rating: number
    tag_list: string[]
    updated_at: string
    website_link: string
}

export default function Home() {
    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const [data, setData] = useState<ListData[]>([]);

    const getData = async () => {
        await axios.get(API_URL)
            .then((response)=> {
                console.log(response.data);
                setData(response.data);
            })
    }

    useEffect(()=> {
        getData();
    },[])

    return (
        <div>
            <Head>
                <title>HOME | JJo</title>
            </Head>
            <ItemList list={data}/>
        </div>
    )
}

/*
    <h1>Create-Next-App 을 이용해 설치하게 되면</h1>
            <p>1. 컴파일과 번들링이 자동으로 된다. (webpack, Babel)</p>
            <p>2. 자동 리프레쉬 기능을 지원하여 수정시 바로 반영된다.</p>
            <p>3. SSR 을 지원한다.</p>
            <p>4. 스태틱 파일을 지원한다.</p>
 */
