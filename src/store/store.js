import { configureStore } from "@reduxjs/toolkit";
import { userAPi } from "../service/api";

export const store = configureStore ({
reducer:{
    [userAPi.reducerPath] : userAPi.reducer
}
})