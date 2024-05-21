import { useLocation } from 'react-router-dom';
import './Otp.css'
function VerifyOtp() {
    const {state} = useLocation();
    document.addEventListener("DOMContentLoaded", function (event) {

        function OTPInput() {
            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('keydown', function (event) {
                    if (event.key === "Backspace") {
                        inputs[i].value = '';
                        if (i !== 0) inputs[i - 1].focus();
                    }
                    else {
                        if (i === inputs.length - 1 && inputs[i].value !== '') {
                            return true;
                        } else if (event.keyCode > 47 && event.keyCode < 58) {
                            inputs[i].value = event.key; if (i !== inputs.length - 1) inputs[i + 1].focus();
                            event.preventDefault();
                        } else if (event.keyCode > 64 && event.keyCode < 91) {
                            inputs[i].value = String.fromCharCode(event.keyCode);
                            if (i !== inputs.length - 1) inputs[i + 1].focus();
                            event.preventDefault();
                        }
                    }
                });
            }
        } OTPInput();


    });
    return <>
        <section id="otp" >
            <div class="container d-flex justify-content-center align-items-center" style={{height:'94vh'}}>
                <div class="position-relative">
                    <div class="card p-2 text-center">
                        <h6>Please enter the one time password <br /> to verify your account</h6>
                        <div> <span>A code has been sent to</span> <small>*******{state.slice(6,10)}</small>
                        </div> <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                            <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                            <input class="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                        </div> <div class="mt-4"> <button class="btn btn-danger px-4 validate">Validate</button> </div>
                    </div>
                    <div class="card-2 p-2 m-3">
                        <div class="content d-flex justify-content-center align-items-center">
                            <span>Didn't get the code</span> <a style={{cursor:'pointer'}} class="cursor-pointer text-decoration-none ms-3">Resend(1/3)</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default VerifyOtp;