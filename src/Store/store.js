import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../DataSlice/ProductSlice";

const store = configureStore({
   reducer:{
       Product:ProductSlice
   }
})


export default store;