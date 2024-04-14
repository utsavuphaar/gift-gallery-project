import { useLocation } from "react-router-dom"
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { BsCurrencyRupee } from "react-icons/bs";
import Header from "./Header";
import Footer from "./footer";
function Checkout() {

    let firstName = useRef(null);
    let lastName = useRef(null);
    let contact = useRef(null);
    let address = useRef(null);
    let city = useRef(null);
    let pinCode = useRef(null);

    let status = "Order Confirmed";
    const userId = localStorage.getItem("userId");
    const { state } = useLocation();

    let discountPrice = 0;
    let totalAmt = 0;
    const getTotalAmt = (state) => {
        for (let item of state) {
            totalAmt += item["products.price"] * item["products.cartItem.quantity"];
            discountPrice = discountPrice + ((((parseInt(item["products.discountPercentage"] * item["products.price"]) / 100)) * item["products.cartItem.quantity"]).toFixed(2) * 1);
        }
        // alert(discountPrice)
        return totalAmt;
    }
    const sendData = () => {
        // axios.post("http://localhost:3000/order/placeOrder",{firstName,lastName,contact,address,city,pin,status,userId,price,quantity})
        alert(firstName + " " + lastName + " " + contact + " " + address + " " + city + " " + pinCode + " " + userId + " " + status)
    }




    const userArr = localStorage.getItem("user");
    const user = JSON.parse(userArr);

    //Payment API called
    const checkoutHandler = async (amount) => {
        firstName=firstName.current.value;
        lastName=lastName.current.value;
        contact=contact.current.value;
        address=address.current.value;
        city=city.current.value;
        pinCode=pinCode.current.value;
        window.alert(firstName+" "+lastName+" "+contact+" "+address+" "+city+" "+pinCode+" "+status)
        console.log(window)
        try {
            // Fetching payment key
            const { data: { key } } = await axios.get("http://localhost:3000/payment/getkey");

            // Initiating payment checkout
            const { data: { order } } = await axios.post("http://localhost:3000/payment/checkout", {
                amount
            });
            // console.log("Order Data ..")
            // console.log(order.id)
            const myOrder = await axios.post("http://localhost:3000/order/placeOrder",{id:order.id,firstName,lastName,contact,address,city,pinCode,status,quantity:1,userId})//price,quantity
            // Configuring Razorpay options
            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "Gift Gallery App",
                description: "Tutorial of RazorPay",
                image: "https://www.pngarts.com/files/1/Gift-PNG-Transparent-Image.png",
                order_id: order.id,
                callback_url: "http://localhost:3000/payment/paymentverification",
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: user.contact
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "blue"
                }
            };

            // Creating and opening Razorpay instance
            const razor = new window.Razorpay(options);
            razor.open();
        } catch (error) {
            console.error("Error during payment checkout:", error);
            // Handle errors gracefully (e.g., display error message to the user)
        }
    }

    return (

        <>
        <Header/>
            <section className='container-fluid  p-4'>
                <section className='container p-2 justify-content-center row align-content-around m-auto d-flex' id='checkout-page'>
                    <div id='checkout-left' className='col-md-7 me-3 border'>
                        <div className='bg-primary text-white p-2 justify-content-around align-content-center d-flex rounded'>
                            <h6>Personal</h6>
                            <h6>Billing</h6>
                            <h6>Confirmation</h6>
                        </div>

                            <div className='row form-group p-2'>
                                <div className='col-md-6 mt-2'>
                                    <label>First Name*</label><br />
                                    <input type='text' required  ref={firstName} className='form-control' />
                                </div>
                                <div className='col-md-6 mt-2'>
                                    <label>Last Name*</label><br />
                                    <input type='text' required ref={lastName} className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                    <label>Phone Number*</label><br />
                                    <input type='number' ref={contact} className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                    <label>Street Address*</label><br />
                                    <input type='text' ref={address} className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                    <label>Town/City*</label><br />
                                    <input type='text' ref={city} className='form-control' />
                                </div>
                                <div className='col-md-12 mt-2'>
                                    <label>Pincode*</label><br />
                                    <input type='number' ref={pinCode} className='form-control' />
                                </div>
                                <div className='col-md-6 mt-2'>
                                    <button onClick={() => checkoutHandler(totalAmt - discountPrice)} className='btn btn-primary mt-2'>Proceed to Pay</button>
                                </div>
                            </div>

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
                            <tbody>
                                {state?.map((product, index) => <tr key={index}>
                                    <td>{product["products.title"]}</td>
                                    <td className="text-center">{product["products.cartItem.quantity"]}</td>
                                    <td className="text-center">{product["products.cartItem.quantity"] * (product["products.price"])}</td>
                                </tr>)}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Subtotal</td>
                                    <td></td>
                                    <td className="text-center">{getTotalAmt(state)}</td>
                                </tr>
                                <tr>
                                    <th>Discount</th>
                                    <td className="float-end"><BsCurrencyRupee /></td>
                                    <th className="text-success">-{discountPrice.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td></td>
                                    <th>{(totalAmt - discountPrice).toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
            </section>
        <Footer/>
        </>
    )
}

export default Checkout