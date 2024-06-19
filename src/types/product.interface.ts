export interface IProduct {
    id: string
    name: string
    slug: string
    price: number
    category: string
    images: string[]
    title?: string
    body?: string
}