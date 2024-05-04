import React from 'react'
import { BiRupee } from 'react-icons/bi';
import { useLocation } from 'react-router-dom'
import gift from './Images/gift.png'
import "./myOrder.css"
import { IoIosGift } from 'react-icons/io';
function MyOrders() {
    const { state } = useLocation();
    return (
        <>
            <div className='container-fluid d-flex flex-column' style={{ backgroundColor: "#f1f3f6", height: '96vh' }}>
                <div className='container border bg-white w-100'>
                    <div className='row'>
                        <div className='m-2 col-md-3'>
                            <h5>Delivery Address</h5>
                            <span>{state.firstName}</span>
                            <span> {state.lastName}</span>
                            <p className='m-0 p-0'>{state.address}, <span>{state.city}</span></p>
                            <p>{state.pinCode}</p>
                            <p><span className='fw-bold'>Phone Number: </span> <span>{state.contact}</span></p>
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
                        {state.orderItems.map((data, ind) =>
                            <img key={ind} className='mt-3' src={data.product.thumbnail} width="150px" height="150px" />
                        )}
                    </div>
                    {state.orderItems.map((data, ind) =>
                        <div className='col-md-4'>
                            <p className='mt-3 p-0' key={ind}><span className='fw-bold'>Product: </span> {data.product.title} </p>
                            <p className='mt-3' key={ind}><span className='fw-bold'>Brand: </span> {data.product.brand} </p>
                            <p className='mt-3' key={ind}><span className='fw-bold'>Quantity: </span> {data.quantity} </p>
                            <p className='fw-bold mt-2' key={ind}><span className='fw-bold'>Price: </span> <BiRupee className='fs-4 mb-1' /> {data.product.price} </p>
                        </div>
                    )}
                    <div className='col-md-6'>
                        <div class="card m-1 p-0">
                            <div class="d-flex flex-column justify-content-around align-content-around ms-auto" style={{ width: '97%' }}>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-12">
                                        <ul id="progressbar" class="text-center">
                                            <li class="active step0"></li>
                                            <li class="active step0"></li>
                                            <li class="active step0"></li>
                                            <li class="step0"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <div class="row d-flex icon-content ms-3">
                                        <img class="icon" src="https://i.imgur.com/9nnc9Et.png" />
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br />Confirmed</p>
                                        </div>
                                    </div>
                                    <div class="row d-flex icon-content">
                                        <img class="icon" src="https://i.imgur.com/u1AzR7w.png" />
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br />Shipped</p>
                                        </div>
                                    </div>
                                    <div class="row d-flex icon-content">
                                        <img class="icon" src="https://i.imgur.com/TkPm63y.png" />
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br />En Route</p>
                                        </div>
                                    </div>
                                    <div class="row d-flex icon-content">
                                        <img class="icon" src="https://i.imgur.com/HdsziHP.png" />
                                        <div class="d-flex flex-column">
                                            <p class="font-weight-bold">Order<br />Arrived</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyOrders;