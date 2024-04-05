import logo from './logo.svg';
import './App.css';
import Product from './Components/User/Product';
import { Route, Routes } from 'react-router-dom';
import ViewMore from './Components/User/ViewMore';

function App() {
  return<>
    <Routes>
      <Route  path="/" element={<Product/>}/>
      <Route path='/viewmore' element={<ViewMore/>}/>
    </Routes>
  </>
}

export default App;
