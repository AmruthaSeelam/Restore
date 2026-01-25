import { createApi } from "@reduxjs/toolkit/query/react"
import type { Product } from "../app/models/Product";
import { baseQueryWithErrorHandling } from "./baseApi";

export const catalogApi=createApi({
    reducerPath:"catalogApi",
    baseQuery:baseQueryWithErrorHandling,
    endpoints:(builder)=>({
        fetchProducts:builder.query<Product[],void>({
            query:()=>({url:"/products"})
        }),
        fetchProduct:builder.query<Product,number>({
            query:(productId)=>({url:`/products/${productId}`})
        })
    })
})

export const {useFetchProductQuery,useFetchProductsQuery}=catalogApi;