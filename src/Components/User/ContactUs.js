import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import './ContactUs.css';
import Header from "./Header";
import Footer from "./footer";

export const ContactUs = () => {
      return (
            <>
            <Header/>
                        <div class="container margin ml-5 mb-5 main-container">
                              <div class="row row-div">
                                    <h1 className="text-center mt-5 fs-2" style={{ color: "#0D6EFD" }}>Get In Touch</h1>
                                    <div class="col-lg-4">
                                          <section class="box-1 ml-5 mt-sm-3">
                                                <div class="row ma">
                                                      <div class="col-lg-12">
                                                            <div className="contactUs-icons-circle" style={{ width: "35px", height: "35px", borderRadius: "50px" }}>
                                                                  <LuPhoneCall className="contactUs-icons ml-2 mt-2" />
                                                            </div>
                                                            <h6 style={{ fontSize: "1.3rem" }} className="ml-2 mt-1 call-to-us">Call To Us</h6>
                                                            <p style={{ fontSize: "18px", marginBottom: "1rem" }}>We are available 24/7, 7 days a week</p>
                                                            <p style={{ fontSize: "18px", marginBottom: "2rem" }}>Phone: 8801611112222 </p>
                                                      </div>
                                                </div>
                                          </section>
                                          <section class="box-1 ml-5 mt-sm-3">
                                                <div class="row ma">
                                                      <div class="col-lg-12">
                                                            <div className="contactUs-icons-circle" style={{ width: "35px",height: "35px", borderRadius: "50px" }}>
                                                                  <IoMdMail className="contactUs-icons ml-2 mt-2" />
                                                            </div>
                                                            <h6 style={{ fontSize: "1.3rem" }} className="ml-2 mt-1">Write To Us</h6>
                                                            <p style={{ fontSize: "18px",  marginBottom: "1rem" }}>Fill out our form and we will contact you within 24 hours</p>
                                                            <p style={{ fontSize: "15px",  marginBottom: "1rem" }}>Email: GiftGallery@gmail.com </p>
                                                            <p style={{ fontSize: "15px", position: "relative", bottom: "14px" }}>Email: UtsavUphar@gmail.com.com </p>
                                                      </div>
                                                </div>
                                          </section>
                                    </div>
                                    <div class="col-lg-8">
                                          <section class="box-2 ml-5 mt-sm-4">
                                                <div class="row fill-margin">
                                                      <div class="col-lg-4 form-floating">
                                                            {/* <input type="name" placeholder="Your Name *" class="fill col-sm-6 col-lg-12 mt-sm-4 " /> */}
                                                            <form action="">
                                                                  <div class="input-field">
                                                                        <input type="text" id="name" required />
                                                                        <label for="name">Your name:</label>
                                                                  </div>
                                                            </form>
                                                      </div>


                                                      <div class="col-lg-4">
                                                            {/* <input type="email" placeholder="Your Email *" class="fill col-sm-6 col-lg-12 mt-sm-4" /> */}
                                                            <form action="">
                                                                  <div class="input-field">
                                                                        <input type="text" id="name" required />
                                                                        <label for="name">Your Email:</label>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                      <div class="col-lg-4">
                                                            {/* <input type="phone" placeholder="Your phone *" class="fill col-sm-6 col-lg-12 mt-sm-4" /> */}
                                                            <form action="">
                                                                  <div class="input-field">
                                                                        <input type="text" id="name" required />
                                                                        <label for="name">Your Contact:</label>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                      <div class="form-group">
                                                            <textarea id="message" class="form-field text-area mt-1" placeholder="Your Message" rows="6" required></textarea>
                                                            <label for="message" class="form-label text-area" >Your Message</label>
                                                      </div>
                                                </div>      
                                                <div  >
                                                      <button className="btn btn-primary send-button" > Send Message</button>
                                                </div>
                                          </section>
                                    </div>
                              </div>
                        </div>
                  <Footer/>
            </>
      );
};

export default ContactUs;
