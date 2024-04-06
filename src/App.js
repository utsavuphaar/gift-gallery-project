import logo from './logo.svg';
import './App.css';
import Product from './Components/User/Product.js';
import { Route, Routes } from 'react-router-dom';
import ViewMore from './Components/User/ViewMore.js';
import SignUp from './Components/User/Signup.js';

function App() {
  return <>
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path="/" element={<Product />} />
      <Route path='/viewmore' element={<ViewMore />} />
    </Routes>
  </>
}

export default App;
