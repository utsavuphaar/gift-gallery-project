import React, { useEffect, useReducer } from 'react'
import './adminstyle.css'
import axios from 'axios';
import ApiUrl from '../ApiUrl';
function OrderList() {
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
        axios.get(process.env.REACT_APP_VIEW_ALL_ORDERS,)
            .then(response => {
                console.log(response.data.result)
                dispatch({ type: "set-order", payload: response.data.result });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <div className="responsive-table-container">
            <div className="w-100 p-4 d-flex justify-content-between align-items-center">
            <h1 className="mt-3 text-primary">Order List</h1>
            <select className='col-md-3 cursor-pointer border float-end rounded p-1 border-primary' style={{outline:"none"}}>
                            <option>All Orers</option>
                            <option>Confirmed</option>
                            <option>On the way</option>
                            <option>Shipped</option>
                            <option>Cancelled</option>
                        </select>
            </div>
            <div className="custom-scroll">
                <table className="table">
                    <thead>
                        <tr>
                        <th>Sr.No.</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Order Date</th>
                                <th>Order Id</th>
                        </tr>
                    </thead>
                    <tbody>
                    {state.orderList?.map((order, index) => <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    <img src={data.product.thumbnail} width="100px" height="100px" />
                                </td>)}
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    {data.product.title}
                                </td>)}
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    {data.product.price}
                                </td>)}
                                <td style={{ textAlign: 'center' }}>{order.status}</td>
                                <td>{order.orderDate}</td>
                                <td className='text-secondary' style={{ cursor: "pointer" }}>{order.orderId}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default OrderList