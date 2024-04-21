import { TextField } from "@mui/material";
import { IoIosGift } from "react-icons/io";

export default function ForgetPassword() {
    return <>
        <div style={{ width: "100vw", height: "95vh" }} className=" container-fluid d-flex justify-content-center align-items-center">
            <div className="container  d-flex flex-column justify-content-center align-items-center" style={{ borderRadius:"50px",boxShadow:"0px 0px 2px 2px gainsboro" }}>
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
                <TextField className="w-75" id="outlined-basic" label="Email or phone" variant="outlined" />                    
                </div>
                <div className="w-75 mt-5 mb-5 d-flex justify-content-center">
                    <button className="btn btn-primary" style={{width:"100px",borderRadius:"50px"}}>Next</button>
                </div>
            </div>
        </div>
    </>
}