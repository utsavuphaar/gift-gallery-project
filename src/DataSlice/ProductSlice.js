import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("products/fetchProducts", async () => {
    let res = await axios.get("http://localhost:3000/product/viewAllProducts")
    return res.data;
})

export const fetchProductByCategory = createAsyncThunk("products/fetchProductByCategory", async (category) => {
    let res = await axios.post(`http://localhost:3000/product/viewProductByCategory/${category}/`)
    return res.data.data;
})
export const fetchCartItems = createAsyncThunk("cart/cartItems", async (userId) => {
    let res = await axios.get(`http://localhost:3000/cart/list/${userId}/`)
    return res.data.data;
})
const slice = createSlice({
    name:"ProductSlice",
    initialState:{
        productList:[],
        categoryProduct:[],
        isLoading:false,
        error:false,
        cartItems:[],
    },
    reducers:{
        deleteProduct:(state,action)=>{
            const index= state.productList.findIndex(item=> item.id=== action.payload)
            if (index !== -1){
                state.productList.splice(index, 1);
            }    
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchProduct.fulfilled,(state,action)=>{
            state.productList = action.payload;
        }).addCase(fetchProduct.rejected,(state,action)=>{
            state.error = true;
        }).addCase(fetchProductByCategory.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchProductByCategory.fulfilled,(state,action)=>{
            state.categoryProduct = action.payload;
        }).addCase(fetchProductByCategory.rejected,(state,action)=>{
            state.error = true;
        }).addCase(fetchCartItems.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchCartItems.fulfilled,(state,action)=>{
            state.cartItems = action.payload;
        }).addCase(fetchCartItems.rejected,(state,action)=>{
            state.error = true;
        })
    },
})


export default slice.reducer;