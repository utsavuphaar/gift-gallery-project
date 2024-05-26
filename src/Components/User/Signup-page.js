import '../Style.css'
import TextField from '@mui/material/TextField';
import { createContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
// import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import URL from '../ApiUrl'
import { useNavigate } from 'react-router-dom'
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify'
import GoogleSign from './GoogleSign';
import Header from './Header';
import Footer from './footer';

// export const emailContext = createContext();

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [contact, setcontact] = useState("")

    const navigate = useNavigate();

    // console.log('email,name', email + name);

    const validationname = () => {
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

    const validationphone = () => {
        var phonerror = document.getElementById("phoneerror");
        var status = true;
        if (isNaN(contact)) {
            status = false;
            phonerror.innerHTML = "Only number allow";
        } else if (contact.length != 10) {
            status = false;
            phonerror.innerHTML = "number must be 10 digit";
        } else {
            status = true;
            phonerror.innerHTML = "";
        }
        return status;
    }

    function validation() {
        var fnamestatus = validationname();
        var emailstatus = validationemail();
        var phonestatus = validationphone();
        var passwordstatus = validatepassword();
        if (fnamestatus && emailstatus && phonestatus && passwordstatus) {
            return true;
        }
        return false;
    }

    const createAccount = () => {

        if (validation()) {
            axios.post(URL.signup, { name, email, password, contact })
                .then(res => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Account Created Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    let user = JSON.stringify(res.data.user);
                    localStorage.setItem("user", user);
                    localStorage.setItem("userId", res.data.user.id)
                    navigate("/")
                })
                .catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                })
        }
        else {
            toast.error("Please fill all the fields")
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
            theme="colored"
        />
        <Header />
        <div className='container-fluid m-0 p-0' style={{ maxWidth: "100%", height: "100vh", backgroundColor: "#ececec" }}>


            <div className="container d-flex justify-content-center align-items-start min-vh-100" style={{ backgroundColor: "#ececec" }}>
                <div className="row border rounded-5 p-3 bg-white shadow box-area mt-4">
                    <div className="col-md-6 p-0 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: "#103cbe" }}>
                        <div className="featured-image">
                            <img src={image} className="rounded-4" style={{ width: "300px" }} />
                        </div>

                        <p className="text-white fs-2 mt-3 text" style={{ fontWeight: "600" }}>Be Verified</p>
                        <small className="text-white text-wrap text-center text" style={{ width: "17rem" }}>Join experienced Designers on this platform.</small>
                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text">
                                <h2>Welcome,</h2>
                                <p className='ms-2'>We are happy to have you come here.</p>
                            </div>
                            <div className="input-group">
                                <input type="text" onKeyUp={() => validationname()} onChange={event => setName(event.target.value)} className="form-control form-control-lg bg-light fs-6" placeholder="Username" />
                            </div>
                            <small className='text-danger' id='firstname'></small>
                            <div className="input-group mt-3">
                                <input type="text" onKeyUp={() => validationemail()} onChange={event => setemail(event.target.value)} className="form-control form-control-lg bg-light fs-6" placeholder="Email address" />
                            </div>
                            <small className='text-danger' id='emailerror'></small>
                            <div className="input-group mt-3">
                                <input type="number" onKeyUp={() => validationphone()} onChange={event => setcontact(event.target.value)} className="form-control form-control-lg bg-light fs-6" placeholder="Phone" />
                            </div>
                            <small className='text-danger' id='phoneerror'></small>
                            <div className="input-group mt-3">
                                <input type="password" onKeyUp={() => validatepassword()} onChange={event => setpassword(event.target.value)} className="form-control form-control-lg bg-light fs-6" placeholder="Password" />
                            </div>
                            <small className='text-danger' id='passworderror'></small>

                            <div className="input-group mt-5 mb-3">
                                <button className="btn btn-lg btn-primary w-100 fs-6" onClick={() => createAccount()}>Sign up</button>
                            </div>
                            <GoogleSign />
                            <div className="row">
                                <small>Already have an account? <a className='text-primary' onClick={() => navigate('/signin')} style={{ cursor: "pointer" }}>Log in</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </>
}