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
export const insertdata = createAsyncThunk("create/signup", async ({ name, email, password }) => {
    try {
        let res = await axios.post('http://localhost:3000/user/signUp', { name, email, password })
        console.log(res);
        return res.data.message;
    } catch (error) {
        // alert("something went wrong")
        console.log(error);
    }
})
export const fetchuser = createAsyncThunk("login/signin",async ({email,password})=>{
    try {
        let res = await axios.post('http://localhost:3000/user/signIn',{email,password})
        console.log(res);
        console.log(res.data.user);
        if(res.status===200){
            alert("Sign in successfully....")
        }
        return res.data.user
    } catch (error) {
        // alert("Unauthorized User...")
        console.log(error);
    }
})

const slice = createSlice({
    name: "ProductSlice",
    initialState: {
        productList: [],
        categoryProduct: [],
        isLoading: false,
        error: false,
        cartItems: [],
        user:""

    },
    reducers: {
        deleteProduct: (state, action) => {
            const index = state.productList.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                state.productList.splice(index, 1);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.productList = action.payload;
        }).addCase(fetchProduct.rejected, (state, action) => {
            state.error = true;
        }).addCase(fetchProductByCategory.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchProductByCategory.fulfilled, (state, action) => {
            state.categoryProduct = action.payload;
        }).addCase(fetchProductByCategory.rejected, (state, action) => {
            state.error = true;
        }).addCase(fetchCartItems.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchCartItems.fulfilled, (state, action) => {
            state.cartItems = action.payload;
        }).addCase(fetchCartItems.rejected, (state, action) => {
            state.error = true;
        }).addCase(insertdata.fulfilled,(state,action)=>{
            state.error = true;
        }).addCase(fetchuser.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchuser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = true;
        }).addCase(fetchuser.rejected, (state, action) => {
            state.error = false;
        })
    },
})


export default slice.reducer;