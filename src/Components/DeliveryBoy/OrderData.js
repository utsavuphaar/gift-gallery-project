import React from 'react'
import { BiRupee } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom'
import gift from './gift.png'
import { IoIosGift } from 'react-icons/io';
function OrderData() {
    const { state } = useLocation();
    const navigate = useNavigate();
    // console.log(state);
    const contactNum = state.orderItem.Order.contact;
    return (
        <>
            <div className='container-fluid d-flex flex-column' style={{ backgroundColor: "#f1f3f6", height: '90vh' }}>
                <div className='container border bg-white w-100'>
                    <div className='row'>
                        <div className='m-2 col-md-3'>
                            <h5>Delivery Address</h5>
                            <span>{state.orderItem.Order.firstName}</span>
                            <span> {state.orderItem.Order.lastName}</span>
                            <p className='m-0 p-0'>{state.orderItem.Order.address}, <span>{state.orderItem.Order.city}</span></p>
                            <p>{state.orderItem.Order.pinCode}</p>
                            <p><span className='fw-bold'>Phone Number: </span> <span>{state.orderItem.Order.contact}</span></p>
                        </div>
                        <div className='col-md-3'>
                            <img src={gift} width="300px" height="200px" />
                        </div>
                        <div className='col-md-4 title'>
                            <div className='mt-3 mb-2 icon bg-primary  d-flex justify-content-center align-items-center'>
                                <IoIosGift className='fs-1 text-light' />
                            </div>
                            <span className='ms-2 fs-2 text-primary name'>
                                UtsavUphaar
                            </span>
                        </div>
                    </div>
                </div>
                <h4 className='container mb-0 mt-0 p-0'> Product Details</h4>
                <div className='container border row mt-2 bg-white' style={{ height: 'auto' }}>
                    <div className='col-md-2'>
                            <img  className='mt-3' src={state.orderItem.product.thumbnail} width="150px" height="150px" />
                            <button className='btn btn-primary m-2' onClick={()=>navigate("/otpVerification",{state:contactNum})}>Delivered</button>
                    </div>
                        <div className='col-md-4'>
                            <p className='mt-3 p-0' ><span className='fw-bold'>Product: </span> {state.orderItem.product.title} </p>
                            <p className='mt-3' ><span className='fw-bold'>Brand: </span> {state.orderItem.product.brand} </p>
                            <p className='mt-3'><span className='fw-bold'>Quantity: </span> {state.orderItem.quantity} </p>
                            <p className='fw-bold mt-2'><span className='fw-bold'>Price: </span> <BiRupee className='fs-4 mb-1' /> {state.orderItem.product.price} </p>
                        </div>
                        <div className='col-md-6'>
                        <p className='m-2 mb-0'><span className='fw-bold'>Description</span> {state.orderItem.product.description}</p>
                        <p className='m-2 text-success'><span className='fw-bold text-dark'>Discount: </span> {state.orderItem.product.discountPercentage}% Off</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default OrderData