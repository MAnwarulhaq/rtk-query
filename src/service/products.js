import { api } from "./createApi";

 export const productsAPI = api.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query({
            query: ()=> '/products'
        })
    })
}) 

export const {useGetProductsQuery} = productsAPI