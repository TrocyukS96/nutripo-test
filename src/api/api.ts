import axios from "axios";
import {Product} from "./types";

//https://nutripro.ru:6443/survey/dish?range=[0,150]

const instance = axios.create({
    baseURL: 'https://nutripro.ru:6443/survey/',
})

// api
export const productsAPI = {
    getProducts(data?:number[]) {
        const value = data ? data : [0,150]
        const promise = instance.get<Product[]>(`dish?range=[${value[0]},${value[1]}]`);
        return promise;
    },
}