import logo from './logo.svg';
import './App.css';
import Product from './Components/User/Product.js';
import { Route, Routes } from 'react-router-dom';
import ViewMore from './Components/User/ViewMore.js';
import SignUp from './Components/User/Signup.js';
import CartItems from './Components/User/CartItems';
import Wishlist from './Components/User/Wishlist.js';

function App() {
  return <>
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path="/" element={<Product />} />
      <Route path='/viewmore' element={<ViewMore />} />
      <Route path ="/wishlist" element= {<Wishlist/>}/>
      <Route path='/cartitems' element={<CartItems />} />
    </Routes>
  </>
}

export default App;
