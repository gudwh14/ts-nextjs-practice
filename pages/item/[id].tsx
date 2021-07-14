import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import {ListData} from "../index";
import ItemData from "../../src/components/Item";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import Head from "next/head";

interface ServerSideProps {
    item : ListData;
}

const ItemPage = ({item} : ServerSideProps) => {
    // // useRouter 사용하기
    // const router = useRouter();
    // // 동적 라우터를 통해 들어온 /item/:id 값을 가져올 수 있다.
    // const { id } = router.query;

    return (
        <>
            <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description}/>
            </Head>
            { item && <ItemData item={item}/> }
        </>
    )
}
export default ItemPage;
// 서버사이드 렌더링 하기위해서 getServerSideProps 를 사용합니다.
export const getServerSideProps : GetServerSideProps<ServerSideProps> = async (context)  => {
    const id = context.params?.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const response = await axios.get(API_URL);
    const data = response.data;

    return {
        props : {
            item : data
        }
    }
}

