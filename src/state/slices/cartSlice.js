import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.cartItems.push(action.payload);
            state.totalItems += 1;
            state.totalPrice += action.payload.price || 0;
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
