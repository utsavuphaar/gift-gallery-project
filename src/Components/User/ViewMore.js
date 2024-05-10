import { Link, Outlet, useLocation } from "react-router-dom"
import { FiHeart } from "react-icons/fi";
import store from "../../Store/store"
import { CiHeart } from "react-icons/ci";
import { addProductIntoCart, addProductIntoWishlist, fetchProduct } from "../../DataSlice/ProductSlice";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { AiFillStar } from "react-icons/ai";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductByCategory } from "../../DataSlice/ProductSlice";
import Header from "./Header";
import Footer from "./footer";
import { FaHeart } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import ReactImageMagnify from 'react-image-magnify';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function ViewMore() {
    const location = useLocation();
    const userId = localStorage.getItem("userId");
    const [inputValue, setInputValue] = useState(1)
    const navigate = useNavigate("")
    const { categoryProduct } = useSelector(store => store.Product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductByCategory(state.categoryName));
    }, [])
    const [value, setValue] = useState("")
    const { state } = useLocation();
    let [currentimage, setcurrentimage] = useState(state.thumbnail);

    const changeimage = (image) => {
        setcurrentimage(image);
    };


    const viewmore = (product) =>{
        navigate(`/viewmore/${product.id}`, { state: product });
      }
    const decrement = () => {
        if (inputValue > 1) {
            setInputValue(inputValue - 1);
        }
    };
    const addToCart = (productId) => {
        dispatch(addProductIntoCart({ userId: userId, productId: productId, quantity: inputValue }))
    }

    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId, productId }));
        let save = document.getElementById(`save${productId}`);
        save.style.color = 'red'
    };

    const buyNow = () => {
        let price = state.price - ((parseInt(state.discountPercentage * state.price) / 100))
        const finalPrice = (price * inputValue)
        // alert(finalPrice)
        

    }
    // alert(inputValue)
    return <>
        <Header />

        <div className="container p-0 mt-5" style={{ maxWidth: "90%", boxShadow: '0px 0px 1px 1px gainsboro' }}>
            <div className="row m-0 p-3">
                <div className="col-md-6">
                    <div className="border" style={{ width: "100%" }}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: currentimage,
                                width: '100%',
                                height: '100%'
                            },
                            largeImage: {
                                src: currentimage,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImagePosition: 'over'
                        }} />
                    </div>

                    <div className="mt-3 d-flex justify-content-between align-items-center" style={{ overflowX: 'auto' }}>
                        {state.images?.split(',').map((image, index) => {
                            if (index < 3) {
                                const imageUrl = image.trim();
                                return (
                                    <img
                                        key={index}
                                        className="w-25 h-100"
                                        onClick={() => changeimage(imageUrl)}
                                        src={imageUrl}
                                        alt={`Image ${index + 1}`}
                                        style={{ cursor: 'pointer' }}
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container mt-2">
                        <div className="p-2 d-flex justify-content-between">
                            <h4 className="w-75">{state.title}</h4>
                            <FiHeart className="fs-5 text-primary" />
                        </div>
                        <div className="d-flex ms-2 align-items-center">
                            <div className="fs-4">Rs {(state.price - (((parseInt(state.discountPercentage * state.price) / 100).toFixed(2)) * 1)).toFixed(2)} | </div>
                            <div className="ms-2 p-2" style={{ fontSize: "14px" }}><AiFillStar className="text-warning" /> {state.rating} <span style={{ fontSize: "12px" }} className="ms-1">rating</span></div>
                        </div>
                        <hr className="mt-3" />
                        <div className="mt-3">{state.description}</div>
                        <div className="mt-4 d-flex align-items-center">
                            <CiDeliveryTruck className="fs-5 text-secondary" />
                            <span className="ms-2" style={{ fontSize: "13px" }}>Free Domestic shipping on all orders over Rs 250</span>
                        </div>
                        <div className="mt-3 d-flex align-items-center">
                            <GiReturnArrow className="me-1 text-secondary" />
                            <span className="ms-2" style={{ fontSize: "13px" }}>Delivers in 3-7 working days shipping & return </span>
                        </div>
                        <div className="mt-4 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center p-2" style={{ borderRadius: "50px", border: "1px solid #0D6EFD", height: "40px" }}>
                                <button className="fs-5" style={{ border: 'none', backgroundColor: "white", width: "20px" }} onClick={decrement}>-</button>
                                <input min={1} style={{ paddingLeft: "15px", width: '40px', border: "none" }} readOnly type="number" value={inputValue} id="qty" />
                                <button style={{ border: 'none', backgroundColor: "white", width: "20px" }} className="fs-5" onClick={() => setInputValue(inputValue + 1)}>+</button>
                            </div>
                            <div className="container">
                                <button onClick={() => addToCart(state.id)} style={{ height: '40px', borderRadius: "50px", color: "#0D6EFD", border: "1px solid #0D6EFD", backgroundColor: "white" }} className="w-100 addtocartbutton">Add to Cart</button>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button onClick={() => buyNow()} style={{ color: "white", backgroundColor: "#0D6EFD", border: 'none', borderRadius: "50px", height: '40px' }} className="w-100">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* --------------Rating----------- */}
        <div>
            <Link to={{ ...location, state: { data: state.title } }}>
            </Link>
        </div>
        <Outlet />
        {/* -------------------------------------------Related Products-------------------------------- */}


        <div className="container mt-5 p-0 mb-4" style={{ borderRadius: "20px", boxShadow: '0px 0px 2px 2px #F7FAFC' }}>
            <h4 className="container p-3 d-flex align-items-center" ><div className="ms-3" style={{ borderRadius: "5px", width: '30px', height: '40px', backgroundColor: "#0D6EFD" }}></div>&nbsp; Related Products</h4>
            <div className="container p-2 " style={{ borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", backgroundColor: "#F7FAFC" }} id="related-products">
                {categoryProduct?.map((product, index) => <div className=" mt-2 col-lg-3 d-flex justify-content-center align-items-center">

                    <div style={{ width: "250px", borderRadius: "10px" }} className="bg-white  p-2 m-2 d-flex flex-column align-items-center">

                        <img src={product.thumbnail} className='gift-image' style={{ width: "220px", height: "200px", borderRadius: "10px" }} />
                        <div className='icon-div' style={{ marginTop: "130px" }}>
                            <div className='heart-icon'><FaHeart id={`save${product.id}`} onClick={() => addToWishlist(product.id)} /></div>
                            <div onClick={() => viewmore(product)} className='heart-icon'><IoEye className=' ' /></div>
                        </div>
                        <div className="w-100 mt-2 d-flex justify-content-between">
                            <h6 className="mt-2 ms-2">{product.title.slice(0, 22)}</h6>
                            <div className="d-flex align-items-center justify-content-center ms-2  rounded" style={{ width: "55px" }}>
                                <AiFillStar className="text-warning" />
                                <span style={{ fontSize: "14px" }} className=" text-dark rounded d-flex justify-content-center align-items-center fw-bold ">{product.rating}</span>
                            </div>

                        </div>
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center justify-content-around  ms-2">
                                <h5 className="" style={{ fontSize: "15px" }}>₹ {(product.price - (((parseInt(product.discountPercentage * product.price) / 100).toFixed(2)) * 1)).toFixed(2)}</h5>
                                <del style={{ fontSize: '11px' }} className="ms-2 text-secondary">MRP{product.price}</del>
                            </div>
                            <div className="ms-2 d-flex align-items-center justify-content-center text-primary" style={{ borderRadius: "5px", width: "60px", height: "20px", fontSize: '10px', backgroundColor: "#C7E1FF" }}>
                                {product.discountPercentage}% off
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
        <Footer />
    </>
}



