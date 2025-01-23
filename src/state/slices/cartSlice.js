import { createSlice } from "@reduxjs/toolkit";
import { INVENTORY } from "../../data/INVENTORY";


const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    Inventory: INVENTORY,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);

            if (itemInCart) {
                itemInCart.qty += 1;
                itemInCart.price = itemInCart.qty * action.payload.price;
                state.totalItems += 1;
                state.totalPrice += action.payload.price;
            } else {
                const newItem = {
                    ...action.payload,
                    qty: 1,
                };
                state.cartItems.push(newItem);
                state.totalItems += 1;
                state.totalPrice += action.payload.price;
            }
        },
        
        incrementQty: (state, action) => {
                console.log(action.payload);
                const itemInCart = state.cartItems.find((cartItem) => cartItem.id === action.payload.id);
                const inventoryItem = state.Inventory.find((inventoryItem) => inventoryItem.id === action.payload.id);
                console.log('item in cart: ' + itemInCart);
                itemInCart.qty += 1;
                itemInCart.price += inventoryItem.price;
                state.totalItems += 1;
                state.totalPrice += inventoryItem.price;
        },
        
        decrementQty: (state, action) => {
            const itemInCart = state.cartItems.find((cartItem) => cartItem.name === action.payload.name);
            state.iteminCart.qty -= 1;

            if (itemInCart.qty === 0) {
                state.cartItems = state.cartItems.filter((cartItem) => cartItem.name !== action.payload.name);
            } else {
                itemInCart.price = itemInCart.qty * action.payload.price;
                state.totalItems -= 1;
                state.totalPrice -= action.payload.price;
            }
        }
        
    }
    
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQty, decrementQty } = cartSlice.actions;