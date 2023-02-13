import { createSlice } from "@reduxjs/toolkit";
import products from "../products"

const initialState = {
    cart: [],
    items: products,
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            state.cart.push(action.payload);
        },
    },
});
export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer;