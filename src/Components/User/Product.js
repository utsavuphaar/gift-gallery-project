// ---------------Filters-------------------

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

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

// -------------price range----------------


function valuetext(value) {
    return `${value}°C`;
}

function Product() {
    let userId = localStorage.getItem("userId")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productList, isLoading, error, page } = useSelector(store => store.Product);
    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fetchData = () => {
        dispatch(fetchProduct(page));
    };

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
        navigate( `viewmore/${product.id}`, { state: product });
    };

    const addToCart = (productId) => {
        if(localStorage.getItem("userId")){
            dispatch(addProductIntoCart({ userId, productId, quantity: 1 }));
        }else{
            alert("sign-in first")
        }
    };


    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId, productId }));
    };

    const buyNow = (product) => {
        if(localStorage.getItem("userId")){
            navigate("/buynow", { state: product });
        }else{
            alert("sign-in first")
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
        <div className="container-fluid position-relative" style={{ backgroundColor: "#F7FAFC" }}>
            <div className="row p-0  mb-3 ">
                <div className="col-lg-3 p-0 position-sticky top-0 border" style={{position:'sticky',top:0,height:'400px'}}>
                    <div>
                        <Accordion style={{ backgroundColor: "#F7FAFC", boxShadow: "none", border: "none" }}
                            expanded={expanded}
                            onChange={handleExpansion}
                            slots={{ transition: Fade }}
                            slotProps={{ transition: { timeout: 400 } }}
                            sx={{
                                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='text-dark fw-bold'>Brand</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                <Typography style={{ borderTop: "1px solid blue" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: "#F7FAFC", boxShadow: "none", border: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className="text-dark fw-bold">Feature</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                <span>Rahul Vishwakarma</span>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: "#F7FAFC", boxShadow: "none", border: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className="text-dark fw-bold">Price range</Typography>
                            </AccordionSummary>
                            <AccordionDetails>


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
                                            <input className='w-50' style={{ height: "30px", border: '1px solid blue', outline: 'none', borderRadius: "5px" }} type='number' min={0} />
                                        </div>
                                        <div className='col-sm-6 d-flex flex-column align-items-center'>
                                            <label>Max</label>
                                            <input className='w-50' style={{ height: "30px", paddingLeft: "5px", border: '1px solid blue', outline: 'none', borderRadius: "5px" }} type='number' min={9999} />
                                        </div>
                                    </div>
                                    <button className='w-75 mt-3 btn btn-outline-info'>Apply</button>
                                </div>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ backgroundColor: "#F7FAFC", boxShadow: "none", border: "none" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className="text-dark fw-bold">Rating</Typography>
                            </AccordionSummary>
                            <AccordionDetails>



                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-secondary' />
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-warning' />
                                        <ImStarFull className='text-secondary' />
                                        <ImStarFull className='text-secondary' />
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
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

                            <img src={product.thumbnail} className='gift-image' onClick={() => viewMore(product)} style={{ cursor: 'pointer', width: "270px", height: "230px", borderRadius: "10px" }} />
                            <div className="w-100 mt-2 d-flex justify-content-between">
                                <h6 className="mt-2 ms-2">{product.title.slice(0, 22)}</h6>
                                <div className="d-flex align-items-center justify-content-center ms-2  rounded" style={{ width: "55px" }}>
                                    <AiFillStar className="text-warning" />
                                    <span style={{ fontSize: "14px" }} className=" text-dark rounded d-flex justify-content-center align-items-center fw-bold ">{product.rating}</span>
                                </div>

                            </div>
                            <div className="w-100 d-flex justify-content-around align-items-center">
                                <div className="d-flex align-items-center justify-content-around ">
                                    <h5 className="" style={{ fontSize: "15px" }}>₹ {(product.price - (((parseInt(product.discountPercentage * product.price) / 100).toFixed(2)) * 1)).toFixed(2)}</h5>
                                    <del style={{ fontSize: '10px' }} className="ms-2 text-secondary">MRP{product.price}</del>
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
                                <button className="btn btn-outline-primary" onClick={() => addToCart(product.id)}>Move to cart</button>
                                <button onClick={() => buyNow(product)} className="btn btn-primary">Buy now</button>
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
