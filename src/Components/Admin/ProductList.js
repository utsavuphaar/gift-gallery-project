import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchProductByCategory } from '../../DataSlice/ProductSlice';
import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

function ProductList() {
    const dispatch = useDispatch();
    const { categoryProduct } = useSelector(store => store.Product);

    const [category, setCategory] = useState("All Category");
    const [state, stateDispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "set-product":
                return { ...state, productList: action.payload };
            case "delete-product":
                return { ...state, productList: state.productList.filter((_, index) => index !== action.payload) };
            case "set-category":
                return { ...state, categoryList: action.payload };
            default:
                return state;
        }
    }, { productList: [], categoryList: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await axios.get(ApiUrl.displayAllProducts);
                stateDispatch({ type: "set-product", payload: productResponse.data.result });

                const categoryResponse = await axios.get(ApiUrl.getCategories);
                stateDispatch({ type: "set-category", payload: categoryResponse.data.categories });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const getCategoryName = (e) => {
        const categoryName = e.target.value;
        setCategory(categoryName);
        displayCategoryItem(categoryName);
    };

    const displayCategoryItem = (category) => {
        if (category === "All Category") {
            axios.get(ApiUrl.displayAllProducts)
                .then(response => {
                    stateDispatch({ type: "set-product", payload: response.data.result });
                }).catch(err => {
                    console.log(err);
                });
        } else {
            dispatch(fetchProductByCategory(category));
        }
    };

    const handleDelete = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform the delete operation here if needed, e.g., making an API call
                // Example: axios.delete(`${ApiUrl.deleteProduct}/${productId}`)
                // After deletion, update the local state
                stateDispatch({ type: "delete-product", payload: index });
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                );
            }
        });
    };

    return (
        <>
            <div className="responsive-table-container">
                <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                    <h1 className="mt-3 text-primary">Product List ({state.productList.length})</h1>
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
                                <td><img src={product.thumbnail} id='p-image' width="100px" height="50px" alt={product.title} /></td>
                                <td>{product.title.slice(0, 30)}</td>
                                <td>{product.categoryName}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.rating}</td>
                                <td>
                                    <AiFillDelete className="fs-4 text-secondary" onClick={() => handleDelete(index)} />
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ProductList;
