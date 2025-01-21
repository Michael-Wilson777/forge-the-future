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
            console.log("Action payload:", action.payload);
            console.log("State before mutation:", JSON.stringify(state));
            
            state.cartItems.push(action.payload);

            console.log("State after mutation:", JSON.stringify(state));

            state.totalItems += 1;
            state.totalPrice += action.payload.price;
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
