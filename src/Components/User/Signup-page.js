import '../Style.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
// import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import URL from '../ApiUrl'
import { useNavigate } from 'react-router-dom'
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import Swal from 'sweetalert2';
import {ToastContainer,toast} from 'react-toastify'

export default function Signup() {
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [contact, setcontact] = useState("")

    const navigate = useNavigate();

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
            axios.post(URL.signup, { name, email, password,contact })
                .then(res => {
                    navigate("/signin")
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Account Created Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    });
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
        else{
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
        <div className="container-fluid d-flex justify-content-center align-items-center p-0  main ">
            <div className='row signup'>
                <div className='col-md-6  p-0'>
                    <img className='left' src={image} />
                </div>
                <form className='col-md-6 form right p-0 '>
                    <h2 className='mt-4 '>Create an account</h2>
                    <span className=''>Enter your details</span>
                    <TextField onChange={event => setName(event.target.value)} onKeyUp={() => validationname()} className='mt-3  w-75' label="Name" type='name' variant="standard" />
                    <div className='container-fluid w-75'>
                        <div className='row '>
                            <div className='mt-1 p-0 col-md-12 d-flex '>
                                <small className='text-danger' id='firstname'></small>
                            </div>
                        </div>
                    </div>
                    <TextField onChange={event => setemail(event.target.value)} onKeyUp={() => validationemail()} className='mt-2  w-75' label="Email Address" type='email' variant="standard" />
                    <div className='container-fluid w-75'>
                        <div className='row '>
                            <div className='mt-1 p-0 col-md-12 d-flex '>
                                <small className='text-danger' id='emailerror'></small>
                            </div>
                        </div>
                    </div>

                    <TextField onChange={event => setpassword(event.target.value)} onKeyUp={() => validatepassword()} className='mt-2  w-75' id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
                    <div className='container-fluid w-75'>
                        <div className='row '>
                            <div className='mt-1 p-0 col-md-12 d-flex '>
                                <small className='text-danger' id='passworderror'></small>
                            </div>
                        </div>
                    </div>

                    <TextField onChange={event => setcontact(event.target.value)} onKeyUp={() => validationphone()} className='mt-2  w-75' id="standard-password-input" label="Phone" type="number" autoComplete="current-password" variant="standard" />
                    <div className='container-fluid w-75'>
                        <div className='row '>
                            <div className='mt-1 p-0 col-md-12 d-flex '>
                                <small className='text-danger' id='phoneerror'></small>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => createAccount()} className="w-75 mt-4  button" type='button'>Create Account</button>
                    <button className='w-75  mt-3 button-2'><FcGoogle className='fs-3 me-3' />Sign up with google</button>
                    <FcGoogle className='fs-3 me-3 d-none google' />
                    <p className=' mt-3 mb-4' id='log'>Already have account?<span className=' text-primary ms-2 log-in' onClick={() => navigate("/signin")}><u>Log in</u></span></p>
                </form>
            </div>
        </div>
    </>
}