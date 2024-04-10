import React, { useState } from 'react'
import axios from "axios";
function Checkout() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [contact ,setContact] = useState("")
    const [address,setAddress] = useState("")
    const [city,setCity] = useState("")
    const [pin,setPin] = useState("")
    const status = "Order Confirmed";
    const userId = localStorage.getItem("userId");
    const [price,setPrice] = useState("");
    const [quantity,setQuantity] = useState("")
    const sendData = ()=>{
        axios.post("http://localhost:3000/order/placeOrder",{firstName,lastName,contact,address,city,pin,status,userId,price,quantity})
        // console.log(firstName+" "+lastName+" "+contact+" "+address+" "+city+" "+pin)
    }
    return (
        <>
        <section className='container fluid p-4'>
            <section className='container p-2 justify-content-center row align-content-around m-auto d-flex' id='checkout-page'>
                <div id='checkout-left' className='col-md-8 border'>
                    <div className='bg-primary text-white p-2 justify-content-around align-content-center d-flex rounded'>
                        <h6>Personal</h6>
                        <h6>Billing</h6>
                        <h6>Confirmation</h6>
                    </div>
                    <form>
                        <div className='row form-group p-2'>
                            <div className='col-md-6 mt-2'>
                                <label>First Name*</label><br/>
                                <input type='text' required onChange={(event)=>setFirstName(event.target.value)} className='form-control'/>
                            </div>
                            <div className='col-md-6 mt-2'>    
                            <label>Last Name*</label><br/>
                                <input type='text' required  onChange={(event)=>setLastName(event.target.value)} className='form-control'/>
                            </div>
                            <div className='col-md-12 mt-2'>
                            <label>Phone Number*</label><br/>
                                <input type='number'   onChange={(event)=>setContact(event.target.value)} className='form-control'/>
                            </div>
                            <div className='col-md-12 mt-2'>
                            <label>Street Address*</label><br/>
                                <input type='text' onChange={(event)=>setAddress(event.target.value)}   className='form-control'/>
                            </div>
                            <div className='col-md-12 mt-2'>
                            <label>Town/City*</label><br/>
                                <input type='text' onChange={(event)=>setCity(event.target.value)}  className='form-control'/>
                            </div>
                            <div className='col-md-12 mt-2'>
                            <label>Pincode*</label><br/>
                                <input type='number' onChange={(event)=>setPin(event.target.value)}  className='form-control'/>
                            </div>
                            <div className='col-md-6 mt-2'>
                                <button onClick={sendData} className='btn btn-primary mt-2'>Proceed to Next Step</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id='checkout-right' className='border col-md-4'>
                    <div className='text-white rounded container bg-primary p-2'>
                        <h6>Cart Details</h6>
                    </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Qantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                        </table>
                </div>
            </section>       
        </section>
        </>
    )
}

export default Checkout