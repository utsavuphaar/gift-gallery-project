

export const UserProfile = () => {
      return (
            <>
                  <section className='container-fluid p-4' style={{backgroundColor:"#F7FAFC"}}>
                        <section className='container p-2 justify-content-center row align-content-around m-auto d-flex' id='checkout-page'>

                              <div id='checkout-right'className='border col-md-4 p-5' style={{ marginRight: '40px',backgroundColor:"white"}}>
                                    <div className="row">
                                          <p className="mt-5 fw-semibold" style={{ marginLeft: "10px" }}>Manage My Account</p>
                                          <p className="mt-2" style={{ marginLeft: "30px" }}>My Profile</p>
                                          <p className="mt-2" style={{ marginLeft: "30px" }}>Address Book</p>
                                          <p className="mt-2" style={{ marginLeft: "30px" }}>My Payment Option</p>
                                    </div>
                                    <div className="row">
                                          <p className="mt-4 fw-semibold" style={{ marginLeft: "10px" }}>My Orders</p>
                                          <p className="mt-2" style={{ marginLeft: "30px" }}>My Returns</p>
                                          <p className="mt-2" style={{ marginLeft: "30px" }}>My Cancellations</p>
                                    </div>
                                    <div className="row">
                                          <p className="mt-4 fw-semibold" style={{ marginLeft: "10px" }}>My Wishlist</p>
                                    </div>
                              </div>

                              <div id='checkout-left' className='col-md-7 me-3 border' style={{backgroundColor:"white"}}>

                                    <div className='row form-group p-5'>
                                          <p style={{ color: "#0D6EFD" }} className='fs-5 fw-semibold'>Edit Your Profile</p>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-6'>First Name*</label><br />
                                                <input type='text' required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-6'>Last Name*</label><br />
                                                <input type='text' required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-6'>Email*</label><br />
                                                <input type='text' required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-2'>
                                                <label className='fs-6'>Address*</label><br />
                                                <input type='text' required className='form-control' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          &nbsp;
                                          <p className='fs-6'>Password Changes</p>
                                          <div className='col-md-12 mt-2'>

                                                <input type='text' className='form-control' placeholder='Current Password' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-12 mt-2'>

                                                <input type='text' className='form-control' placeholder='New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-12 mt-2'>

                                                <input type='text' className='form-control' placeholder='Confirm New Password' style={{ backgroundColor: "#f5f5f5" }} />
                                          </div>
                                          <div className='col-md-6 mt-2'>
                                                <button className='btn btn-primary mt-2 rounded-sm'>Save Changes</button>
                                          </div>
                                    </div>

                              </div>
                        </section>
                  </section>
            </>
      );
};
export default UserProfile;