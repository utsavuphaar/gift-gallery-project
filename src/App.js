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
import AdminHomePage from './Components/Admin/AdminHomePage.js';
// import Userlist from './Components/Admin/Userlist.js';
import OrderList from './Components/Admin/OrderList.js';
import ChatBot from './Components/User/ChatBot.js';
import UserProfile from './Components/User/UserProfile.js';
import ForgetPassword from './Components/User/forgetpassword.js';
import ResetPassword from './Components/User/Resetpassword.js';
import Auth from './Components/User/Auth.js';
import AddProduct from './Components/Admin/AddProduct.js';
import ViewReviewRating from './Components/User/View-Review-Rating.js';
import RateProduct from './Components/User/rating.js';
import BuyNow from './Components/User/BuyNow.js';
import DeliveryBoyDeshbord from './Components/DeliveryBoy/DeliveryBoyProfile.js';
import DeliveryBoyList from './Components/Admin/DeliveryBoyList.js';
import SignInFormDeliveryBoy from './Components/DeliveryBoy/SignInDeliveryBoy.js';
import DeliveryBoySignUpForm from './Components/Admin/CreateDeliveryBoy.js';
import DashBoard from './Components/DeliveryBoy/DashBoard.js';
import GetOrders from './Components/DeliveryBoy/GetOrders.js';
import OrderDetails from './Components/DeliveryBoy/OrderDetails.js';
import OrderCancellationForm from './Components/User/CancelOrder.js';
import Userlist from './Components/Admin/UserList.js';
import Help from './Components/User/Help.js';

import AuthDeliveryBoy from './Components/DeliveryBoy/AuthDeliveryBoy.js';
import MyOrders from './Components/User/MyOrders.js';
import CategoryList from './Components/Admin/CategoryList.js';
import InboxList from './Components/Admin/InboxList.js';
import YourOrders from './Components/DeliveryBoy/YourOrders.js';
import OrderData from './Components/DeliveryBoy/OrderData.js';
import VerifyOtp from './Components/DeliveryBoy/VerifyOTP.js';




function App() {

  let { isLoading, productList } = useSelector(store => store.Product);

  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ChatBot' element={<ChatBot />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path="/product" element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/signin' element={<Signin />} />
      <Route path="/forget" element={<ForgetPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/header' element={<Header />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path='/order' element={<Order />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />

      <Route path = "/orderDetail" element={<OrderDetails/>}/>
      <Route path='/help' element={<Help/>}/>

      <Route path='viewmore/:productId' element={<ViewMore />} >
        <Route index element={<ViewReviewRating />} />
      </Route>
      <Route path='/viewmore/rate-product' element={<RateProduct />} />

        <Route path = "/orderData" element={<OrderData/>}/>
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/cancel" element={<OrderCancellationForm/>}/>

      <Route path='/buynow' element={<BuyNow />} />
      <Route path="/user" element={<Auth><UserProfile /></Auth>} />
      <Route path='admin' element={<AdminProfile />} >
        <Route index element={<AdminHomePage />} />
        <Route path="inbox" element={<InboxList/>}/>
        <Route path="addProduct" element={<AddProduct />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="categorylist" element={<CategoryList/>}/>
        <Route path='userList' element={<Userlist />} />
        <Route path='deliveryBoyList' element={<DeliveryBoyList />} />
        <Route path="orderList" element={<OrderList />} />
      </Route>

      <Route path="/newAccount" element={<DeliveryBoySignUpForm />} />
      <Route path="/signIndeliveryboy" element={<SignInFormDeliveryBoy />} />

      <Route path='deliveryBoy' element={<AuthDeliveryBoy><DeliveryBoyDeshbord /></AuthDeliveryBoy>}>
        <Route index element={<DashBoard />} />
        <Route path='getOrder' element={<GetOrders />} />
        <Route path ="myOrders" element={<YourOrders/>}/>
      </Route>

      <Route path='/otpVerification' element={<VerifyOtp/>}/>
    </Routes>
  </>
}

export default App;