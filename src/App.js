import logo from './logo.svg';
import './App.css';
import Product from './Components/User/Product.js';
import { Route, Routes } from 'react-router-dom';
import ViewMore from './Components/User/ViewMore.js';
import Signin from './Components/User/Signin.js';
import Signup from './Components/User/Signup-page.js';
import Wishlist from './Components/User/Wishlist.js';
import Header from './Components/User/Header.js';
import Home from './Components/User/Home.js';
import Checkout from './Components/User/Checkout.js';

import Cart from './Components/User/cart.js';
import DummyPay from './Components/User/DummyPay.js';
import PaymentSuccess from './Components/User/PaymentSuccess.js';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/product" element={<Product />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/viewmore' element={<ViewMore />} />
      <Route path ="/wishlist" element= {<Wishlist/>}/>
      <Route path ="/checkout" element= {<Checkout/>}/>
      <Route path="/paymentform" element={<DummyPay/>}/> //home 
        <Route path="/paymentsuccess" element={<PaymentSuccess />} /> //
    </Routes>
  </>
}

export default App;
