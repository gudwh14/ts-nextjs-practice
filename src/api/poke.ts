
/*
    React-Query 를 이용한 서버 패칭
 */

import axios from "axios";
import {useInfiniteQuery, useQuery} from "react-query";

export interface PokeType {
    name : string,
    url : string
}

export type PokeApiType = {
    count : number
    next : string | null
    previous : string | null
    results : PokeType[]
}

const API_URL = "https://pokeapi.co/api/v2/";
export const getPokemon = async (offset : number = 0) => {
    const response = await axios.get(`${API_URL}pokemon?offset=${offset}&limit=20`);
    return response.data;
}

export const usePokemon = (offset : number = 0) => {
   return useInfiniteQuery('pokemon', ()=>getPokemon(offset))
}