// ---------------Filters-------------------

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Zoom } from 'react-toastify';
import { FaHeart } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
// -------------------Price filter---------------------------

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// -------------------------------

import { ImStarFull } from "react-icons/im";

// --------------------Productlist-----------------

import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/store"
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useEffect } from "react";
import { addProductIntoCart, addProductIntoWishlist, fetchProduct } from "../../DataSlice/ProductSlice";

import { Link, useNavigate } from "react-router-dom";
import { Stack } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import URL from '../ApiUrl'
import { useState } from 'react';
// -------------price range----------------


function valuetext(value) {
    return `${value}°C`;
}

function Product() {
    let userId = localStorage.getItem("userId")
    const [brand, setbrand] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productList, isLoading, error, page } = useSelector(store => store.Product);

    useEffect(() => {
        fetchData();
        brandlist();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    const fetchData = () => {
        dispatch(fetchProduct(page));
    };

    const brandlist = () => {
        axios.get(URL.branlist)
            .then((result) => {
                console.log(result.data.data);
                setbrand(result.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getproductbybrand = (brand) => {
        axios.post(URL.getproductbybrand, { brand })
            .then((result) => {
                productList = result.data.product;
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (!isLoading && !error) {
                const nextPage = productList.length > 0 ? page + 1 : page - 1;
                dispatch(fetchProduct(nextPage));
            }
        }
    };

    const viewMore = (product) => {
        navigate(`viewmore/${product.id}`, { state: product });
    };

    const addToCart = (productId) => {
        if (localStorage.getItem("userId")) {
            dispatch(addProductIntoCart({ userId, productId, quantity: 1 }));
        } else {
            toast.info("Sign-in first", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    };


    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId, productId }));
        let save = document.getElementById("save");
        save.style.color = 'red'
    };

    const buyNow = (product) => {
        if (localStorage.getItem("userId")) {
            navigate("/buynow", { state: product });
        } else {
            toast.info("Sign-in first", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <>
        <ToastContainer />
        <div className="container-fluid position-relative" style={{ backgroundColor: "#F7FAFC" }}>
            <div className="row p-0  mb-3 ">
                <div className="col-lg-3 p-0 " >
                    <div>
                        <Accordion style={{ backgroundColor: "", boxShadow: "none", border: "none" }} defaultExpanded  >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='ms-5 text-primary ' style={{ fontSize: "17px", fontWeight: "600" }}>Brand</Typography>
                            </AccordionSummary >
                            {brand.map((item, index) =>
                                <AccordionDetails className='ms-5'>
                                    <Typography key={index} >
                                        <input className="form-check-input ms-3" type="checkbox" onClick={() => getproductbybrand(item)} value="" id="flexCheckDefault" />
                                        <label className="form-check-label ms-3" for="flexCheckDefault">
                                            {item}
                                        </label>
                                    </Typography>
                                </AccordionDetails>
                            )}
                        </Accordion>

                        <Accordion style={{ backgroundColor: "", boxShadow: "none", border: "none" }} defaultExpanded  >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='ms-5 text-primary ' style={{ fontSize: "17px", fontWeight: "600" }}>Price range</Typography>
                            </AccordionSummary >

                            <AccordionDetails className='ms-2'>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                    />
                                </Box>
                                <div className='container d-flex flex-column justify-content-center align-items-center'>
                                    <div className='row d-flex'>
                                        <div className='col-sm-6 d-flex flex-column justify-content-center align-items-center'>
                                            <label>Min</label>
                                            <input className='w-50' style={{ height: "30px", border: '2px solid #0D6EFD', outline: 'none', borderRadius: "5px" }} type='number' min={0} />
                                        </div>
                                        <div className='col-sm-6 d-flex flex-column align-items-center'>
                                            <label>Max</label>
                                            <input className='w-50' style={{ height: "30px", paddingLeft: "5px", border: '2px solid #0D6EFD', outline: 'none', borderRadius: "5px" }} type='number' min={9999} />
                                        </div>
                                    </div>
                                    <button className='w-75 mt-3 btn btn-primary'>Apply</button>
                                </div>

                            </AccordionDetails>
                        </Accordion>

                        <Accordion style={{ backgroundColor: "", boxShadow: "none", border: "none" }} defaultExpanded  >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='ms-5 text-primary ' style={{ fontSize: "17px", fontWeight: "600" }}>Rating</Typography>
                            </AccordionSummary >

                            <AccordionDetails className='ms-5'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-secondary' />
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-secondary' />
                                        <ImStarFull className='text-secondary' />
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-secondary' />
                                        <ImStarFull className='text-secondary' />
                                        <ImStarFull className='text-secondary' />
                                    </label>
                                </div>
                            </AccordionDetails>
                        </Accordion>


                    </div>
                </div>
                <div className="col-lg-9 p-0  d-flex flex-wrap justify-content-around align-items-center">

                    {productList?.map((product, index) => <div className=" mt-2 col-lg-4 d-flex justify-content-center align-items-center">

                        <div style={{ width: "300px", borderRadius: "10px" }} className="bg-white  p-2 m-2 d-flex flex-column align-items-center">

                            <img src={product.thumbnail} className='gift-image'  style={{  width: "270px", height: "230px", borderRadius: "10px" }} />
                            <div className='icon-div'>
                                <div className='heart-icon'><FaHeart id='save' onClick={()=>addToWishlist(product.id)} className='' /></div>
                                <div onClick={() => viewMore(product)} className='heart-icon'><IoEye className=' ' /></div>
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
                                {/* <div className=" d-flex align-items-center justify-content-center " >
                                    <div className="d-flex align-items-center justify-content-center ms-2  rounded" style={{ width: "55px" }}>
                                        <AiFillStar className="text-warning" />
                                        <span style={{ fontSize: "12px" }} className="p-1 text-dark rounded d-flex justify-content-center align-items-center fw-bold ">{product.rating}</span>
                                    </div>
                                </div> */}
                            </div>
                            <div className="w-100 mt-2 d-flex justify-content-around align-items-center mb-1" >
                                {/* <button className="btn btn-outline-primary" onClick={() => addToCart(product.id)}>Move to cart</button> */}
                                <div class="movetocart" onClick={() => addToCart(product.id)}>
                                    <div class="movetocart-wrapper">
                                {/* <button className="btn btn-outline-primary" onClick={() => addToCart(product.id)}>Move to cart</button> */}
                                        <div class="text-1">Move to cart</div>
                                        <span class="iconbutton">
                                            <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                {/* <button onClick={() => buyNow(product)} className="btn btn-primary">Buy now</button> */}
                                <div className="movetocart1" onClick={() => buyNow(product)}>
                                    <div className="movetocart-wrapper">
                                        <div className="text-2" >Buy now</div>
                                        <span className="iconbutton">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        {/* {isLoading && <div className="container text-center fs-4">Loading...</div>}s */}
    </>
};

export default Product;
