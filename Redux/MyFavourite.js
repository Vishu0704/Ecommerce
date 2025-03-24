import { createSlice } from '@reduxjs/toolkit';

const MyFavouriteSlice = createSlice({
  name: 'favourite',
  initialState: [],
  reducers: {
    addProductToFavourite(state, action) {
        let itemIndex = state.findIndex(item => item.id === action.payload.id);
        console.log(itemIndex);
        if(itemIndex !==-1){
            state.splice(itemIndex, 1);

        }else{
            state.push({ ...action.payload});
        }
        
        
    },
    removeFavouriteFromCart(state, action) {
      let itemIndex = state.findIndex(item => item.id === action.payload.id);

      if (itemIndex !== -1) {
        if (state[itemIndex].qty > 1) {
          state[itemIndex].qty -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    clearFavourite() {
      return []; 
    },
  },
});

export const { addProductToFavourite, removeFavouriteFromCart, clearCart } = MyFavouriteSlice.actions;
export default MyFavouriteSlice.reducer;
