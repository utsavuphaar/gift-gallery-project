import logo from './logo.svg';
import './App.css';
import Product from './Components/User/Product.js';
import { Route, Routes } from 'react-router-dom';
import ViewMore from './Components/User/ViewMore.js';
import CartItems from './Components/User/CartItems';
import Signin from './Components/User/Signin.js';
import Signup from './Components/User/Signup-page.js';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/viewmore' element={<ViewMore/>}/>
      <Route  path="/cartitems" element={<CartItems/>}/>
    </Routes>
  </>
}

export default App;
