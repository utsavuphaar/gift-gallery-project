import React, { useEffect, useReducer } from 'react'

import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { useNavigate } from 'react-router-dom';
function GetOrders() {
    const navigate = useNavigate();
    let userId = localStorage.getItem("userId");
    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-order") {
            return { ...state, orderList: action.payload };
        }
        else if (action.type === "delete-product") {
            if (window.confirm("Are you sure ?")) {
                state.productList.splice(action.payload, 1
                );
            }
            return { ...state };
        }
    }, { orderList: [] });

    useEffect(() => {
        axios.get(ApiUrl.viewAllOrders)
            .then(response => {
                console.log(response.data.result)
                dispatch({ type: "set-order", payload: response.data.result });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <div className='container-fluid w-75 p-2' style={{ backgroundColor: "#f7fafc" }}>
                {/* <div className='mb-4 ms-2 form-group row'>
                    <label className='fs-4'>Order :
                        <input className='col-md-3 ms-2 fs-6 p-2 rounded border' style={{borderRadius:"20px"}} type='search' placeholder='type order id..' />
                        <select className='col-md-3 fs-5 cursor-pointer border float-end rounded p-1'>
                            <option>All Orers</option>
                            <option>Confirmed</option>
                            <option>On the way</option>
                            <option>Shipped</option>
                            <option>Cancelled</option>
                        </select>
                    </label>
                </div> */}

                <div className='container p-2 mt-4 row ' style={{ overflow: "auto", height: '550px' }}>
                    <table className='table border  col-md-10 position-relative' style={{ maxHeight: '80vh', overflow: "scroll" }}>
                        <thead className='position-sticky' style={{top:'-10px'}} >
                            <tr className='bg-primary text-center text-white'>

                                <th>Sr.No.</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Price</th>
                
                                <th>Order Date</th>
                                <th>Order Id</th>
                            </tr>
                        </thead>
                        <tbody className='bg-light'>
                            {state.orderList?.map((order, index) => <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    <img src={data.product.thumbnail} onClick={()=>navigate("/orderDetail",{state:order})} style={{cursor:'pointer'}} width="100px" height="100px" />
                                </td>)}
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    {data.product.title}
                                </td>)}
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    {data.product.price}
                                </td>)}
                              
                                <td>{order.orderDate}</td>
                                <td className='text-secondary' style={{ cursor: "pointer" }}><button className='btn btn-outline-primary'>Get Order</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default GetOrders;