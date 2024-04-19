import { Outlet } from '@mui/icons-material';
import Header from './Header';
import Product from './Product';
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import { SlUser } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import Footer from './footer';
export default function Home() {
    // const [buttonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();
    let buttonDisabled = false;
    if (localStorage.getItem("userId"))
        buttonDisabled = true;
    const clearStorage = () => {
        localStorage.clear();

    }
    return <>
        <button onClick={clearStorage} className='btn btn-primary m-2'>Clear Local Storage</button>
        <Header />
        <div className="container-fluid home ">
            <div className="row banner ">
                <div className="col-md-3  mt-3 first p-0">
                    <div className='row category p-0'>
                        <div className='col-md-10'>
                            <div className='mt-1 category1'>Annivery</div>
                            <div className='category1'>Birthday</div>
                            <div className='category1'>Valetine Day</div>
                            <div className='category1'>Festival</div>
                            <div className='category1'>Men</div>
                            <div className='category1'>Women</div>
                            <div className='category1'>Home Decorate</div>
                            <div className='category1'>Flower</div>
                            <div className='category1'>Mother's day</div>
                            <div className='category1'>Father's day</div>

                        </div>

                    </div>
                </div>
                <div className="col-md-6 mt-3 middle p-0">
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
                <div className="col-md-3 mt-3 ">
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
        <Product />
        <Footer />
    </>
}