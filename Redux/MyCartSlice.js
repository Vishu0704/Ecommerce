import { createSlice } from '@reduxjs/toolkit';

const MyCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToMyCart(state, action) {
      let itemIndex = state.findIndex(item => item.id === action.payload.id);

      if (itemIndex === -1) {
        state.push({ ...action.payload, qty: 1 });
      } else {
        state[itemIndex].qty += 1;
      }
    },
    removeProductFromCart(state, action) {
      let itemIndex = state.findIndex(item => item.id === action.payload.id);

      if (itemIndex !== -1) {
        if (state[itemIndex].qty > 1) {
          state[itemIndex].qty -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    deleteProductFromCart(state,action){
      let itemIndex = state.findIndex(item => item.id === action.payload.id);
      state.splice(itemIndex, 1);
    },
    clearCart() {
      return []; 
    },
  },
});

export const { addProductToMyCart, removeProductFromCart, clearCart,deleteProductFromCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;
