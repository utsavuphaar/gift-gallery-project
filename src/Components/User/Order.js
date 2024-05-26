import React, { useEffect, useReducer } from 'react'
import Header from './Header'
import Footer from './footer'
import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { Link, useNavigate } from 'react-router-dom';
function Order() {
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

    let statusColor = '';

    const status = "Shipped";
    // Assign color based on status
    switch (status) {
        case 'order Confirmed':
            statusColor = '#333333'; // Black
            break;
        case 'Shipped':
            statusColor = 'green';
            break;
        case 'Out for delivery':
            statusColor = 'orange';
            break;
        case 'Delivered':
            statusColor = 'teal';
            break;
        default:
            // Default color or handle other statuses
            statusColor = 'black';
    }

    useEffect(() => {
        axios.post(process.env.REACT_APP_ORDER_FOR_PARTICULAR_USER, { userId: userId })
            .then(response => {
                console.log(response.data.result)
                dispatch({ type: "set-order", payload: response.data.result });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <Header />
            <div className='container d-flex mt-4 mb-2 align-items-center'>
                <div style={{ width: "30px", height: "40px", backgroundColor: "#0D6EFD", borderRadius: "5px" }}></div>
                <h3 className='p-2 fs-4'>Your Order ({state.orderList.length})</h3>
            </div>
            {state.orderList.length != 0 ? (
                <table className='table container border mb-2' >
                    <thead className=' text-center thead-light' >
                        <tr className='bg-primary'>
                            <th>Order no.</th>
                            <th>Image</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Order Date</th>
                            <th>Order Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.orderList?.map((order, index) => <tr key={index} className='text-center'>
                                <td><div className='row ' style={{ height: "100px" }}>
                                    <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                        {index + 1}
                                    </div>
                                </div></td>

                                <td><div className='row ' style={{ height: "100px" }}>
                                    <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                        <img style={{ cursor: 'pointer' }} onClick={() => navigate("/myorders", { state: order })} src={order.orderItems[0].product.thumbnail} width="100px" height="100px" />
                                    </div>
                                </div></td>

                                <td><div className='row ' style={{ height: "100px" }}>
                                    <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                        {(order.orderItems[0].product.title).slice(0, 30)}
                                    </div>
                                </div></td>

                                {/* <td>{order.orderItems[0].product.title}</td> */}
                                <td><div className='row ' style={{ height: "100px" }}>
                                    <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                        {order.orderItems[0].product.price}
                                    </div>
                                </div></td>
                                <td><div className='row ' style={{ height: "100px" }}>
                                    <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                    <p className="font-weight-bold" style={{ color: statusColor }}>{order.status}</p>


                                        {/* <button className='btn btn-primary'>{order.status}</button> */}
                                    </div>
                                </div></td>
                                <td><div className='row ' style={{ height: "100px" }}>
                                    <div className='col-md-12 d-flex align-items-center justify-content-center'>
                                        {order.orderDate}
                                    </div>
                                </div></td>
                                <td><div className='row ' style={{ height: "100px" }}>
                                    <div className='col-md-12 d-flex align-items-center justify-content-center text-primary' style={{ cursor: "pointer" }}>
                                        {order.orderId}
                                    </div>
                                </div></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                // </div>
                // </div>
            ) : (
                <div className='container-fluid d-flex p-4 justify-content-center align-content-center border' id='blackCart'>
                    <div>
                        <img width={'450px'} height={'300px'} src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                        <h6 className='text-center'>Empyt Order List!</h6>
                        <p className='text-center m-2'>Add item to it now</p>
                        <center> <Link to="/"><button className='btn btn-primary' style={{ width: '200px' }}>Shop Now</button> </Link></center>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}

export default Order