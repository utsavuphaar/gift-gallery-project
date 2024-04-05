import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("products/fetchProducts", async () => {
    let res = await axios.get("http://localhost:3000/product/viewAllProducts")
    // console.log(res.data.products)
    return res.data;
})

const slice = createSlice({
    name:"ProductSlice",
    initialState:{
        productList:[],
        isLoading:false,
        error:false
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
        }) 
    }
})


export default slice.reducer;