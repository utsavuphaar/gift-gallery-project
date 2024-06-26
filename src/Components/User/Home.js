import { Outlet } from '@mui/icons-material';
import Header from './Header';
import Product from './Product';
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import image2 from './friends-making-surprise-cake-canles-600nw-1290973357.jpg'
import image3 from './2309091530199150.webp'
import image4 from './gifts-horizontal-web-banner-colorful-cardboard-boxes-with-bows-for-presents-for-birthdays-christmas-and-other-holidays-illustration-for-header-website-cover-templates-in-modern-design-ve.jpg'
import { SlUser } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from 'react';
import Footer from './footer';
import axios from 'axios';
import URL from '../ApiUrl'
import {  fetchProductByCategory } from '../../DataSlice/ProductSlice';
import { useDispatch } from 'react-redux';
import { SiChatbot } from 'react-icons/si';
export default function Home() {
    // const [buttonDisabled, setButtonDisabled] = useState(false);
    let userId = localStorage.getItem('userId')
    const navigate = useNavigate();

    // const categoryRef = useRef([]);
    let [categoryRef,setCategoryRef] = useState([]);
    const call = useDispatch();
    let buttonDisabled = false;
    if (localStorage.getItem("userId"))
        buttonDisabled = true;

        useEffect(() => {
            axios.get(process.env.REACT_APP_FEW_CATEGORY)
            .then((result)=>{
                categoryRef = result.data.data.map(item => item.categoryName); // Extract categoryName values

                setCategoryRef(categoryRef);
            })
            .catch(err=>{
                console.log(err);
            })
        }, [])

        const displayCategoryItem = (category) => {
            call(fetchProductByCategory(category));
        }

    return <>
        <Header/>
        <div className="container-fluid home ">
            <div className="row banner ">
                <div className="col-md-3  mt-3 first p-0">
                    <div className='row category p-0'>
                        <div className='col-md-10'>

                        {categoryRef?.map((category,index) => <div style={{cursor: 'pointer'}} onClick={()=>displayCategoryItem(category)} className='category1 mt-1' key={index}>
                            {category}</div>
                                )}
                        </div>
                    </div>
                </div>
                <div className={!userId ? "col-md-6 mt-3 middle p-0" : "col-md-9 mt-3 middle p-0"}>
                    <div id="carouselExampleIndicators" className="middle carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <div type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="dot active" aria-current="true" aria-label="Slide 1"></div>
                            <div type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="dot" aria-label="Slide 2"></div>
                            <div type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="dot" aria-label="Slide 3"></div>
                        </div>
                        <div className="carousel-inner middle">
                            <div className="carousel-item active middle">
                                <img src={image} className="d-block w-100 banner-img" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image} className="d-block w-100 banner-img" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image} className="d-block w-100 banner-img" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev rounded" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next rounded" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className={!userId ? "col-md-3 mt-3 " : "d-none "}>
                    <div className='container p-3' style={{ backgroundColor: "#E3F0FF", borderRadius: "10px" }}>
                        <div className='d-flex'>
                            <div className='user '>
                                <SlUser className='text-light fs-4' />
                            </div>
                            <span className='ms-3' style={{ color: "#353738", fontWeight: "600" }}>Hi, user<br />let's get started</span>
                        </div>

                        <button className='mt-3 btn btn-primary w-100' onClick={() => navigate("/signup")} disabled={buttonDisabled}>Join now</button>
                        <button className='mt-2 btn btn-light text-primary w-100' onClick={() => navigate("/signin")} disabled={buttonDisabled}>Log in</button>

                    </div>
                </div>
            </div>
        </div>
        <div>
        <Link to="/ChatBot">
                <button className='position-fixed btn btn-primary float-end h-10 p-4' style={{marginTop:'-150px',marginRight:'10px',right:'0px',zIndex:2 , borderRadius : "50%"}}><SiChatbot style={{fontSize : "25px"}}  /></button><br />
        </Link>
        </div>
        <Product />
        <Footer />
    </>
}