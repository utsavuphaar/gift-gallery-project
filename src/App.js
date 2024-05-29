import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import loadingImg from './loading.gif';
import './App.css';

// Lazy load components
const Product = lazy(() => import('./Components/User/Product'));
const ViewMore = lazy(() => import('./Components/User/ViewMore'));
const Signin = lazy(() => import('./Components/User/Signin'));
const Signup = lazy(() => import('./Components/User/Signup-page'));
const Wishlist = lazy(() => import('./Components/User/Wishlist'));
const Header = lazy(() => import('./Components/User/Header'));
const Home = lazy(() => import('./Components/User/Home'));
const Checkout = lazy(() => import('./Components/User/Checkout'));
const Cart = lazy(() => import('./Components/User/cart'));
const PaymentSuccess = lazy(() => import('./Components/User/PaymentSuccess'));
const AdminProfile = lazy(() => import('./Components/Admin/Admin'));
const AboutUs = lazy(() => import('./Components/User/AboutUs'));
const ContactUs = lazy(() => import('./Components/User/ContactUs'));
const GoogleSign = lazy(() => import('./Components/User/GoogleSign'));
const Order = lazy(() => import('./Components/User/Order'));
const ProductList = lazy(() => import('./Components/Admin/ProductList'));
const AdminHomePage = lazy(() => import('./Components/Admin/AdminHomePage'));
const OrderList = lazy(() => import('./Components/Admin/OrderList'));
const ChatBot = lazy(() => import('./Components/User/ChatBot'));
const UserProfile = lazy(() => import('./Components/User/UserProfile'));
const ForgetPassword = lazy(() => import('./Components/User/forgetpassword'));
const ResetPassword = lazy(() => import('./Components/User/Resetpassword'));
const Auth = lazy(() => import('./Components/User/Auth'));
const AddProduct = lazy(() => import('./Components/Admin/AddProduct'));
const ViewReviewRating = lazy(() => import('./Components/User/View-Review-Rating'));
const RateProduct = lazy(() => import('./Components/User/rating'));
const BuyNow = lazy(() => import('./Components/User/BuyNow'));
const DeliveryBoyDeshbord = lazy(() => import('./Components/DeliveryBoy/DeliveryBoyProfile'));
const DeliveryBoyList = lazy(() => import('./Components/Admin/DeliveryBoyList'));
const SignInFormDeliveryBoy = lazy(() => import('./Components/DeliveryBoy/SignInDeliveryBoy'));
const DeliveryBoySignUpForm = lazy(() => import('./Components/Admin/CreateDeliveryBoy'));
const DashBoard = lazy(() => import('./Components/DeliveryBoy/DashBoard'));
const GetOrders = lazy(() => import('./Components/DeliveryBoy/GetOrders'));
const OrderDetails = lazy(() => import('./Components/DeliveryBoy/OrderDetails'));
const OrderCancellationForm = lazy(() => import('./Components/User/CancelOrder'));
const Userlist = lazy(() => import('./Components/Admin/UserList'));
const Help = lazy(() => import('./Components/User/Help'));
const AuthDeliveryBoy = lazy(() => import('./Components/DeliveryBoy/AuthDeliveryBoy'));
const MyOrders = lazy(() => import('./Components/User/MyOrders'));
const CategoryList = lazy(() => import('./Components/Admin/CategoryList'));
const InboxList = lazy(() => import('./Components/Admin/InboxList'));
const YourOrders = lazy(() => import('./Components/DeliveryBoy/YourOrders'));
const OrderData = lazy(() => import('./Components/DeliveryBoy/OrderData'));
const VerifyOtp = lazy(() => import('./Components/DeliveryBoy/VerifyOTP'));

function App() {
    let { isLoading, productList } = useSelector(store => store.Product);

    return (
        <Suspense fallback={<div className="loading"><img src={loadingImg} alt="Loading..." /></div>}>
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
                <Route path="/orderDetail" element={<OrderDetails />} />
                <Route path='/help' element={<Help />} />
                <Route path='viewmore/:productId' element={<ViewMore />} >
                    <Route index element={<ViewReviewRating />} />
                </Route>
                <Route path='/viewmore/rate-product' element={<RateProduct />} />
                <Route path="/orderData" element={<OrderData />} />
                <Route path="/myorders" element={<MyOrders />} />
                <Route path="/cancel" element={<OrderCancellationForm />} />
                <Route path='/buynow' element={<BuyNow />} />
                <Route path="/user" element={<Auth><UserProfile /></Auth>} />
                <Route path='admin' element={<AdminProfile />} >
                    <Route index element={<AdminHomePage />} />
                    <Route path="inbox" element={<InboxList />} />
                    <Route path="addProduct" element={<AddProduct />} />
                    <Route path="productList" element={<ProductList />} />
                    <Route path="categorylist" element={<CategoryList />} />
                    <Route path='userList' element={<Userlist />} />
                    <Route path='deliveryBoyList' element={<DeliveryBoyList />} />
                    <Route path="orderList" element={<OrderList />} />
                </Route>
                <Route path="/newAccount" element={<DeliveryBoySignUpForm />} />
                <Route path="/signIndeliveryboy" element={<SignInFormDeliveryBoy />} />
                <Route path='deliveryBoy' element={<AuthDeliveryBoy><DeliveryBoyDeshbord /></AuthDeliveryBoy>}>
                    <Route index element={<DashBoard />} />
                    <Route path='getOrder' element={<GetOrders />} />
                    <Route path="myOrders" element={<YourOrders />} />
                </Route>
                <Route path='/otpVerification' element={<VerifyOtp />} />
            </Routes>
        </Suspense>
    );
}

export default App;
