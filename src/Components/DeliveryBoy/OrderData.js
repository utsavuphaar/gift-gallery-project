import React, { useState } from 'react'
import { BiRupee } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom'
import gift from './gift.png'
import { IoIosGift } from 'react-icons/io';
import axios from 'axios';
import { ToastContainer, Zoom, toast } from 'react-toastify';
function OrderData() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const deliveryBoyId = localStorage.getItem("deliveryBoy");
    const contactNum = state.orderItem.Order.contact;
    console.log(state)
    const email = state.orderItem.Order.user.email;
    const orderId = state.orderItem.Order.id;
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
  
    //   try {
    //     const response = await axios.post('http://localhost:3000/request/send-otp', { phoneNumber:contactNum });
    //     if (response.data.success) {
    //       setMessage(`OTP sent successfully. Your OTP is ${response.data.otp}`);
    //     //   console.l
    //       navigate("/otpVerification",{state:contactNum})
    //     } else {
    //       setMessage('Failed to send OTP. Please try again.');
    //     }
    //   } catch (error) {
    //     console.log(error)
    //     setMessage('An error occurred while sending OTP. Please try again.');
    //   }
    // };

    const handleSubmit=()=>{
        axios.post("http://localhost:3000/otp/request", { email })
                .then((res) => {
                    toast.success("OTP send successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                    navigate("/otpVerification",{state:{email,orderId}})
                })
                .catch(err => {
                    toast.error("Something went wrong", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Zoom,
                    });
                    console.log(err);
                })
    }





    // console.log(state);
    return (
        <>
        <ToastContainer/>
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
                            <button className='btn btn-primary m-2' onClick={handleSubmit} >Delivered</button>
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