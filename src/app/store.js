import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice.js";
import cartSlice from "../features/cartSlice.js"

export const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice
    }
})