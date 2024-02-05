import { configureStore } from "@reduxjs/toolkit";
import sliceFun from '../features/slice.js'
export const store = configureStore({
    reducer:{
        cartItems: sliceFun
    }
})