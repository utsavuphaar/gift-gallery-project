import { useLocation, useNavigate } from "react-router-dom"
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { BsCurrencyRupee } from "react-icons/bs";
import { toast, ToastContainer } from 'react-toastify'
import Header from "./Header";
import Footer from "./footer";
function Checkout() {
    const navigate = useNavigate();
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
        if (validation()) {
            const firstNameValue = firstName.current.value;
            const lastNameValue = lastName.current.value;
            const contactValue = contact.current.value;
            const addressValue = address.current.value;
            const cityValue = city.current.value;
            const pinCodeValue = pinCode.current.value;
    
            try {
                // Fetching payment key
                const { data: { key } } = await axios.get("http://localhost:3000/payment/getkey");
    
                // Initiating payment checkout
                const { data: { order } } = await axios.post("http://localhost:3000/payment/checkout", {
                    amount
                });
    
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
                        name: `${firstNameValue} ${lastNameValue}`,
                        contact: contactValue,
                        email: "example@example.com" // Assuming you have user's email
                    },
                    notes: {
                        "address": addressValue
                    },
                    theme: {
                        "color": "blue"
                    },
                    // Handler function to be executed after payment is completed
                    handler: async function (response) {
                        try {
                            // Verify payment status
                            console.log(response);
                            const paymentVerificationResponse = await axios.post("http://localhost:3000/payment/paymentverification", {
                                razorpay_order_id: order.id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                amount:amount
                            });
    
                            if (paymentVerificationResponse.data.success) {
                                // Payment verified, now call placeOrder API
                                const myOrder = await axios.post("http://localhost:3000/order/placeOrder", {
                                    orderID: order.id,
                                    firstName: firstNameValue,
                                    lastName: lastNameValue,
                                    contact: contactValue,
                                    address: addressValue,
                                    city: cityValue,
                                    pinCode: pinCodeValue,
                                    status: "Order Confirmed",
                                    quantity: 1,
                                    userId,
                                    productId: state.id,
                                });
                                alert("Order placed successfully..")
                                navigate("/cart")
                                console.log("PlaceOrder API response:", myOrder.data);
                            } else {
                                // Payment verification failed
                                console.error("Payment verification failed:", paymentVerificationResponse.data.error);
                            }
                        } catch (error) {
                            console.error("Error during payment verification:", error);
                        }
                    }

                };
                const razor = new window.Razorpay(options);
                razor.open();
    
            } catch (error) {
                console.error("Error during payment checkout:", error);
            }
        } else {
            toast.error("Please fill all the fields");
        }
    };

    // -------------------Validation------------------------

    const validationphone = () => {
        let phone = contact.current.value;
        console.log(phone);
        var phonerror = document.getElementById("phoneerror");
        var status = true;
        if (isNaN(phone)) {
            status = false;
            phonerror.innerHTML = "Only number allow";
        } else if (phone.length != 10) {
            status = false;
            phonerror.innerHTML = "number must be 10 digit";
        } else {
            status = true;
            phonerror.innerHTML = "";
        }
        return status;
    }

    const validationfname = () => {
        let name = firstName.current.value;
        console.log(name);
        var status = true;
        var nameerror = document.getElementById("firstname");
        if (name.length == 0) {
            status = false;
            nameerror.innerHTML = "name is required";
        } else if (!isNaN(name)) {
            status = false;
            nameerror.innerHTML = "name must be character";
        } else {
            status = true;
            nameerror.innerHTML = "";
        }
        return status;
    }

    const validationlname = () => {
        let name = lastName.current.value;
        console.log(name);
        var status = true;
        var nameerror = document.getElementById("lastname");
        if (name.length == 0) {
            status = false;
            nameerror.innerHTML = "name is required";
        } else if (!isNaN(name)) {
            status = false;
            nameerror.innerHTML = "name must be character";
        } else {
            status = true;
            nameerror.innerHTML = "";
        }
        return status;
    }

    const validationaddress = () => {
        let addressinput = address.current.value;
        var streeterror = document.getElementById("streeterror");
        var status = true;
        if (addressinput.length == 0) {
            streeterror.innerHTML = 'Address is required'
            status = false;
        } else {
            streeterror.innerHTML = ""
            status = true;
        }
        return status;
    }

    const validationcity = () => {
        let cityinput = city.current.value;
        var status = true;
        var cityerror = document.getElementById("cityerror");
        if (cityinput.length == 0) {
            cityerror.innerHTML = "City is required"
            status = false;
        } else {
            cityerror.innerHTML = ""
            status = true;
        }
        return status;
    }

    const validationpincode = () => {
        let pincode = pinCode.current.value;
        status = true;
        var pinerror = document.getElementById("pinerror")
        if (pincode.length == 0) {
            pinerror.innerHTML = "pincode is required"
            status = false;
        } else if (isNaN(pincode)) {
            pinerror.innerHTML = "only number allow"
            status = false;
        }
        else if (pincode.length != 6) {
            pinerror.innerHTML = "pincode must be 6 digit"
            status = false;
        } else {
            pinerror.innerHTML = ""
            status = true;
        }
        return status;

    }

    const validation = () => {
        var status = true;
        const firstname = validationfname();
        const lastname = validationlname();
        const phone = validationphone();
        const street = validationaddress();
        const city = validationcity();
        const pincode = validationpincode();
        if (firstname && lastname && phone && street && city && pincode) {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    }

    return (

        <>
            <ToastContainer />
            <Header />
            <section className='container-fluid  p-4'>
                <section className='container p-2 justify-content-evenly row align-content-around m-auto d-flex ' id='checkout-page'>
                    <div id='checkout-left' className='col-md-7 rounded-top mt-2 me-3 p-0 border'>
                        <div className='bg-primary text-white p-2 justify-content-around align-items-center d-flex rounded-top'>
                            <h6>Personal</h6>
                            <h6>Billing</h6>
                            <h6>Confirmation</h6>
                        </div>
                        <div className="container mb-2">
                            <div className='row form-group p-2' >
                                <div className='col-md-6 mt-3'>
                                    <label>First Name<span className="text-danger">*</span></label><br />
                                    <input type='text' required ref={firstName} onKeyUp={validationfname} className='form-control' />
                                    <small className='text-danger' id='firstname'></small>
                                </div>
                                <div className='col-md-6 mt-3'>
                                    <label>Last Name<span className="text-danger">*</span></label><br />
                                    <input type='text' required ref={lastName} onKeyUp={validationlname} className='form-control' />
                                    <small className='text-danger' id='lastname'></small>
                                </div>
                                <div className='col-md-12 mt-3'>
                                    <label>Phone Number<span className="text-danger">*</span></label><br />
                                    <input type='number' ref={contact} onKeyUp={validationphone} className='form-control' />
                                    <small className='text-danger' id='phoneerror'></small>
                                </div>
                                <div className='col-md-12 mt-3'>
                                    <label>Street Address<span className="text-danger">*</span></label><br />
                                    <input type='text' ref={address} onKeyUp={validationaddress} className='form-control' />
                                    <small className='text-danger' id='streeterror'></small>
                                </div>
                                <div className='col-md-12 mt-3'>
                                    <label>Town/City<span className="text-danger">*</span></label><br />
                                    <input type='text' ref={city} onKeyUp={validationcity} className='form-control' />
                                    <small className='text-danger' id='cityerror'></small>
                                </div>
                                <div className='col-md-12 mt-3'>
                                    <label>Pincode<span className="text-danger">*</span></label><br />
                                    <input type='number' ref={pinCode} onKeyUp={validationpincode} className='form-control' />
                                    <small className='text-danger' id='pinerror'></small>
                                </div>
                                <div className='col-md-6 mt-3'>
                                    <button onClick={()=>checkoutHandler(totalAmt-discountPrice)} type="submit" className='btn btn-primary mt-2'>Proceed to Pay</button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div id='checkout-right' className='border p-0 mt-2 col-md-4 rounded-top'>
                        <div className='text-white rounded-top container d-flex justify-content-center align-items-center bg-primary p-2'>
                            <h6>Cart Details</h6>
                        </div>
                        <div className="container mt-2">

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
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default Checkout