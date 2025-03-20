import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from '../Redux/MyProductSlice';


export const mystore =configureStore({
    reducer:{
        product:MyProductReducer
    }
})