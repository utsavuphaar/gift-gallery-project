import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchuser } from '../../DataSlice/ProductSlice';
import URL from '../ApiUrl'
import axios from 'axios'
import Swal from 'sweetalert2';
import Home from './Home';
import { ToastContainer, toast } from 'react-toastify'
import GoogleSign from './GoogleSign';
export default function Signin() {
    let userDetail=[];
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
                    localStorage.setItem("user",user);
                    localStorage.setItem("userId",res.data.user.id)
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
            theme="colored"  
        />
        <div className='container-fluid d-flex justify-content-center align-items-center p-0 main'>
            <div className='row signin'>
                <div className='col-md-6  form'>
                    <h2 className='mt-5 text-primary fw-bold'>Login</h2>
                    <TextField onChange={event => setemail(event.target.value)} onKeyUp={() => validationemail()} className='mt-4  w-75 ' label="Email Address" type='email' variant="standard" />
                    <div className='container-fluid w-75'>
                        <div className='row '>
                            <div className='mt-1 p-0 col-md-12 d-flex '>
                                <small className='text-danger' id='emailerror'></small>
                            </div>
                        </div>
                    </div>

                    <TextField onChange={event => setpassword(event.target.value)} onKeyUp={() => validatepassword()} className='mt-3  w-75' label="Password" type='password' variant="standard" />
                    <div className='container-fluid w-75'>
                        <div className='row '>
                            <div className='mt-1 p-0 col-md-12 d-flex '>
                                <small className='text-danger' id='passworderror'></small>
                            </div>
                        </div>
                    </div>


                    <div className='container-fluid mt-3 d-flex justify-content-center align-items-center'>
                        <div className='row  w-100  text-primary' style={{ fontSize: "13px" }}>
                            {/* <div className=' col-md-7 d-flex justify-content-start align-items-center'>
                                <small className='ms-4 p-1'>Login with Phone</small>
                            </div> */}
                            <div className='col-md-5 d-flex justify-content-center align-items-center ' style={{cursor:"pointer"}}>
                                <small onClick={()=>navigate("/forget")}>Forget Password ?</small>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid mt-3 d-flex justify-content-center align-items-center p-0' style={{ fontSize: "12px" }}>
                        By contuining, I agree to the
                        <span className='fw-bold text-primary p-1' style={{ fontSize: "12px" }}>Terms of Use </span>
                         & <span className='fw-bold text-primary p-1' style={{ fontSize: "12px" }}>Privacy Policy</span>
                    </div>

                    {/* <span className='mt-3 forget'>Forget Password ?</span> */}
                    <button className="w-75 mt-4  button" onClick={() => signin()}>Sign In</button>
                    {/* <button className='w-75  mt-3 button-2'><FcGoogle className='fs-3 me-3' />Sign in with google</button> */}
                    <div className='w-75 d-flex justify-content-center align-items-center mt-3 mb-2'>____________or___________</div>
                    <GoogleSign />
                    {/* <FcGoogle className='fs-1 me-3 d-none google' /> */}
                    <p className=' mt-3 mb-4' id='log-2'>Do not have an account,<span className=' text-primary ms-2 create' onClick={() => navigate('/signup')}><u>create a new one.</u></span></p>
                </div>
                <div className='col-md-6  p-0'>
                    <img src={image} className='image' />
                </div>
            </div>
        </div>
    </>
}
