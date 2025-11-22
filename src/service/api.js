import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export  const userAPi = createApi({
    reducerPath:"usersAPi",
    baseQuery: fetchBaseQuery( {baseUrl: "http://localhost:3000"}),
    endpoints:(build)=>({
        getUser: build.query({
            query: ()=> '/users'
        }),
        addUser: build.mutation({
            query: (user)=>({
                url: '/users',
                method:"POST",
                body: user
            })

        })
    }),
   
})


export const {useGetUserQuery,useAddUserMutation} = userAPi