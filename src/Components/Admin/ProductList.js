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