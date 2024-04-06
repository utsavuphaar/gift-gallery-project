import '../../CSS/Signup.css'

export default function SignUp(){
    return <>
        <div className='container-fluid d-flex justify-content-center align-items-center border main'>
            <div className='row border signup-page'>
                <div className='col-md-6 border image'>

                </div>
                <div className='col-md-6 border left'>
                    <h2 className='mt-4 ms-4'>Create an account</h2>
                    <span className='ms-4'>Enter your details below</span>
                    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                </div>
            </div>
        </div>
    </>
}