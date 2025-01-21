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
            const itemInCart = state.cartItems.find((cartItem) => cartItem.name === action.payload.name);

            if (itemInCart) {
                itemInCart.qty += 1;
                itemInCart.price = itemInCart.qty * action.payload.price;
                state.totalItems += 1;
                state.totalPrice += action.payload.price;
            } else {
                const newItem = {
                    ...action.payload,
                    qty: 1 // Initialize qty for new items
                };
                state.cartItems.push(newItem);
                state.totalItems += 1;
                state.totalPrice += action.payload.price;
            }
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;