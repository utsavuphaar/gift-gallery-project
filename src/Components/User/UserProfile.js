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
import Swal from "sweetalert2";
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

            // alert("logout successfully..")
            Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Login Out ",
                  showConfirmButton: false,
                  timer: 1500
            });
            navigate("/signup")

      }



      const changePassword = () => {
            oldPassword = oldPassword.current.value;
            newPassword = newPassword.current.value;
            confirmPassword = confirmPassword.current.value;
            alert(oldPassword + " " + newPassword + " " + confirmPassword)
            axios.post("http://localhost:3000/user/updatePassword", { email, password: oldPassword, newPassword: newPassword }).then(res => {
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
                  <section className='container-fluid p-4 border' style={{ backgroundColor: "#F7FAFC" }}>
                        <div className='row justify-content-center'>
                              <div className='col-md-3 mt-2'>
                                    <div className='checkout-right border card p-4' style={{ backgroundColor: "white" }}>
                                          <div className="text-center">
                                                <img src={userImg} className="img-fluid" style={{ maxWidth: '130px', height: 'auto' }} alt="User" />
                                                <div className="mt-3">
                                                      <h6>Hello,</h6>
                                                      <h5 className="text-primary">{user.name}</h5>
                                                </div>
                                          </div>
                                          <div className="mt-4 border">
                                                <span className="fw-semibold text-mdiaa">Manage My Account</span>
                                                <p className="mt-2 d-flex align-items-center text-mdia"><FaRegGrinBeam className="me-1" />My Profile</p>
                                                <p className="d-flex align-items-center text-mdia"><PiAddressBook className="me-1" />Address Book</p>
                                                <p className="d-flex align-items-center text-mdia"><FaAmazonPay className="me-1" />My Payment Option</p>
                                                <span className="mt-3 fw-semibold text-mdia">My Orders</span>
                                                <p className="mt-2 d-flex align-items-center text-mdia"><GiReturnArrow className="me-1" />Delivered</p>
                                                <p className="d-flex align-items-center text-mdia"><GiReturnArrow className="me-1" />My Returns</p>
                                                <p className="d-flex align-items-center text-mdia"><MdOutlineCancel className="me-1" />My Cancellations</p>
                                                <p className="d-flex align-items-center text-mdia"><MdOutlineCancel className="me-1" />On the way</p>
                                                <span className="mt-3 fw-semibold text-mdia">Other</span>
                                                <p className="mt-2 d-flex align-items-center text-mdia"><MdFavoriteBorder className="me-1" />My Wishlist</p>
                                                <p className="d-flex align-items-center text-mdia"><BsCart2 className="me-1" />My Cart</p>
                                                <p onClick={logout} className="mt-3 d-flex align-items-center text-mdia" style={{ cursor: 'pointer' }}><IoIosPower className="me-1" />Logout</p>
                                          </div>
                                    </div>
                              </div>
                              <div className='col-md-8 mt-2'>
                                    <div className='checkout-left border card p-4' style={{ backgroundColor: "white" }}>
                                          <p style={{ color: "#0D6EFD" }} className='fs-5 fw-semibold'>Edit Your Profile <FiEdit onClick={enableEntity} className="float-end" style={{ cursor: 'pointer' }} /> <hr /></p>
                                          <div className='row g-3'>
                                                <div className='col-md-6'>
                                                      <label className='fs-8'>First Name*</label>
                                                      <input type='text' disabled={disabledEntity} required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                                </div>
                                                <div className='col-md-6'>
                                                      <label className='fs-8'>Last Name*</label>
                                                      <input type='text' disabled={disabledEntity} required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                                </div>
                                                <div className='col-md-6'>
                                                      <label className='fs-8'>Email*</label>
                                                      <input type='email' disabled={disabledEntity} required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                                </div>
                                                <div className='col-md-6'>
                                                      <label className='fs-8'>Address*</label>
                                                      <input type='text' disabled={disabledEntity} required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                                </div>
                                                <div className='col-md-12'>
                                                      <button className="btn btn-primary" type="button">Save & Changes</button>
                                                </div>
                                          </div>
                                          <div className="form-group mt-4">
                                                <p className='fs-7'>Password Changes <FiEdit onClick={enablePassword} className="float-end text-primary" style={{ cursor: 'pointer' }} /> </p>
                                                <input disabled={disabled} type='password' className='form-control mb-3' ref={oldPassword} placeholder='Current Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                <input disabled={disabled} type='password' className='form-control mb-3' ref={newPassword} placeholder='New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                <input disabled={disabled} type='password' className='form-control mb-3' ref={confirmPassword} placeholder='Confirm New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                <button onClick={changePassword} className="btn btn-primary" type="button">Save & Changes</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </>
      );
};
export default UserProfile;