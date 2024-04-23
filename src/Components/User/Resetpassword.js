import { TextField } from "@mui/material";
import { IoIosGift } from "react-icons/io";
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ResetPassword() {

    const location = useLocation();
    const {email} = location.state ;
    // console.log(email);

    const [newpassword,setnewpassword] = useState("");
    const [confirmpassword,setconfirmpassword] = useState("");
    const navigate = useNavigate();

    const resetpassword = () =>{
        if(newpassword===confirmpassword){
            axios.post("http://localhost:3000/user/updatePassword",{email,newpassword})
            .then(()=>{
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Password Reset Successfully",
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate("/signin");
            })
            .catch(err=>{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong",
                    showConfirmButton: false,
                    timer: 3000
                });
                console.log(err);
            })
        }else{
            
        }
    }

    return <>
        <div style={{ width: "99vw", height: "105vh" }} className="forget-page  container-fluid d-flex justify-content-center align-items-center">
            <div className="row bg-white" style={{ opacity: "0.9", width: "70vw", borderRadius: "50px", boxShadow: "0px 0px 1px 1px gainsboro" }}>
                <div style={{borderRadius:"50px"}} className=" col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className='w-100 mt-3 d-flex justify-content-center title'>
                        <div className='mt-3 mb-2 ms-3 icon  d-flex justify-content-center align-items-center'>
                            <IoIosGift className='fs-2 text-light' />
                        </div>
                        <span className='ms-2 fs-3 name'>
                            UtsavUphaar
                        </span>
                    </div>
                    <div className="w-100 mt-2 d-flex justify-content-center">
                        <span className="fs-5">Reset Your Password</span>
                    </div>
                    <div className="w-100 mt-2 d-flex justify-content-center">
                        <span className="">Recover your <span className="text-primary fw-bold">UtsavUphaar</span> Account</span>
                    </div>
                    <div className="w-75  mt-4 d-flex justify-content-start">
                        <label className="fs-5">New Password</label>
                    </div>
                    <div className="w-100 mt-2 d-flex justify-content-center">
                        <TextField onChange={(event)=>setnewpassword(event.target.value)} className="w-75" id="outlined-basic" label="New password" variant="outlined" />
                    </div>
                    <div className="w-75  mt-4 d-flex justify-content-start">
                        <label className="fs-5">Confirm Password</label>
                    </div>
                    <div className="w-100 mt-2 d-flex justify-content-center">
                        <TextField onChange={(event)=>setconfirmpassword(event.target.value)} className="w-75" id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                    </div>
                    <div className="w-75 mt-5 mb-5 d-flex justify-content-center">
                        <button className="btn btn-primary p-3" onClick={()=>resetpassword()} style={{  borderRadius: "50px" }}>Reset Password</button>
                    </div>
                </div>
                <div className="col-md-6 p-0 m-0"style={{borderRadius:"50px"}}>
                    <img src={image} style={{width:"100%",height:"100%",borderRadius:"50px"}}/>
                </div>

            </div>
        </div>
    </>
}