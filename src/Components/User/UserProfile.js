import { BsCart2 } from "react-icons/bs";
import { FaRegGrinBeam } from "react-icons/fa";
import { PiAddressBook } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { FaAmazonPay } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosPower } from "react-icons/io";
import userImg from "./Images/user.png"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
export const UserProfile = () => {
      const [disabled, setDisabled] = useState(true);
      const [disabledEntity, setDisabledEntity] = useState(true);
      const navigate = useNavigate();
      let user = localStorage.getItem("user");
      user = JSON.parse(user);
      let email = user.email;
      let oldPassword = useRef(null);
      let newPassword = useRef(null);
      let confirmPassword = useRef(null);
      const logout = () => {
            if (user)
                  localStorage.clear();
            alert("logout successfully..")
            navigate("/signup")
      }



      const changePassword = () => {
            oldPassword = oldPassword.current.value;
            newPassword = newPassword.current.value;
            confirmPassword = confirmPassword.current.value;
            alert(oldPassword+" "+newPassword+" "+confirmPassword)
            axios.post("http://localhost:3000/user/updatePassword", { email, password: oldPassword, newPassword:newPassword }).then(res => {
                  console.log(res)
                  alert("successfully")
                  setDisabled(true)
            }).catch(err => {
                  alert(err.response.data.message)
                  setDisabled(true)
            });
      }

      const enablePassword = () => {
            disabled === true ? setDisabled(false) : setDisabled(true);
      }
      const enableEntity = () => {
            disabledEntity === true ? setDisabledEntity(false) : setDisabledEntity(true);
      }

      return (
            <>
                  <Header />
                  <section className='container-fluid p-4 ' style={{ backgroundColor: "#F7FAFC" }}>
                        <section className='container p-2  row align-content-around m-auto d-flex' id='checkout-page'>
                              {/* justify-content-center */}
                              <div className='checkout-right border col-md-3 p-5 card mt-2' style={{ backgroundColor: "white", height: 'auto', width: '300px' }}>
                                    <div className="d-flex justify-content-center align-content-center">
                                          <img src={userImg} className="" style={{ width: '130px', height: '100px', textAlign: 'center' }}></img>
                                          <div className="mt-3">
                                                <h6>Hello,</h6>
                                                <h5 className="text-primary">{user.name}</h5>
                                          </div>
                                    </div>
                                    <div className="row">
                                          <span className="mt-3 fw-semibold text-mdiaa" style={{ marginLeft: "10px" }}>Manage My Account</span>
                                          <p className="mt-3 d-flex text-mdia" style={{ marginLeft: "30px" }}><FaRegGrinBeam className="mt-1" />&nbsp;My Profile</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}><PiAddressBook className="mt-1" />&nbsp;Address Book</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}><FaAmazonPay className="mt-1" />&nbsp;My Payment Option</p>
                                          <p className="mt-1 fw-semibold text-mdia" style={{ marginLeft: "10px" }}> My Orders</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}> <GiReturnArrow className="mt-1" />&nbsp;Delivered</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}> <GiReturnArrow className="mt-1" />&nbsp;My Returns</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}><MdOutlineCancel className="mt-1" />&nbsp;My Cancellations</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}><MdOutlineCancel className="mt-1" />&nbsp;On the way</p>
                                          <p className="mt-1 fw-semibold text-mdia" style={{ marginLeft: "10px" }}> Other</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}><MdFavoriteBorder className="mt-1" />&nbsp;My Wishlist</p>
                                          <p className="d-flex text-mdia" style={{ marginLeft: "30px" }}><BsCart2 className="mt-1" />&nbsp;My Cart</p>
                                          <p onClick={logout} className="d-flex text-mdia" style={{ cursor: 'pointer', marginLeft: "30px" }}><IoIosPower className="mt-1" />&nbsp;Logout</p>
                                          <p>
                                          </p>
                                    </div>

                              </div>

                              <div id='checkout-left' className='col-md-8 me-3 border card m-2 ' style={{ backgroundColor: "white", height: 'auto', width: '70%' }}>
                                    <div className='row form-group p-5'>
                                          <p style={{ color: "#0D6EFD" }} className='fs-5 fw-semibold'>Edit Your Profile <FiEdit onClick={enableEntity} className="float-end" style={{ cursor: 'pointer' }} /> <hr /></p>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-8'>First Name*</label><br />
                                                <input type='text' disabled={disabledEntity} required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-8'>Last Name*</label><br />
                                                <input type='text' disabled={disabledEntity} required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-4'>
                                                <label className='fs-6'>Email*</label><br />
                                                <input type='text' disabled={disabledEntity} required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-4'>
                                                <label className='fs-6'>Address*</label><br />
                                                <input type='text' disabled={disabledEntity} required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-4'>
                                                <button class="btn btn-primary btn" type="button">Save & Changes</button>
                                          </div>
                                          &nbsp;
                                          <div className="form-group ms-2">
                                                <p className='fs-7 mt-2'>Password Changes <FiEdit onClick={enablePassword} className="float-end text-primary" style={{ cursor: 'pointer' }} /> </p>

                                                <div className='col-md-12'>
                                                      <input disabled={disabled} type='text' className='form-control' ref={oldPassword} placeholder='Current Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                      <br />
                                                </div>

                                                <div className='col-md-12 mt-2'>
                                                      <input disabled={disabled} type='text' className='form-control' ref={newPassword} placeholder='New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                      <br />
                                                </div>
                                                <div className='col-md-12 mt-2'>

                                                      <input disabled={disabled} type='text' className='form-control' ref={confirmPassword} placeholder='Confirm New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                      <br />
                                                </div>
                                                <div className='col-md-6 mt-3'>
                                                      <button onClick={changePassword} class="btn btn-primary btn" type="button">Save & Changes</button>
                                                </div>
                                          </div>
                                          {/* <div className="mt-2  col-md-12">
                                                <h4>FAQs</h4>
                                                <p className="fw-bold mb-0">What happens when I update my email address (or mobile number)?</p>
                                                <p className="m-0">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                                          </div> */}
                                    </div>
                              </div>
                        </section>
                  </section>
            </>
      );
};
export default UserProfile;