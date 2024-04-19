import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

import { ImStarFull } from "react-icons/im";

import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/store"
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useEffect } from "react";
import { addProductIntoCart, addProductIntoWishlist, fetchProduct } from "../../DataSlice/ProductSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const userId = localStorage.getItem("userId")
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
        navigate("/viewmore", { state: product });
    };

    const addToCart = (productId) => {
        dispatch(addProductIntoCart({ userId, productId }));
    };


    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId, productId }));
    };


    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };


    return <>
        <div className="container-fluid border">
            <div className="row p-0 border ">
                <div className="col-lg-3 p-0">
                    <div>
                        <Accordion
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
                                <Typography className='text-primary'>Brand</Typography>
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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className="text-primary">Feature</Typography>
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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className="text-primary">Rating</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography> */}
                                
                               
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-secondary'/>
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-secondary'/>
                                        <ImStarFull className='text-secondary'/>
                                        </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-warning'/>
                                        <ImStarFull className='text-secondary'/>
                                        <ImStarFull className='text-secondary'/>
                                        <ImStarFull className='text-secondary'/>
                                        </label>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <div className="col-lg-9 p-0 border d-flex flex-wrap justify-content-around align-items-center">
                    {productList?.map((product, index) => <div className=" mt-2 col-lg-4 d-flex justify-content-center align-items-center">
                        <div style={{ width: "280px" }} className="border p-2 m-2 gift-card">

                            <img src={product.thumbnail} onClick={() => viewMore(product)} style={{ cursor: 'pointer', width: "250px", height: "230px", borderRadius: "10px" }} />
                            <div className="w-100">
                                <h6 className=" ms-2 mt-2">{product.title.slice(0, 22)}</h6>
                            </div>
                            <div className="w-100  d-flex justify-content-center align-items-center">
                                <div className="d-flex align-items-center">
                                    <h5 className="" style={{ fontSize: "15px" }}>₹ {(product.price - (((parseInt(product.discountPercentage * product.price) / 100).toFixed(2)) * 1)).toFixed(2)}</h5>
                                    <del style={{ fontSize: '10px' }} className="ms-2 text-secondary">MRP{product.price}</del>
                                    <div className="ms-2 d-flex align-items-center justify-content-center text-primary" style={{ borderRadius: "5px", width: "60px", height: "20px", fontSize: '10px', backgroundColor: "#C7E1FF" }}>
                                        {product.discountPercentage}% off
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center justify-content-center " >
                                    <div className="d-flex align-items-center justify-content-center ms-2" style={{ width: "50px" }}>
                                        <span style={{ fontSize: "14px" }} className="p-1 rounded d-flex justify-content-center align-content-center fw-bold text-white bg-success">
                                            <AiFillStar className="text-white" />
                                            &nbsp;  {product.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 mt-2 d-flex justify-content-around align-items-center mb-1" >
                                <button className="btn btn-outline-primary" onClick={() => addToCart(product.id)}>Move to cart</button>
                                <button className="btn btn-primary">Buy now</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            {isLoading && <div className="container text-center fs-4">Loading...</div>}
            {/* {error && <div>Error: {error}</div>} */}
        </>
    );
};

export default Product;
