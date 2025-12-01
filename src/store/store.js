import { configureStore } from "@reduxjs/toolkit";
import { userAPi } from "../service/users";
import { productsAPI } from '../service/products'

export const store = configureStore({
    reducer: {
        [userAPi.reducerPath]: userAPi.reducer,
        [productsAPI.reducerPath]: productsAPI.reducer,


    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPi.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsAPI.middleware),
})