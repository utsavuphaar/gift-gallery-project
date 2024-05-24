import { useLocation, useNavigate } from 'react-router-dom';
import './Otp.css'
import OTPInput from 'react-otp-input';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import ApiUrl from '../ApiUrl';
function VerifyOtp() {
    const { state } = useLocation();
    const [otp, setotp] = useState("");
    alert(state.email + " " + state.orderId);
    const email = state.email;
    const navigate = useNavigate();
    document.addEventListener("DOMContentLoaded", function (event) {

        // function OTPInput() {
        //     const inputs = document.querySelectorAll('#otp > *[id]');
        //     for (let i = 0; i < inputs.length; i++) {
        //         inputs[i].addEventListener('keydown', function (event) {
        //             if (event.key === "Backspace") {
        //                 inputs[i].value = '';
        //                 if (i !== 0) inputs[i - 1].focus();
        //             }
        //             else {
        //                 if (i === inputs.length - 1 && inputs[i].value !== '') {
        //                     return true;
        //                 } else if (event.keyCode > 47 && event.keyCode < 58) {
        //                     inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus();
        //                     event.preventDefault();
        //                 } else if (event.keyCode > 64 && event.keyCode < 91) {
        //                     inputs[i].value = String.fromCharCode(event.keyCode);
        //                     if (i !== inputs.length - 1) inputs[i + 1].focus();
        //                     event.preventDefault();
        //                 }
        //             }
        //         });
        //     }
        // } OTPInput();

    });


    const verificationOtp = async () => {
        await axios.post("http://localhost:8080/otp/verify", { email, otp })
            .then((res) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "OTP verification successful",
                    showConfirmButton: false,
                    timer: 2000
                });
                if (res) {
                    axios.put(ApiUrl.updateOrderStatus, { id: state.orderId, status: "Delivered" });
                    axios.get(ApiUrl.viewAllOrders)
                    .then(response => {
                        console.log(response.data.result)
                    }).catch(err => {
                        console.log(err);
                    })
                    alert("Order Delivered Successfully...")
                    navigate(-1)
                }

            })
            .catch(err => {
                // alert("OTP is incorrect")
                toast.error("OTP is incorrect", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Zoom,
                });
                console.log(err);
            })
    }



    return <>
        <ToastContainer />
        <section id="otp" >
            <div class="container d-flex justify-content-center align-items-center" style={{ height: '94vh' }}>
                <div class="position-relative">
                    <div class="card p-2 text-center">
                        <h6>Please enter the one time password <br /> to verify your account</h6>
                        <div> <span>A code has been sent to</span> <small>*******{state.email.slice(6, 10)}</small>
                        </div> <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                            {/* <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> */}
                            <OTPInput
                                value={otp}
                                onChange={setotp}
                                numInputs={6}
                                otpType="number"
                                autoFocus
                                className="otp-container"
                                inputStyle={{ backgroundColor: "#9ba0a7", color: 'white', outline: 'none', marginRight: "10px", border: 'none', borderRadius: "10px", width: "30px", height: '40px' }}
                                renderInput={(props) => <input {...props} />}
                            />



                        </div> <div class="mt-4"> <button onClick={verificationOtp} class="btn btn-danger px-4 validate">Validate</button> </div>
                    </div>
                    <div class="card-2 p-2 m-3">
                        <div class="content d-flex justify-content-center align-items-center">
                            <span>Didn't get the code</span> <a style={{ cursor: 'pointer' }} class="cursor-pointer text-decoration-none ms-3">Resend(1/3)</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default VerifyOtp;