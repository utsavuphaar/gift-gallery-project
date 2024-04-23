import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProduct, fetchProductByCategory } from '../../DataSlice/ProductSlice';
import axios from 'axios';
import ApiUrl from '../ApiUrl';

function ProductList() {
    const call = useDispatch();
    const [category, setCategory] = useState("All Category")
    const { productList, isLoading, error, page } = useSelector(store => store.Product);
    useEffect(() => {
        fetchData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fetchData = () => {
        call(fetchProduct(page));
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (!isLoading && !error) {
                const nextPage = productList.length > 0 ? page + 1 : page - 1;
                call(fetchProduct(nextPage));
            }
        }
    };

    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-category")
            return { ...state, categoryList: action.payload };
    }, { categoryList: [] });

    useEffect(() => {
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
        if (category == "All Category")
            call(fetchProduct())
        call(fetchProductByCategory(category));
    }
    return (
        <>

            <section className='row mt-5' style={{ width: '80%' }}>
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
                            {/* </div> */}
                            <button className='btn btn-primary' style={{ border: 'none' }} onClick={displayCategoryItem}>Search</button>
                        </div>

                    </label>
                </div>

                <div className='col-md-12'>
                    <table className='table p-2 border text-center' style={{ maxHeight: '70vh', overflow: "scroll" }}>
                        <thead>
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
                            {productList.map((product, index) => <tr key={index} >
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
                                    <button className='btn text-danger'>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ProductList