import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/redux";
import { build } from "vite"; 
const userAPi = createApi({
    readucerPath:"usersAPi",
    baseQuery: fetchBaseQuery( {baseURl: "http://localhost:3000"}),
    endpoints:(build)=>({
        getUser: build.query({
            query: ()=> '/users'
        })
    })
   
})