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
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/viewmore' element={<ViewMore />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/cartitems' element={<CartItems />} />
      </Routes>
  </>
}

export default App;
