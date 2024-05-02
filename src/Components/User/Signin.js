import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import URL from '../ApiUrl'
import axios from 'axios'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify'
import GoogleSign from './GoogleSign';

import Header from './Header';


// -------------------New sign in page----------------

import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import Footer from './footer';



export default function Signin() {
    let userDetail = [];
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [userId, setuserId] = useState("")
    const { error } = useSelector(store => store.Product);
    const dispatch = useDispatch();

    const validationemail = () => {
        var status = true;
        var emailError = document.getElementById("emailerror");
        if (email.length == 0) {
            status = false;
            emailError.innerHTML = "Email id is required";
        }
        else {
            let atTheRateIndex = email.indexOf("@");
            if (atTheRateIndex == -1) {
                status = false;
                emailError.innerHTML = "Invalid email (@ not present)";
                return status;
            }
            let lastIndexOfAtTheRate = email.lastIndexOf("@");
            if (atTheRateIndex != lastIndexOfAtTheRate) {
                status = false;
                emailError.innerHTML = "Invalid email ( 2 @ present)";
                return status;
            }

            let stringAfterAtTheRate = email.substring(atTheRateIndex);
            let dotIndex = stringAfterAtTheRate.lastIndexOf(".");
            if (dotIndex == -1) {
                status = false;
                emailError.innerHTML = "Invalid email ( . not present)";
                return status;
            }

            let domainString = stringAfterAtTheRate.substring(dotIndex);
            if (!(domainString == ".in" || domainString == ".com")) {
                status = false;
                emailError.innerHTML = "Invalid email ( .in or .com not present)";
                return status;
            }

            if (email.charAt(0) == '@') {
                status = false;
                emailError.innerHTML = "Invalid email ( starting with @)";
                return status;
            }

            emailError.innerHTML = "";
        }
        return status;
    }
    const validatepassword = () => {
        var status = true;
        var passworderror = document.getElementById("passworderror");
        if (password.length == 0) {
            status = false;
            passworderror.innerHTML = "Password is required"
        } else if (password.length <= 5) {
            passworderror.innerHTML = "Password must be more than 5 character"
        } else {
            status = true;
            passworderror.innerHTML = "";
        }
        return status;
    }

    function validation() {
        var emailstatus = validationemail();
        var passwordstatus = validatepassword();
        if (emailstatus && passwordstatus) {
            return true;
        }
        return false;
    }

    const signin = () => {
        if (validation()) {
            axios.post(URL.signin, { email, password })
                .then(res => {
                    console.log(res.data.user);
                    setuserId(userId);
                    let user = JSON.stringify(res.data.user);
                    localStorage.setItem("user", user);
                    localStorage.setItem("userId", res.data.user.id)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    navigate('/')
                })
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: "Unauthorized User",
                        text: "Something went wrong ",
                        footer: '<a href="/">create a new one?</a>'
                    });
                    console.log(err);
                })
        }
        else {
            toast.error("Please fill all fields")
        }

    }
    return <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

        <Header/>

        <div className='container-fluid'  style={{width:"100vw",height:"100vh",backgroundColor:"#ececec"}}>

        
        <div className="container d-flex justify-content-center align-items-start min-vh-100" style={{backgroundColor:"#ececec"}}>
            <div className="row border rounded-5 p-3 bg-white shadow box-area mt-5">
                <div className="col-md-6 p-0 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
                    <div className="featured-image">
                        <img src={image} className="rounded-4" style={{ width: "300px" }} />
                    </div>
                    <p className="text-white fs-2 mt-3 text" style={{ fontWeight: "600"}}>Be Verified</p>
                    <small className="text-white text-wrap text-center text" style={{ width: "17rem"}}>Join experienced Designers on this platform.</small>
                </div>
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        <div className="header-text mb-4">
                            <h2>Hello,Again</h2>
                            <p>We are happy to have you back.</p>
                        </div>
                        <div className="input-group">
                            <input type="text" onKeyUp={()=>validationemail()} onChange={event => setemail(event.target.value)}  className="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
                        </div>
                            <small className='text-danger' id='emailerror'></small>
                        <div className="input-group mt-3">
                            <input type="password" onKeyUp={()=>validatepassword()} onChange={event => setpassword(event.target.value)} className="form-control form-control-lg bg-light fs-6" placeholder="Password" />
                        </div>
                            <small className='text-danger'  id='passworderror'></small>
                        <div className="input-group mb-5 d-flex justify-content-between">
                            <div className="form-check" style={{cursor:"pointer"}}>
                                <input type="checkbox" className="form-check-input" id="formCheck" />
                                <label for="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                            </div>
                            <div className="forgot">
                                <small className='text-primary ' style={{cursor:"pointer"}} onClick={()=>navigate('/forget')}>Forgot Password?</small>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-lg btn-primary w-100 fs-6" onClick={()=>signin()}>Login</button>
                        </div>
                        <GoogleSign/>
                        <div className="row">
                            <small>Don't have account? <a className='text-primary' onClick={()=>navigate('/signup')} style={{cursor:"pointer"}}>Sign Up</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <Footer/>
     
    </>
}
