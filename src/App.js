import logo from './logo.svg';
import './App.css';
import Product from './Components/User/Product';
import { Route, Routes } from 'react-router-dom';
import ViewMore from './Components/User/ViewMore';
import CartItems from './Components/User/CartItems';
import Signup from './Components/User/Signup.js';

function App() {
  return<>
    <Routes>
      <Route  path="/" element={<Product/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/viewmore' element={<ViewMore/>}/>
      <Route  path="/cartitems" element={<CartItems/>}/>
    </Routes>
  </>
}

export default App;
