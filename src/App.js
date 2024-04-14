import loadingImg from './loading.gif'
import './App.css';
import Product from './Components/User/Product.js';
import { Route, Routes } from 'react-router-dom';
import {useEffect, useState } from 'react';

import ViewMore from './Components/User/ViewMore.js';
import Signin from './Components/User/Signin.js';
import Signup from './Components/User/Signup-page.js';
import Wishlist from './Components/User/Wishlist.js';
import Header from './Components/User/Header.js';
import Home from './Components/User/Home.js';
import Checkout from './Components/User/Checkout.js';

import Cart from './Components/User/cart.js';
import PaymentSuccess from './Components/User/PaymentSuccess.js';

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import AdminProfile from './Components/Admin/Admin.js';


function App() {

  let {isLoading,productList} = useSelector(store =>store.Product);

  return <>
    {!productList?(
      <div className='h-100 w-100 d-flex justify-content-center align-content-center'>
        <img src={loadingImg}/>
      </div>
    ):(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<AdminProfile/>}/>
      <Route path="/product" element={<Product />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/viewmore' element={<ViewMore />} />
      <Route path ="/wishlist" element= {<Wishlist/>}/>
      <Route path ="/checkout" element= {<Checkout/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess />} /> //
    </Routes>
    )}
  </>
}

export default App;
