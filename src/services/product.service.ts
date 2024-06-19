import { IProduct } from "@/types/product.interface"
import axios from "axios"

const PRODUCTS = 'https://jsonplaceholder.typicode.com/posts'
const PRODUCT = 'https://jsonplaceholder.typicode.com/posts/'

export const ProductService = {
    async getAll() {
        const { data } = await axios<IProduct[]>({
            url: PRODUCTS,
            method: 'GET',
        })
        return data

    },
    async getOneProduct(id: string) {
        const { data } = await axios<IProduct>({
            url: PRODUCT + id,
            method: 'GET',
        })
        return data

    }
}