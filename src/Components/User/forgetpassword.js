import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
// import {nodemailer} from 'nodemailer'
import { IoIosGift } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ForgetPassword() {

    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const checkaccount = () =>{
        axios.post("http://localhost:3000/user/findbyemail",{email})
        .then(()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Email Verified",
                showConfirmButton: false,
                timer: 3000
            });
            navigate('/resetpassword',{state:{email}})
        })
        .catch(err=>{
            Swal.fire({
                icon: "error",
                title: "Unauthorized User",
                text: "Email is not exist ",
                footer: '<a href="/">create a new one?</a>'
            });
            console.log(err);
        })
    }

    return <>
        <div style={{ width: "99vw", height: "98vh" }} className="forget-page  container-fluid d-flex justify-content-center align-items-center">
            <div className="container  d-flex flex-column justify-content-center bg-light align-items-center" style={{opacity:"0.9", borderRadius:"50px",boxShadow:"0px 0px 1px 1px gainsboro" }}>
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
                <TextField className="w-75" onChange={event => setemail(event.target.value)} id="outlined-basic"  label="Email or phone" variant="outlined" />                    
                </div>
                <div className="w-75 mt-5 mb-5 d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={()=>checkaccount()} style={{width:"100px",height:"50px",borderRadius:"50px"}}>Next</button>
                </div>
            </div>
        </div>
    </>
}