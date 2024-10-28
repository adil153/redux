import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";



const store=configureStore({
    reducer:{
        productReducer:productSlice

    }
})

export default store