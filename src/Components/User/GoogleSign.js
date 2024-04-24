import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import URL from '../ApiUrl'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function GoogleSign() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    // const [username, setusername] = useState("");
    const [email, setemail] = useState("")
    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            console.log(codeResponse);
            Userdata(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const signin = () =>{
        // console.log("Hello"+email);  
        axios.post("http://localhost:3000/user/findbyemail",{email})
        .then(()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 3000
            });
            navigate("/")
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const Userdata = (userData) => {
        if (userData) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${userData.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    console.log(res.data);
                    setemail(res.data.email)
                    signin()
                    
                })
                .catch((err) => console.log(err));
        }
    };

    return <>
        <button id='' className='w-75  mt-3 button-2' onClick={login}>
            <FcGoogle className='fs-3 me-3' />Sign in with google
        </button>
        <FcGoogle className='fs-3 me-3 d-none ' id='google' onClick={login} />
    </>
}

export default GoogleSign;
