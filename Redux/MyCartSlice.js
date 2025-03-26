import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const loadCartFromStorage = createAsyncThunk('cart/loadCart', async () => {
  const cartData = await AsyncStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
});

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

      AsyncStorage.setItem('cart', JSON.stringify(state)); 
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

      AsyncStorage.setItem('cart', JSON.stringify(state));  
    },
    deleteProductFromCart(state, action) {
      let itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }

      AsyncStorage.setItem('cart', JSON.stringify(state));  
    },
    clearCart(state) {
      return []; 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCartFromStorage.fulfilled, (state, action) => {
      return action.payload; 
    });
  },
});

export const { addProductToMyCart, removeProductFromCart, clearCart, deleteProductFromCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;
