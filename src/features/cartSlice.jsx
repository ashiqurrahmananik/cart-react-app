import { createSlice } from "@reduxjs/toolkit";
import products from "../products"

const initialState = {
    cart: [],
    items: products,
    totalQuantity: 0,
    totalPrice: 0,
    quantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },
    },
});
export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer;