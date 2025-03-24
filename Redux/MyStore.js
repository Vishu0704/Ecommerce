import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from '../Redux/MyProductSlice';
import MyCartReducer from '../Redux/MyCartSlice';
import MyFavouriteReducer from '../Redux/MyFavourite';


export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
    favourite:MyFavouriteReducer
  },
});
