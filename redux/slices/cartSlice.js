import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,   
}



//Taken from this youtube video: https://www.youtube.com/watch?v=uRoJJKJMbXQ 

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemInCart = state.cartItems.find((item) => item._id === action.payload._id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.cartTotalQuantity++;
            state.cartTotalAmount += action.payload.price;
            Math.round(state.cartTotalAmount);

        },

        clearCart(state){
          state.cartItems.splice(0, state.cartItems.length)
          state.cartTotalQuantity = 0;
          state.cartTotalAmount = 0;
        },

        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item._id === action.payload);
            item.quantity++;
            state.cartTotalQuantity++;
            state.cartTotalAmount += item.price;
            Math.round(state.cartTotalAmount)

            // if (isLocalStorageAvailable()){
            //   localStorage.setItem("Cart",JSON.stringify(state));
            // }

        },

        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item._id === action.payload);
            if (item.quantity === 1) {
              const removeItem = state.cartItems.filter((item) => item._id !== action.payload);
              state.cartItems = removeItem;
              state.cartTotalQuantity -= item.quantity;
              state.cartTotalAmount -= item.price;
              Math.round(state.cartTotalAmount)
            } else {
              item.quantity--;
              state.cartTotalQuantity--;
              state.cartTotalAmount -= item.price;
              Math.round(state.cartTotalAmount);
            }

            // if (isLocalStorageAvailable()){
            //   localStorage.setItem("Cart",JSON.stringify(state));
            // }

        },

        // removeItem: (state, action) => {
        //     const removeItem = state.cartItems.filter((item) => item._id !== action.payload);
        //     state.cartItems = removeItem;
        //   },

    }
})

export const { addToCart,  incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;   