import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arr: [],
    selectedProduct: null
}
const productSlice = createSlice({
    name: "productNameForDebug",
    initialState,
    reducers: {


    }
})

export const { } = productSlice.actions;
export default productSlice.reducer;