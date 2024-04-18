import loadingImg from './loading.gif'
import './App.css';
import Product from './Components/User/Product.js';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
import AboutUs from './Components/User/AboutUs.js';
import ContactUs from './Components/User/ContactUs.js';
import GoogleSign from "./Components/User/GoogleSign.js"
import Order from './Components/User/Order.js';
import ProductList from './Components/Admin/ProductList.js';
import User from './Components/User/User.js';
import AdminHomePage from './Components/Admin/AdminHomePage.js';
import Userlist from './Components/Admin/Userlist.js';
import OrderList from './Components/Admin/OrderList.js';
import ChatBot from './Components/User/ChatBot.js';



function App() {

  let { isLoading, productList } = useSelector(store => store.Product);

  return <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/user' element={<User />} />
        <Route path="/product" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/header' element={<Header />} />
        <Route path='/viewmore' element={<ViewMore />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/order' element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} /> 
        <Route path='/ChatBot' element={<ChatBot/>}/>
        <Route path='admin' element={<AdminProfile />} >
        <Route index element={<AdminHomePage/>}/>
        <Route path="productList" element={<ProductList/>}/>
        <Route path='userList' element={<Userlist/>}/>
        <Route path="orderList" element={<OrderList/>}/>
        </Route>
      </Routes>
  </>
}

export default App;
