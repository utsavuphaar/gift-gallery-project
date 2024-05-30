import '../Style.css';
import { IoIosGift } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { FaUser } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { PiNotebookBold } from "react-icons/pi";
import { fetchProduct, fetchProductByCategory, setProductList } from '../../DataSlice/ProductSlice';
import URL from '../ApiUrl';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);
    const [category, setCategory] = useState("All Category");
    let { user, productList } = useSelector(store => store.Product);
    const dispatch = useDispatch();

    // Debounce logic
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 1000); // 500ms debounce delay

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    // Effect for handling search
    useEffect(() => {
        if (!debouncedQuery) {
            dispatch(fetchProduct());
        } else {
            axios.get(URL.displayAllProducts).then(result => {
                const filteredProducts = result.data.result.filter(product =>
                    product.title.toUpperCase().includes(debouncedQuery.toUpperCase())
                );
                dispatch(setProductList(filteredProducts)); // Update the product list in the store
                console.log(filteredProducts);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [debouncedQuery, dispatch]);

    const [state, reducerDispatch] = useReducer((state, action) => {
        if (action.type === "set-category")
            return { ...state, categoryList: action.payload };
    }, { categoryList: [] });

    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_CATEGORIES)
            .then(response => {
                reducerDispatch({ type: "set-category", payload: response.data.categories });
            }).catch(err => {
                console.log(err);
            });
    }, []);

    const getCategoryName = (e) => {
        const categoryName = e.target.value;
        setCategory(categoryName);
    };

    const navigate = useNavigate();

    const displayCategoryItem = () => {
        if (category === "All Category") {
            dispatch(fetchProduct());
        } else {
            dispatch(fetchProductByCategory(category));
        }
    };

    return (
        <div className="container-fluid header position-sticky top-1 bg-white" style={{ position: "sticky", top: '0', zIndex: '100' }}>
            <div className='row header-1 p-0 m-0'>
                <div className='col-md-3 title'>
                    <div className='mt-3 mb-2 icon bg-primary d-flex justify-content-center align-items-center'>
                        <IoIosGift className='fs-2 text-light' />
                    </div>
                    <span className='ms-2 fs-3 text-primary name'>
                        UtsavUphaar
                    </span>
                </div>
                <div className='col-md-6 d-flex justify-content-center align-items-center '>
                    <div className='me-5 mt-3 mb-2 search-bar'>
                        <input
                            className='search'
                            placeholder='Search'
                            type='search'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <select className='btn dropdown1' onChange={getCategoryName}>
                            <option className='border-0' value="All Category">All category</option>
                            {state.categoryList?.map((category, index) => (
                                <option key={index} value={category.categoryName}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                        <button className='searchbutton bg-primary' style={{ border: 'none' }} onClick={displayCategoryItem}>Search</button>
                    </div>
                </div>
                <div className='col-md-3 profile'>
                    <div className='mt-4' id='icons' onClick={() => navigate("/user")}>
                        <FaUser className='fs-5 mt-2 text-primary' />
                        <span className='iconstext text-primary mb-2 mt-1'>Profile</span>
                    </div>
                    <div className='mt-4' id='icons' onClick={() => navigate("/order")}>
                        <PiNotebookBold className='fs-5 mt-2 text-primary' />
                        <span className='iconstext text-primary mb-2 mt-1'>Orders</span>
                    </div>
                    <div className='mt-4' id='icons' onClick={() => navigate("/wishlist")}>
                        <AiFillHeart className='fs-5 mt-2 text-primary' />
                        <span className='iconstext text-primary mb-2 mt-1'>Favourite</span>
                    </div>
                    <div className='mt-4' id='icons' onClick={() => navigate("/cart")}>
                        <FaCartShopping className='fs-5 mt-2 text-primary' />
                        <span className='iconstext text-primary mb-2 mt-1'>My cart</span>
                    </div>
                </div>
            </div>
            <ul className="mt-2 nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ '--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)' }}>
                <li className="nav-item" role="presentation">
                    <button onClick={() => navigate("/")} className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => navigate("/aboutus")} className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">About</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => navigate("/contactus")} className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={() => navigate("/help")} className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Help</button>
                </li>
            </ul>
        </div>
    );
}
