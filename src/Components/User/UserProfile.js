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
export const UserProfile = () => {
      const user = localStorage.getItem("user");
      const logout = () => {
            if(user)
            localStorage.clear();
            alert("logout successfully..")
      }

      return (
            <>
                  <Header />
                  <section className='container-fluid p-4 ' style={{ backgroundColor: "#F7FAFC" }}>
                        <section className='container p-2  row align-content-around m-auto d-flex' id='checkout-page'>
                              {/* justify-content-center */}
                              <div className='checkout-right border col-md-3 p-5 card mt-2' style={{ backgroundColor: "white", height: 'auto', width: '300px' }}>
                                    <div className="d-flex justify-content-center align-content-center">
                                          <img src={userImg} style={{ width: '150px', height: '120px', textAlign: 'center' }}></img>
                                    </div>
                                    <div className="row">
                                          <span className="mt-3 fw-semibold text-mdiaa" style={{ marginLeft: "10px" }}>Manage My Account</span>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><FaRegGrinBeam className="mt-1" />&nbsp;My Profile</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><PiAddressBook className="mt-1" />&nbsp;Address Book</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><FaAmazonPay className="mt-1" />&nbsp;My Payment Option</p>
                                          <p className="mt-3 fw-semibold text-mdia" style={{ marginLeft: "10px" }}> My Orders</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}> <GiReturnArrow className="mt-1" />&nbsp;Delivered</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}> <GiReturnArrow className="mt-1" />&nbsp;My Returns</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><MdOutlineCancel className="mt-1" />&nbsp;My Cancellations</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><MdOutlineCancel className="mt-1" />&nbsp;On the way</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><MdFavoriteBorder className="mt-1" />&nbsp;My Wishlist</p>
                                          <p className="mt-3 fw-semibold text-mdia" style={{ marginLeft: "10px" }}> Other</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><MdFavoriteBorder className="mt-1" />&nbsp;My Wishlist</p>
                                          <p className="mt-2 d-flex text-mdia" style={{ marginLeft: "30px" }}><BsCart2 className="mt-1" />&nbsp;My Cart</p>

                                          <p onClick={logout} className="mt-2 d-flex text-mdia" style={{cursor:'pointer', marginLeft: "30px" }}><IoIosPower className="mt-1" />&nbsp;Logout</p>
                                          <p><br />
                                                {/* <button className="btn btn-primary btn  mt-3" type="button">Save & Changes</button> */}
                                                </p>
                                    </div>

                              </div>

                              <div id='checkout-left' className='col-md-8 me-3 border card m-2 ' style={{ backgroundColor: "white", height: 'auto' }}>
                                    <div className='row form-group p-5'>
                                          <p style={{ color: "#0D6EFD" }} className='fs-5 fw-semibold'>Edit Your Profile <FiEdit className="float-end" style={{cursor:'pointer'}}/><br /> <hr /> <br /></p>

                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-8'>First Name*</label><br />
                                                <input type='text' required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>

                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-8'>Last Name*</label><br />
                                                <input type='text' required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-6'>Email*</label><br />
                                                <input type='text' required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-6'>Address*</label><br />
                                                <input type='text' required className='form-control mt-1' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          &nbsp;
                                          <p className='fs-7'>Password Changes</p>
                                          <br />
                                          <div className='col-md-12 mt-2'>

                                                <input type='text' className='form-control' placeholder='Current Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                <br />
                                          </div>

                                          <div className='col-md-12 mt-2'>

                                                <input type='text' className='form-control' placeholder='New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                <br />
                                          </div>


                                          <div className='col-md-12 mt-2'>

                                                <input type='text' className='form-control' placeholder='Confirm New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                                <br />
                                          </div>
                                          <div className='col-md-6 mt-3'>
                                                <button class="btn btn-primary btn" type="button">Save & Changes</button>
                                                {/* <button className='btn btn-primary mt-2 rounded-sm'>Save Changes</button> */}
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </section>
            </>
      );
};
export default UserProfile;