import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
import image from './d4d7c1b4-98c5-4859-836b-294d65cbd56c.be0ab837448c28bf10ffa8eb4955cdf8.webp'
import {useNavigate} from 'react-router-dom'
export default function Signin() {
    const navigate = useNavigate();
    return <>
        <div className='container-fluid d-flex justify-content-center align-items-center p-0 main'>
            <div className='row  signin'>
                <div className='col-md-6  form'>
                    <h2 className='mt-5 '>Login</h2>
                    <TextField className='mt-3  w-75' label="Email Address" type='email' variant="standard" />
                    <TextField className='mt-3  w-75' label="Password" type='password' variant="standard" />
                    <p className='mt-3 forget'>Forget Password ?</p>
                    <button className="w-75 mt-4  button">Sign In</button>
                    <button className='w-75  mt-3 button-2'><FcGoogle className='fs-3 me-3' />Sign in with google</button>
                    <p className=' mt-3 ' id='log-2'>Do not have an account,<span className=' text-primary ms-2 create' onClick={navigate('/signup')}><u>create a new one.</u></span></p>

                </div>
                <div className='col-md-6  p-0'>
                    <img src={image} className='image' />
                </div>
            </div>
        </div>
        {/* <div className="container-fluid d-flex justify-content-center align-items-center p-0  main ">
            <div className='row border signin'>
                <div className='col-md-6 p-0 form border'>
                </div>
                <div className='col-md-6 border image p-0'>
                    <img className='' src={image} />
                </div>
            </div>
        </div> */}
    </>
}
