import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';

var Store = configureStore({
    reducer:{
             auth: authReducer
    }
});
export default Store;