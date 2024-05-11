import { TextField } from "@mui/material";
import axios from "axios";
import { event } from "jquery";
import { useState } from "react";
// import {nodemailer} from 'nodemailer'
import { IoIosGift } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";
import OTPInput from "react-otp-input";
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'


export default function ForgetPassword() {

    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [otpvisible, setotpvisible] = useState(false);
    const [otp, setotp] = useState("");

    // const checkaccount = () =>{
    //     axios.post("http://localhost:3000/user/findbyemail",{email})
    //     .then(()=>{
    //         Swal.fire({
    //             position: "center",
    //             icon: "success",
    //             title: "Email Verified",
    //             showConfirmButton: false,
    //             timer: 3000
    //         });
    //         navigate('/resetpassword',{state:{email}})
    //     })
    //     .catch(err=>{
    //         Swal.fire({
    //             icon: "error",
    //             title: "Unauthorized User",
    //             text: "Email is not exist ",
    //             footer: '<a href="/">create a new one?</a>'
    //         });
    //         console.log(err);
    //     })
    // }

    const handleChange = otp => {
        setotp(otp);
    };

    const checkaccount = async () => {
        let user = await axios.post("http://localhost:3000/user/findbyemail", { email })
        if (user) {
            axios.post("http://localhost:8080/otp/request", { email })
                .then((res) => {
                    alert("OTP send successfully");
                    setotpvisible(true);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const verifyOTP = () => {
        axios.post("http://localhost:8080/otp/verify", { email, otp })
            .then((res) => {
                alert("OTP verification successful")
                navigate('/resetpassword', { state: { email } })
            })
            .catch(err => {
                alert("OTP is incorrect")
                console.log(err);
            })
    }

    return <>
        {/* <div style={{ width: "99vw", height: "98vh" }} className="forget-page  container-fluid d-flex justify-content-center align-items-center">
            <div className="container  d-flex flex-column justify-content-center bg-light align-items-center" style={{ opacity: "0.9", borderRadius: "50px", boxShadow: "0px 0px 1px 1px gainsboro" }}>
                <div className='w-100 mt-3 d-flex justify-content-center title'>
                    <div className='mt-3 mb-2 ms-3 icon  d-flex justify-content-center align-items-center'>
                        <IoIosGift className='fs-2 text-light' />
                    </div>
                    <span className='ms-2 fs-3 name'>
                        UtsavUphaar
                    </span>
                </div>
                <div className="w-100 mt-2 d-flex justify-content-center">
                    <span className="fs-5">Account Recovery</span>
                </div>
                <div className="w-100 mt-2 d-flex justify-content-center">
                    <span className="">Recover your <span className="text-primary fw-bold">UtsavUphaar</span> Account</span>
                </div>
                <div className="w-75 mt-4 d-flex justify-content-start">
                    <label className="fs-5">Email or phone</label>
                </div>
                <div className="w-100 mt-2 d-flex justify-content-center">
                    <TextField className="w-75" onChange={event => setemail(event.target.value)} id="outlined-basic" label="Email or phone" variant="outlined" />
                </div>
                <div className={otpvisible?'w-100 mt-2 d-block':'d-none'}>
                    <input type="text" placeholder="Enter otp" onChange={event => setotp(event.target.value)} className='form-control' />
                </div>

                <div className="w-75 mt-5 mb-5 d-flex justify-content-center">
                    <button className={otpvisible?'d-none':'btn btn-primary'} onClick={() => checkaccount()} style={{ width: "100px", height: "50px", borderRadius: "50px" }}>Next</button>
                    <button className={otpvisible?'d-block btn btn-primary':'d-none'} onClick={()=>verifyOTP()}>Verify Otp</button>
                </div>
            </div>
        </div> */}
        <Header />

        <div className='container-fluid m-0 p-0' style={{ maxWidth: "100%", height: "100vh", backgroundColor: "#ececec" }}>


            <div className="container d-flex justify-content-center align-items-start min-vh-100" style={{ backgroundColor: "#ececec" }}>
                <div className="row border rounded-5 p-3 bg-white shadow box-area mt-5">
                    <div className="col-md-6 p-0 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
                        <div className="featured-image">
                            <img src={image} className="rounded-4" style={{ width: "300px" }} />
                        </div>
                        <p className="text-white fs-2 mt-3 text" style={{ fontWeight: "600" }}>Be Verified</p>
                        <small className="text-white text-wrap text-center text" style={{ width: "17rem" }}>Join experienced Designers on this platform.</small>
                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Welcome,</h2>
                                <p className="ms-2">Recover Your <span className="text-primary fw-bold">UtsavUphaar</span> Account</p>
                            </div>
                            <div className="input-group">
                                <input type="text" onChange={event =>setemail(event.target.value)} className="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
                            </div>
                            <small className='text-danger' id='emailerror'></small>

                            <div className={otpvisible?"input-group d-flex justify-content-center mt-4":'d-none'}>
                                <OTPInput
                                    value={otp}
                                    onChange={setotp}
                                    numInputs={6}
                                    otpType="number"
                                    autoFocus
                                    className ="otp-container"
                                    inputStyle={{backgroundColor:"#9ba0a7",color:'white',outline:'none',marginRight:"10px",border:'none', borderRadius:"10px",width:"30px",height:'40px'}}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </div>
                            <div className="input-group mb-3 d-flex justify-content-center mt-5">
                                <button onClick={() => checkaccount()} className={otpvisible?"d-none": "btn btn-lg btn-primary w-50 fs-6"}>Send Otp</button>
                                <button onClick={()=>verifyOTP()} className={otpvisible?"btn btn-lg btn-primary w-50 fs-6":"d-none"}>Verify Otp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}