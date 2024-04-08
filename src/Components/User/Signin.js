import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { fetchuser } from '../../DataSlice/ProductSlice';
import Swal from 'sweetalert2';
export default function Signin() {
    const navigate = useNavigate();
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const { error } = useSelector(store => store.Product);
    const dispatch = useDispatch();
    const signin=()=>{
        dispatch(fetchuser({email,password}))
        if(error){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Created Successfully",
                showConfirmButton: false,
                timer: 3000
              });
            navigate("/")
        }else{
            Swal.fire({
                icon: "error",
                title: "Unauthorized User",
                text: "Something went wrong ",
                footer: '<a href="/signup">create a new one?</a>'
              });
        }
    }
    return <>
        <div className='container-fluid d-flex justify-content-center align-items-center p-0 main'>
            <div className='row signin'>
                <div className='col-md-6  form'>
                    <h2 className='mt-5 '>Login</h2>
                    <TextField onChange={event =>setemail(event.target.value)}    className='mt-4  w-75' label="Email Address" type='email' variant="standard" />
                    <TextField onChange={event =>setpassword(event.target.value)} className='mt-4  w-75' label="Password" type='password' variant="standard" />
                    <p className='mt-3 forget'>Forget Password ?</p>
                    <button className="w-75 mt-4  button" onClick={()=>signin()}>Sign In</button>
                    <button className='w-75  mt-3 button-2'><FcGoogle className='fs-3 me-3' />Sign in with google</button>
                    <p className=' mt-3 mb-4' id='log-2'>Do not have an account,<span className=' text-primary ms-2 create' onClick={()=>navigate('/signup')}><u>create a new one.</u></span></p>
                </div>
                <div className='col-md-6  p-0'>
                    <img src={image} className='image' />
                </div>
            </div>
        </div>
    </>
}
