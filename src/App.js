import logo from './logo.svg';
import './App.css';
import Product from './Components/User/Product.js';
import { Route, Routes } from 'react-router-dom';
import ViewMore from './Components/User/ViewMore.js';
import CartItems from './Components/User/CartItems';
import Signin from './Components/User/Signin.js';
import Signup from './Components/User/Signup-page.js';
import Wishlist from './Components/User/Wishlist.js';
import Header from './Components/User/Header.js';
import Home from './Components/User/Home.js';
import Checkout from './Components/User/Checkout.js';
import Payment from './Components/User/Payment.js';
import PaymentForm from './Components/User/Payment.js';

function App() {
  return <>
  <PaymentForm/>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/viewmore' element={<ViewMore />} />
      <Route path ="/wishlist" element= {<Wishlist/>}/>
      <Route path ="/checkout" element= {<Checkout/>}/>
      <Route path='/cartitems' element={<CartItems />} />
    </Routes>
  </>
}

export default App;
