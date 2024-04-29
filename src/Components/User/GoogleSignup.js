import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import URL from '../ApiUrl';
import googleIcon from './google.png';

function GoogleSignup() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            console.log(codeResponse);
            alert("Hello");
            getUserData(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const createAccount = () => {
        alert("Hii")
        axios.post(URL.signup, { username, email, password, contact })
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account Created Successfully",
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };

    const getUserData = (userData) => {
        if (userData) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData.access_token}`, {
                headers: {
                    Authorization: `Bearer ${userData.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                setProfile(res.data);
                console.log(res.data);
                setUsername(res.data.name);
                setEmail(res.data.email);
                setPassword(res.data.id);
                createAccount(); // Call createAccount method here
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to fetch user data!",
                });
            });
        }
    };

    return (
        <button className='w-75 mt-3 button-2' onClick={()=>login()}>
            <FcGoogle className='fs-3 me-3' />Sign up with Google
        </button>
    );
}

export default GoogleSignup;
