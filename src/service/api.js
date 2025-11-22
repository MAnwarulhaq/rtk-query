import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPi = createApi({
    reducerPath: "usersAPi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => '/users'
        }),
        getUser: build.query({
            query: (id) => `/users/${id}`
        }),
        addUser: build.mutation({
            query: (user) => ({
                url: '/users',
                method: "POST",
                body: user
            })

        })
    }),

})


export const { useGetUsersQuery,useGetUserQuery, useAddUserMutation } = userAPi