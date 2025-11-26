// import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// export const api = createApi({
//     reducerPath:"api",
//     baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
//     endpoints: (builder)=>({

//     })
// })

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",

    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");   // token get karna

      if (token) {
        headers.set("authorization", `Bearer ${token}`);  // header set karna
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({}),
});
