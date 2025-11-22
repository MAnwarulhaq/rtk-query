import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export  const userAPi = createApi({
    reducerPath:"usersAPi",
    baseQuery: fetchBaseQuery( {baseUrl: "http://localhost:3000"}),
    endpoints:(build)=>({
        getUser: build.query({
            query: ()=> '/users'
        }),
        addUser: build.mutation({
            

        })
    }),
   
})


export const {useGetUserQuery} = userAPi