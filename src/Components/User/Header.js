import '../Style.css'
import { IoIosGift } from "react-icons/io";
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { FaUser } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const { user } = useSelector(store => store.Product);
    const navigate = useNavigate()
    return <>
        <div className="container-fluid header">
            <div className='row header-1'>
                <div className='col-md-3  title'>
                    <div className='mt-3 mb-2 icon  d-flex justify-content-center align-items-center'>
                        <IoIosGift className='fs-2 text-light' />
                    </div>
                    <span className='ms-2 fs-3 name'>
                        UtsavUphaar
                    </span>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <div className='me-5 mt-3 mb-2 search-bar'>
                        <input className='search' placeholder='Search' />
                        <div className="dropdown">
                            <button className="dropdown1  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                All category
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className='searchbutton'>Search</button>
                    </div>
                </div>
                <div className='col-md-3  profile'>
                    <div className='mt-4' id='icons'><FaUser className='fs-5  mt-2 text-secondary' /><span className='iconstext mb-2 mt-1'>Profile</span></div>
                    <div className='mt-4' id='icons'><BiMessageDetail className=' fs-5 mt-2  text-secondary' /><span className='iconstext mb-2 mt-1'>Message</span></div>
                    <div className='mt-4' id='icons'><AiFillHeart className=' fs-5 mt-2  text-secondary' /><span className='iconstext mb-2 mt-1'>Favourite</span></div>
                    <div className='mt-4' id='icons' onClick={() => navigate("/cartitems")}><FaCartShopping className=' fs-5 mt-2  text-secondary' /><span className='iconstext mb-2 mt-1'>My cart</span></div>
                </div>
            </div>
        </div >
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    </>
}