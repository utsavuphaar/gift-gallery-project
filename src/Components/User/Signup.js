import '../Style.css'
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
    return <>
        <div className="container-fluid d-flex justify-content-center align-items-center border main">
            <div className='row border signup'>
                <div className='col-md-6 left border'>
                </div>
                <div className='col-md-6 right border'>
                    <h2 className='mt-5 ms-5'>Create an account</h2>
                    <span className='ms-5'>Enter your details</span>
                    <TextField className='mt-3 ms-5 w-75' label="Name" type='name' variant="standard" />
                    <TextField className='mt-3 ms-5 w-75' label="Email Address" type='email' variant="standard" />
                    <TextField className='mt-3 ms-5 w-75' id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"/>
                    <button className="w-75 mt-5 ms-5 button">Create Account</button>
                    <button className='btn btn-outline-dark w-75 ms-5 mt-3 '><FcGoogle className='fs-2 me-3'/>Sign up with google</button>
                    <p className='ms-5 mt-3' id='log'>Already have account?<span className='ms-3 text-primary'><u>Log in</u></span></p>
                </div>
            </div>
        </div>
    </>
}