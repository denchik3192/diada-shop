import { IProduct } from "@/types/product.interface"
import axios from "axios"

const PRODUCTS = 'https://jsonplaceholder.typicode.com/posts'

export const ProductService = {
    async getAll() {
        const { data } = await axios<IProduct[]>({
            url: PRODUCTS,
            method: 'GET',
        })
        return data

    }
}