import { createSlice } from "@reduxjs/toolkit";
import { INVENTORY } from "../../data/INVENTORY";



const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  Inventory: INVENTORY,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

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
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      const inventoryItem = state.Inventory.find(
        (inventoryItem) => inventoryItem.id === action.payload.id
      );

      
      itemInCart.qty += 1;
      itemInCart.price += inventoryItem.price;
      state.totalItems += 1;
      state.totalPrice += inventoryItem.price;
    },

    decrementQty: (state, action) => {
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.name === action.payload.name
      );
      const inventoryItem = state.Inventory.find(
        (inventoryItem) => inventoryItem.id === action.payload.id
      );


      itemInCart.qty -= 1;

      if (itemInCart.qty === 0) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.name !== action.payload.name
        );
        state.totalItems = 0;
        state.totalPrice = 0;
      } else {
        itemInCart.price -= inventoryItem.price;
        state.totalItems -= 1;
        state.totalPrice -= inventoryItem.price;
      }
    },

    clearCart: (state) => initialState,
  },
});


export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQty, decrementQty, clearCart } = cartSlice.actions;
