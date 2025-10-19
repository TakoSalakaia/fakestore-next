'use client';
import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [] // [{id,title,price,image,qty}]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // {id,title,price,image}
      const found = state.items.find(i => i.id === item.id);
      if (found) found.qty += 1;
      else state.items.push({ ...item, qty: 1 });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const it = state.items.find(i => i.id === action.payload);
      if (it) it.qty += 1;
    },
    decreaseQty: (state, action) => {
      const it = state.items.find(i => i.id === action.payload);
      if (it) {
        it.qty -= 1;
        if (it.qty <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
    clearCart: (state) => { state.items = []; }
  }
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = state => state.cart.items;
export const selectTotalQty = createSelector([selectCartItems],
  items => items.reduce((s, i) => s + i.qty, 0));
export const selectTotalAmount = createSelector([selectCartItems],
  items => items.reduce((s, i) => s + i.qty * i.price, 0));

export default cartSlice.reducer;
