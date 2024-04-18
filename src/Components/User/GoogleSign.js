import React from "react"
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { useGoogleLogin } from '@react-oauth/google';

function GoogleSign() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse =>{ 
            console.log(tokenResponse);
            const dcode = jwtDecode(tokenResponse.state);
            console.log(dcode);
        }
    });
    return <>
        {/* <GoogleLogin 
            onSuccess={credentialResponse => {
                const dcode = jwtDecode(credentialResponse.credential)
                console.log(dcode);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        /> */}

        <button className="w-75 btn btn-outline-dark button-2 mt-3" onClick={() => login()}>Sign in with Google</button>
    </>
}
export default GoogleSign;