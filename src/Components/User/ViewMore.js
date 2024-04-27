import { Link, Outlet, useLocation } from "react-router-dom"
import { FiHeart } from "react-icons/fi";
import store from "../../Store/store"
import { CiHeart } from "react-icons/ci";
import { addProductIntoCart, fetchProduct } from "../../DataSlice/ProductSlice";
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

    const viewMore = (product) => {
        navigate("/viewmore", { state: product })
    }
    const decrement = () => {
        if (inputValue > 1) {
            setInputValue(inputValue - 1);
        }
    };
    const addToCart = (productId) => {
        dispatch(addProductIntoCart({ userId: userId, productId: productId, quantity: inputValue }))
    }

    const buyNow = (productId, price) => {
        const finalPrice = (price * inputValue)
        alert(productId + " " + finalPrice)
    }
    // alert(inputValue)
    return <>
        <Header />
        <section className="p3 mt-4 d-flex h-auto border justify-content-center align-content-center" id="view-more-section" style={{ width: '100%', height: 'auto' }}>
            <div id="view-left">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div id="view-mid" className="p-2">
                <img style={{ width: '100%', height: '100%' }} src={state.thumbnail} />
                <div className="flex-column mt-2 d-flex justify-content-around">
                    {/* <div className="w-100 text-center">
                        <button className="btn btn-primary" onClick={decrement}>-</button>
                        <input min={1} readOnly type="number" value={inputValue} className="border ps-4 p-1 m-1" id="qty" />
                        <button className="btn btn-primary" onClick={() => setInputValue(inputValue + 1)} >+</button>
                    </div> */}
                    <div>
                        <button onClick={() => addToCart(state.id)} style={{ width: '200px', height: '50px' }} className="btn btn-outline-primary fw-bold">ADD TO CART</button> &nbsp;
                        <button onClick={() => buyNow(state.id, state.price)} style={{ width: '200px', height: '50px' }} className="btn btn-primary fw-bold">BUY NOW</button>
                    </div>
                    <div className="row mt-2 border" >
                        <h4 className="container m-2">Warranty</h4>
                        <div className="col-md-6 text-muted">
                            <p>Domestic Warranty</p>
                            <p>Warranty Summary</p><br/>
                            <p>Replacement Policy</p>
                        </div>
                        <div className="col-md-6">
                            <p>1 Year</p>
                            <p>1 Year Warranty from the Date of Purchase.</p>
                            <p>Seven days</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="view-right" className="m-4 mt-0">
                <span className="mt-4 fw-bold fs-4">{state.title}</span>
                {/* <span className="fs-2 text-secondary float-end me-2"><FiHeart/></span> */}
                <span className="float-end me-3 fs-2">
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </span>
                <br />
                <div categoryName="d-flex">
                    <span className="fs-3 d-inline me-3">
                        Rs.{(state.price - (((parseInt(state.discountPercentage * state.price) / 100).toFixed(2)) * 1)).toFixed(2)} | <span className="text-warning">({state.discountPercentage}% off )</span>
                    </span><hr />
                </div>
                <p>{state.description}</p>

                {/* --------------Rating----------- */}
                <div>
                    <Link to={{ ...location, state: { data: state.title } }}>

                    </Link>
                    <Outlet />
                </div>
                {/* <div className="d-flex border justify-content-between">
                    <p className="mt-2">view reviews</p>
                    <button className="btn text-primary">view</button>
                </div> */}
                {/* ---------------end------------------ */}
            </div>
        </section>
        {/* -------------------------------------------Related Products-------------------------------- */}

        <h4 className="container p-4">Related Products</h4>

        <div>
            <div className="container border p-2 mb-4 " id="related-products">
                {categoryProduct?.map((product, index) => <div key={index} id="related-products-child" className="m-2 p-2 h-auto border d-flex flex-column rounded position-relative">
                    <img width="100%" onClick={() => viewMore(product)} height="250px" id="view-image" src={product.thumbnail} />
                    <div className="d-flex position-absolute" id="buttons">
                        <div><CiHeart style={{ width: '25px', height: '25px' }} /></div>
                        <div><PiShoppingCartSimpleThin style={{ width: '20px', height: '20px' }} /></div>
                        <div><AiOutlineEye onClick={() => viewMore(product)} style={{ width: '20px', height: '20px' }} /></div>
                    </div>
                    <h6 className="mt-4">{product.title.split(" ").slice(0, 3).join(' ')}</h6>
                    <div className="d-flex">
                        <BiRupee /><span style={{ fontWeight: 'bold' }}>{product.price} </span><span className="text-secondary"><del>{product.price}</del></span>
                        &nbsp; <span className="text-success p-1" style={{ backgroundColor: 'lightgrey', fontSize: '14px', borderRadius: '5px', fontWeight: 'bold' }}>({product.discountPercentage} % off )</span>
                        &nbsp;&nbsp; <span className="bg-success d-flex p-1 text-light"><AiFillStar style={{ color: 'white' }} /> {product.rating}</span>
                    </div>
                </div>)}
            </div>
        </div>
        <Footer />
    </>
}



