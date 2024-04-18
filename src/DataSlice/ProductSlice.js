import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import URL from "../Components/ApiUrl";

// import dotenv from 'dotenv';
// dotenv.config();

export const fetchProduct = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get(URL.getProducts);
        // process.env.GET_PRODUCT
        return response.data.products;
    } catch (error) {
        // Handle error
        console.error("Error fetching products:", error);
        throw error; // Rethrow the error for the caller to handle
    }
});


export const fetchProductByCategory = createAsyncThunk("products/fetchProductByCategory", async (category) => {
    let res = await axios.post(`http://localhost:3000/product/viewProductByCategory/${category}/`)
    return res.data.data;
})

export const fetchCartItems = createAsyncThunk("cart/cartItems", async (userId) => {
    let res = await axios.get(`http://localhost:3000/cart/list/${userId}/`)
    console.log(res.data.data)
    return res.data.data;
})


export const fetchWishList = createAsyncThunk("wishlist/viewAllfavoriteproduct", async ({ userId }) => {
    try {
        let res = await axios.post(URL.getWishlist, { userId: userId })
        return res.data.wishlist;
    } catch (err) {
        console.log(err)
    }
})

export const addProductIntoCart = createAsyncThunk("cart/addToCart", async ({ userId, productId }) => {
    try {
        let res = await axios.post(URL.addToCart, { userId, productId })
        alert(res.data.message)
        return res.data;
    } catch (err) {
        console.log(err)
    }
})

export const addProductIntoWishlist = createAsyncThunk("wishlist/addProductIntoWishlist", async ({ userId, productId }) => {
    try {
        let res = await axios.post(URL.addToWishlist, { userId, productId })
        alert(res.data.message)
        return res.data;
    } catch (err) {
        console.log(err)
    }
})



export const deleteProductFromCart = createAsyncThunk(
    'cart/deleteProductFromCart', // Action type prefix
    async ({ userId, productId }, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:3000/cart/removeItem/${userId}/${productId}`);
            alert("Item deleted successfully");
            return response.data;
        } catch (error) {
            alert("Something went wrong while deleting the item.");
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteAllProductsFromCart = createAsyncThunk("cart/removeAllItems", async ({ userId }) => {
    try {
        let res = await axios.delete(`http://localhost:3000/cart/removeAllItems/${userId}`)
        alert("Removed all items successfully");
        return res.data;
    } catch (err) {
        alert("something wrong")
        console.log(err)
    }
})

export const deleteProductFromWishList = createAsyncThunk(
    'wishlist/deleteProductFromCart', // Action type prefix
    async ({ userId, productId }, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:3000/wishlist/removeItemFromWishList/${userId}/${productId}`);
            alert("Item deleted successfully");
            return response.data;
        } catch (error) {
            alert("Something went wrong while deleting the item.");
            console.error(error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


export const updateQtyOfProductInCart = createAsyncThunk("cart/updateQty", async ({ userId, productId, quantity }) => {
    try {
        const response = await axios.post("http://localhost:3000/cart/updateQty", { userId, productId, quantity })
        return response.data;
    } catch (err) {
        console.log(err)
    }
})

const slice = createSlice({
    name: "ProductSlice",
    initialState: {
        productList: [],
        categoryProduct: [],
        user: "",
        cartItems: [],
        wishList: [],
        isLoading: false,
        error: false,
    },
    reducers: {
        deleteProduct: (state, action) => {
            const index = state.productList.findIndex(item => item.id === action.payload)
            if (index !== -1) {
                state.productList.splice(index, 1);
            }
        },
        removeProductFromCart: (state, action) => {
            state.cartItems.splice(action.payload, 1);
        },
        removeAllProductsFromCart: (state, action) => {
            state.cartItems.splice(0);
        },
        removeProductFromWishlist: (state, action) => {
            state.wishList.splice(action.payload, 1);
        },
        searchProduct: (state, action) => {
            if (!action.payload.trim()) {
                fetchProduct();
            }
            const filteredProducts = state.productList.filter(product =>
                product.title.toUpperCase().includes(action.payload.toUpperCase())
            );
            return {
                ...state,
                productList: filteredProducts
            };
        }
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
            state.productList = action.payload;
        }).addCase(fetchProductByCategory.rejected, (state, action) => {
            state.error = true;
        }).addCase(fetchCartItems.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchCartItems.fulfilled, (state, action) => {
            state.cartItems = action.payload;
        }).addCase(fetchCartItems.rejected, (state, action) => {
            state.error = true;
        }).addCase(fetchWishList.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchWishList.fulfilled, (state, action) => {
            state.wishList = action.payload;
        }).addCase(fetchWishList.rejected, (state, action) => {
            state.error = true;
        })
    },
})


export default slice.reducer;
export const { removeProductFromCart, searchProduct, removeAllProductsFromCart, removeProductFromWishlist } = slice.actions;