import React, { useEffect, useReducer } from 'react'
import Header from './Header'
import Footer from './footer'
import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { Link } from 'react-router-dom';
function Order() {
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
        axios.post(ApiUrl.orderForParticularUser, { userId: userId })
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
            <div className='container'>
                <h3 className='p-4 fs-4'>Your Order ({state.orderList.length})</h3>
            </div>
            {state.orderList.length != 0 ? (
                <div className='container-fluid p-0' style={{ backgroundColor: "#f7fafc" }}>
                    <div className='border m-0 p-0'>
                        <table className='table border'>
                            <thead>
                                <tr className='bg-primary text-center text-white'>
                                    <th>Order no.</th>
                                    <th>Item</th>
                                    {/* <th>Name</th> */}
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Order Date</th>
                                    <th>Order Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.orderList?.map((order, index) => <tr key={index} className='text-center'>
                                        <td ><div className='container d-flex justify-content-center align-items-center'>{index + 1}</div></td>
                                        {/* <td className='d-grid place-items-center'>
                                        <img src={order.orderItems[0].product.thumbnail} width="100px" height="100px" />
                                    </td> */}

                                        <td>
                                            <div className='row'>
                                            <div className='col-md-6 d-flex align-items-center justify-content-center'>
                                                <img src={order.orderItems[0].product.thumbnail} width="100px" height="100px" />
                                            </div>
                                            <div className='col-md-6 d-flex justify-content-start align-items-center'>
                                                <span>{order.orderItems[0].product.title}</span>
                                            </div>

                                            </div>
                                        </td>

                                        {/* <td>{order.orderItems[0].product.title}</td> */}
                                        <td>{order.orderItems[0].product.price}</td>
                                        <td style={{ textAlign: 'center' }}>{order.status}</td>
                                        <td>{order.orderDate}</td>
                                        <td className='text-primary' style={{ cursor: "pointer" }}>{order.orderId}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
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