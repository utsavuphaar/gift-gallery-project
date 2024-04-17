import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProduct } from '../../DataSlice/ProductSlice';

function ProductList() {
    const dispatch = useDispatch();
    const navigate = useNavigate("")
    const { productList } = useSelector(store => store.Product);
    useEffect(() => {
        dispatch(fetchProduct());
    }, [])
  return (
    <>
    
    <section className='row mt-5' style={{width:'80%'}}>
        <div className='mb-4 ms-2 form-group row'>
            <label className='fs-4'>Product : 
            <input className='col-md-3 ms-2 fs-6 p-2 rounded border' type='search' placeholder='search product..'/>
            <select className='col-md-3 fs-5 cursor-pointer border float-end rounded p-1'>
                <option>All Category</option>
                <option>B</option>
            </select>
            </label>
        </div>

        <div className='col-md-12'>
            <table className='table p-2 border text-center' style={{maxHeight:'70vh',overflow:"scroll"}}>
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
                    {productList.map((product,index)=><tr key={index} >
                        <td className='text-center'>{index+1}</td>
                        <td><img src={product.thumbnail} id='p-image' width="120px" height="80px"/></td>
                        <td>{product.title.slice(0,30)}</td>
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