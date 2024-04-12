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
import Cart from './Components/User/cart.js';
import DummyPay from './Components/User/DummyPay.js';
import PaymentSuccess from './Components/User/PaymentSuccess.js';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/header' element={<Header/>}/>
      <Route path='/viewmore' element={<ViewMore />} />
      <Route path ="/wishlist" element= {<Wishlist/>}/>
      <Route path ="/checkout" element= {<Checkout/>}/>
      <Route path='/cartitems' element={<CartItems />} />
      <Route path="/paymentform" element={<DummyPay/>}/> //home 
        <Route path="/paymentsuccess" element={<PaymentSuccess />} /> //
    </Routes>
  </>
}

export default App;
