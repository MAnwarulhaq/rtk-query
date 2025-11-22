import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPi = createApi({
    reducerPath: "usersAPi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
      tagTypes: ["Users"],
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => '/users',
            providesTags: ["Users"],
        }),
        getUser: build.query({
            query: (id) => `/users/${id}`,
            invalidatesTags: ["Users"],
        }),
        addUser: build.mutation({
            query: (user) => ({
                url: '/users',
                method: "POST",
                body: user
            })
            ,
            invalidatesTags: ["Users"],
        }),
         updateUser: build.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PUT",
                body: user
            }),
            invalidatesTags: ["Users"],

        }),
         delteUser: build.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
                
            }),
            invalidatesTags: ["Users"],

        })
    }),

})


export const { 
    useGetUsersQuery,
    useGetUserQuery, 
    useAddUserMutation,
    useUpdateUserMutation,
    useDelteUserMutation
} = userAPi