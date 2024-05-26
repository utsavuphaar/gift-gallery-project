import React, { useRef } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import google from './google.png';


function GoogleSign() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    // Google login hook
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            Userdata(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    // Function to handle sign in
    const signin = async () => {
        try {
            let result = await axios.post(process.env.REACT_APP_FINDBYEMAIL, { email: emailRef.current });
            // console.log(emailRef.current);
            console.log(result.data);
            if (result.data.user==null) {
                let res = await axios.post(process.env.REACT_APP_SIGNUP, { 
                    name: nameRef.current, 
                    email: emailRef.current, 
                    password: passwordRef.current 
                });
                if (res.data) {
                    let user = JSON.stringify(res.data.user);
                    localStorage.setItem("user", user);
                    localStorage.setItem("userId", res.data.user.id)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Account Created Successfully",
                        showConfirmButton: false,
                        timer: 3000
                    });
                    navigate("/");
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Unauthorized User",
                        text: "Something went wrong",
                        footer: '<a href="/">create a new one?</a>'
                    });
                }

                // navigate("/");
            } else {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 3000
                });
                let user = JSON.stringify(result.data.user);
                localStorage.setItem("user", user);
                localStorage.setItem("userId", result.data.user.id)
                navigate("/")
            }
        } catch (error) {
            console.log(error.response.data.message); // Properly handle error response
        }
    }

    // Function to fetch user data from Google
    const Userdata = (userData) => {
        if (userData && userData.access_token) { // Check if access token exists
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${userData.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    console.log(res.data);
                    nameRef.current = res.data.name;
                    emailRef.current = res.data.email;
                    passwordRef.current = res.data.id;
                    console.log(nameRef.current);
                    signin();
                })
                .catch((err) => console.log(err.response.data.error.message));
        }
    };

    return (
        <div className="input-group mb-3">
            <button className="btn btn-lg btn-light w-100 fs-6" onClick={login}>
                <img src={google} style={{ width: "20px" }} className="me-2" alt="Google Logo" />
                <small>Continue with Google</small>
            </button>
        </div>
    );
}

export default GoogleSign;
