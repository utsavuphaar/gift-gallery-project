import '../Style.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import {useDispatch,useSelector} from 'react-redux'
import { insertdata } from '../../DataSlice/ProductSlice';
import {useNavigate} from 'react-router-dom'
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import Swal from 'sweetalert2';

export default function Signup() {
    const [name,setName] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const {error} = useSelector(store=>store.Product)
    // const { signup } = useSelector(store => store.Product);
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const createAccount = ()=>{
        
        dispatch(insertdata({name,email,password}))
        console.log(error);
        if(error){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Created Successfully",
                showConfirmButton: false,
                timer: 3000
              });
            navigate("/signin");
            
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        }

    }
    return <>
        <div className="container-fluid d-flex justify-content-center align-items-center p-0  main ">
            <div className='row signup'>
                <div className='col-md-6  p-0'>
                    <img className='left' src={image}/>
                </div>
                <form className='col-md-6 form right p-0 '>
                    <h2 className='mt-5 '>Create an account</h2>
                    <span className=''>Enter your details</span>
                    <TextField onChange={event =>setName(event.target.value)} className='mt-3  w-75' label="Name" type='name' variant="standard" />
                    <TextField onChange={event =>setemail(event.target.value)}    className='mt-3  w-75' label="Email Address" type='email' variant="standard" />
                    <TextField onChange={event =>setpassword(event.target.value)} className='mt-3  w-75' id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"/>
                    <button onClick={()=>createAccount()} className="w-75 mt-5  button" type='submit'>Create Account</button>
                    <button className='w-75  mt-3 button-2'><FcGoogle className='fs-3 me-3'/>Sign up with google</button> 
                    <FcGoogle className='fs-3 me-3 d-none google' />
                    <p className=' mt-3' id='log'>Already have account?<span className=' text-primary ms-2 log-in'  onClick={()=>navigate("/signin")}><u>Log in</u></span></p>
                </form>
            </div>
        </div>
    </>
}