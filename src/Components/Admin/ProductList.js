import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProduct, fetchProductByCategory } from '../../DataSlice/ProductSlice';
import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { AiFillDelete } from 'react-icons/ai';

function ProductList() {
    const call = useDispatch();
    const { categoryProduct } = useSelector(store => store.Product);

    const [category, setCategory] = useState("All Category")
    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-product") {
            return { ...state, productList: action.payload };
        }
        else if (action.type === "delete-product") {
            if (window.confirm("Are you sure ?")) {
                state.productList.splice(action.payload, 1
                );
            }
            return { ...state };
        } else if (action.type === "set-category")
            return { ...state, categoryList: action.payload };
    }, { productList: [], categoryList: [] });

    useEffect(() => {
        axios.get("http://localhost:3000/product/displayAllProducts")
            .then(response => {
                dispatch({ type: "set-product", payload: response.data.result });
            }).catch(err => {
                console.log(err);
            })
        axios.get(ApiUrl.getCategories)
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
    const displayCategoryItem = () => {
        if (category == "All Category") {
            axios.get("http://localhost:3000/product/displayAllProducts")
                .then(response => {
                    dispatch({ type: "set-product", payload: response.data.result });
                }).catch(err => {
                    console.log(err);
                })
        } else {
            call(fetchProductByCategory(category));
            dispatch({ type: "set-product", payload: categoryProduct });
        }

    }
    return (
        <>

            {/* <section className='row mt-5' style={{ width: '75%' }}>
                <div className='mb-4 ms-2 form-group row'>
                    <label className='fs-4'>Product :
                        <input className='col-md-3 ms-2 fs-6 p-2 rounded border' type='search' placeholder='search product..' />
                        <div className='float-end'>
                            <select className='rounded fs-6 cursor-pointer p-2 border' onChange={getCategoryName}>
                                <option className='border' value="All Category">All category</option>
                                {state.categoryList?.map((category, index) => <option key={index} value={category.categoryName}>
                                    {category.categoryName}
                                </option>)}
                            </select>
                            <button className='btn btn-primary' style={{ border: 'none' }} onClick={displayCategoryItem}>Search</button>
                        </div>

                    </label>
                </div>

                <div className='col-md-12' style={{overflowY:"auto",height:'450px'}}>
                    <table className='table p-2 border text-center position-relative' style={{ maxHeight: '70vh', overflow: "scroll" }}>
                        <thead className='position-sticky' style={{top:'-5px'}}>
                            <tr className='bg-primary text-white text-center'>
                                <th>Sr. No.</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Rating</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {state.productList.map((product, index) => <tr key={index} >
                                <td className='text-center'>{index + 1}</td>
                                <td><img src={product.thumbnail} id='p-image' width="120px" height="80px" /></td>
                                <td>{product.title.slice(0, 30)}</td>
                                <td>{product.categoryName}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.rating}</td>
                                <td>
                                    <button className='btn text-primary'>Edit</button>
                                </td>
                                <td>
                                    <button className='btn text-danger' onClick={() => dispatch({ type: "delete-product", payload: index })}>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </section> */}

            <div className="responsive-table-container">
                <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                    <h1 className="mt-3 text-primary">Product List</h1>
                    <select className='rounded cursor-pointer p-2 border border-primary' style={{outline:"none"}} onChange={getCategoryName}>
                        <option className='border' value="All Category">All category</option>
                        {state.categoryList?.map((category, index) => <option key={index} value={category.categoryName}>
                            {category.categoryName}
                        </option>)}
                    </select>
                </div>
                <div className="custom-scroll">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr.No.</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Rating</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.productList.map((product, index) => <tr key={index} >
                                <td className='text-center'>{index + 1}</td>
                                <td><img src={product.thumbnail} id='p-image' width="100px" height="50px" /></td>
                                <td>{product.title.slice(0, 30)}</td>
                                <td>{product.categoryName}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.rating}</td>
                                <td>
                                    <AiFillDelete className="fs-4 text-secondary" onClick={() => dispatch({ type: "delete-product", payload: index })} />
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default ProductList