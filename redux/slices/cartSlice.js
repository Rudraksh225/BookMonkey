import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [
      {
        id: 1,
        name:'Energize your mind  ',
        img: '/../public/books/book1.webp',
        quantity: 1,
        price: 458.00,
      },
      {
        id: 2,
        name:'Dopamine Detox',
        img: '/../public/books/book2.webp',
        quantity: 1,  
        price: 558.00,
      },
      {
        id: 2,
        name:'Dopamine Detox',
        img: '/../public/books/book2.webp',
        quantity: 1,  
        price: 558.00,
      },
      {
        id: 2,
        name:'Dopamine Detox',
        img: '/../public/books/book2.webp',
        quantity: 1,  
        price: 558.00,
      },
      {
        id: 2,
        name:'Dopamine Detox',
        img: '/../public/books/book2.webp',
        quantity: 1,  
        price: 558.00,
      },

    ],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,   
}

//Taken from this youtube video: https://www.youtube.com/watch?v=uRoJJKJMbXQ 

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            console.log("Adding Item")
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.cartTotalQuantity++;
            state.cartTotalAmount += action.payload.price;
            localStorage.setItem("Cart",JSON.stringify(state));
        },

        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            item.quantity++;
            state.cartTotalQuantity++;
            state.cartTotalAmount += item.price;
            localStorage.setItem("Cart",JSON.stringify(state));
        },

        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
              const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
              state.cartItems = removeItem;
              state.cartTotalQuantity -= item.quantity;
              state.cartTotalAmount -= item.price;
            } else {
              item.quantity--;
              state.cartTotalQuantity--;
              state.cartTotalAmount -= item.price;
            }
            localStorage.setItem("Cart",JSON.stringify(state));
        },

        // removeItem: (state, action) => {
        //     const removeItem = state.cartItems.filter((item) => item.id !== action.payload);
        //     state.cartItems = removeItem;
        //   },

    }
})

export const { addToCart,  incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;   