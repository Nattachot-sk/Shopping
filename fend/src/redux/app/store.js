import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import navbarSlice from './../features/navbar/navbarSlice';
import detailsSlice from './../features/details/detailsSlice';
import userSlice from "../features/Login1/userSlice";

export const store = configureStore({
    reducer: {
        productsReducer: productsSlice, 
        navbarReducer: navbarSlice,    
        detailsReducer: detailsSlice,     
        userReducer: userSlice
    }
})