import '../Style.css'
import { IoIosGift } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { FaUser } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { GiNotebook } from "react-icons/gi";
import { PiNotebookBold } from "react-icons/pi";
import { useState } from 'react';
import { fetchProduct, fetchProductByCategory, searchProduct } from '../../DataSlice/ProductSlice';
// import URL from "./Components/ApiUrl";
import URL from '../ApiUrl';
import Product from './Product';
export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState("All Category")
    const { user, productList } = useSelector(store => store.Product);
    const call = useDispatch();
    const handleSearch = (e) => {
        const query = e.target.value;
        if (!query)
            call(fetchProduct())
        call(searchProduct(query));
    };


    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-category")
            return { ...state, categoryList: action.payload };
    }, { categoryList: [] });
    useEffect(() => {
        axios.get(URL.getCategories)
            .then(response => {
                dispatch({ type: "set-category", payload: response.data.categories });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const getCategoryName = (e) => {
        const categoryName = e.target.value;
        setCategory(categoryName);
    }
    const navigate = useNavigate();
    const displayCategoryItem = () => {
        if (category == "All Category")
            call(fetchProduct())
        call(fetchProductByCategory(category));
    }
    return <>
        <div className="container-fluid header">
            <div className='row header-1  p-0 m-0'>
                <div className='col-md-3 title'>
                    <div className='mt-3 mb-2 icon  d-flex justify-content-center align-items-center'>
                        <IoIosGift className='fs-2 text-light' />
                    </div>
                    <span className='ms-2 fs-3 name'>
                        UtsavUphaar
                    </span>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center '>
                    <div className='me-5 mt-3 mb-2 search-bar'>
                        <input className='search' placeholder='Search' type='search' defaultValue={searchQuery} onChange={handleSearch} />
                        {/* <div className="dropdown"> */}
                        <select className='btn dropdown1' onChange={getCategoryName}>
                            <option className='border-0' value="All Category">All category</option>
                            {state.categoryList?.map((category, index) => <option key={index} value={category.categoryName}>
                                {category.categoryName}
                            </option>)}
                        </select>
                        {/* </div> */}
                        <button className=' searchbutton ' style={{ border: 'none' }} onClick={displayCategoryItem}>Search</button>
                    </div>
                </div>
                <div className='col-md-3 profile'>
                    <div className='mt-4' id='icons'><FaUser className='fs-5  mt-2 text-secondary' /><span className='iconstext mb-2 mt-1'>Profile</span></div>
                    <div className='mt-4' id='icons'><PiNotebookBold className='fs-5  mt-2 text-secondary'/><span className='iconstext mb-2 mt-1'>Orders</span></div>
                    <div className='mt-4' id='icons' onClick={() => navigate("/wishlist")}><AiFillHeart className=' fs-5 mt-2  text-secondary' /><span className='iconstext mb-2 mt-1'>Favourite</span></div>
                    <div className='mt-4' id='icons' onClick={() => navigate("/cart")}><FaCartShopping className=' fs-5 mt-2  text-secondary' /><span className='iconstext mb-2 mt-1'>My cart</span></div>
                </div>
            </div>
        </div >
        <ul className="mt-2 nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ '--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)' }}>
            <li className="nav-item" role="presentation">
                <button onClick={()=>navigate("/")} className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button onClick={()=>navigate("/aboutus")} className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">About</button>
            </li>
            <li className="nav-item" role="presentation">
                <button onClick={()=>navigate("/contactus")} className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Help</button>
            </li>
        </ul>
    </>
}