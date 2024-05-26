import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import './ContactUs.css';
import Header from "./Header";
import { useRef } from "react";
import Footer from "./footer";
import axios from "axios";

export const ContactUs = () => {
      const userId  = localStorage.getItem("userId")
      let name = useRef();
      let email = useRef();
      let contact = useRef();
      let message = useRef();
      const sendRequest = () => {
            name = name.current.value;
            email = email.current.value;
            contact = contact.current.value;
            message = message.current.value;
            axios.post(process.env.REACT_APP_ADDCONTACT,{name,email,contact,message,userId}).then(res=>{
                  alert("Thanks to contact")
            }).catch(err=>{
                  console.log(err)
                  alert("err")
            });
      }
      return (
            <>
                  <Header />
                  <div class="container margin ml-5 mb-5 main-container" >
                        <div class="row row-div">
                              <h1 className="text-center mt-5 fs-2" style={{ color: "#0D6EFD" }}>Get In Touch</h1>
                              <div class="col-lg-4">
                                    <section class="box-1 ">
                                          <div class="row">
                                                <div class="col-lg-12 d-flex flex-column justfiy-content-center align-items-center">
                                                      <div className="contactUs-icons-circle d-flex align-items-center justify-content-center bg-white" style={{ width: "40px", height: "40px", borderRadius: "50px" }}>
                                                            <LuPhoneCall className="fs-5 text-primary" />
                                                      </div>
                                                      <h6 style={{ fontSize: "1.3rem" }} className="ml-2 mt-1 h6-tag">Call To Us</h6>
                                                      <p className="p-tag" style={{ fontSize: "16px", marginBottom: "1rem" }}>We are available 24/7, 7 days a week</p>
                                                      <p className="p-tag" style={{ fontSize: "16px", marginBottom: "2rem" }}>Phone: 7000718505 </p>
                                                </div>
                                          </div>      
                                    </section>
                                    <section class="box-1 mt-3">
                                          <div class="row">
                                                <div class="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                                                      <div className="contactUs-icons-circle bg-white d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px", borderRadius: "50px" }}>
                                                            <IoMdMail className="contactUs-icons text-primary fs-5" />
                                                      </div>
                                                      <h6 style={{ fontSize: "1.3rem" }} className="ml-2 mt-1 h6-tag">Write To Us</h6>
                                                      <p className="p-tag text-center" style={{ fontSize: "16px", marginBottom: "1rem" }}>Fill out our form and we will contact you within 24 hours</p>
                                                      <p className="p-tag" style={{ fontSize: "15px", marginBottom: "1rem" }}>Email: GiftGallery@gmail.com </p>
                                                      <p className="p-tag" style={{ fontSize: "15px", position: "relative", bottom: "14px" }}>Email: UtsavUphar@gmail.com </p>
                                                </div>
                                          </div>
                                    </section>
                              </div>
                              <div class="col-lg-8">
                                    <form class="box-2 ml-5 mt-sm-4">
                                          <div class="row fill-margin">
                                                <div class="col-lg-4 form-floating">
                                                      <form action="" className="form-class">
                                                            <div class="input-field">
                                                                  <input ref={name} type="text" id="name" required className="input-tag" />
                                                                  <label for="name" className="label-name">Your name:</label>
                                                            </div>
                                                      </form>
                                                </div>


                                                <div class="col-lg-4">
                                                      <form action="" className="form-class">
                                                            <div class="input-field">
                                                                  <input ref={email} type="email" id="name" required className="input-tag" />
                                                                  <label for="name" className="label-name">Your Email:</label>
                                                            </div>
                                                      </form>
                                                </div>
                                                <div class="col-lg-4">

                                                      <form action="" className="form-class">
                                                            <div class="input-field">
                                                                  <input type="text" ref={contact} id="name" required className="input-tag" />
                                                                  <label for="name" className="label-name">Your Contact:</label>
                                                            </div>
                                                      </form>
                                                </div>
                                                <div class="form-group">
                                                      <textarea id="message" ref={message} class="form-field mt-5 your-message-text-area" placeholder="Your Message" rows="6" required></textarea>
                                                      <label for="message" className="label-name form-label your-message-text-area" >Your Message</label>
                                                </div>
                                          </div>
                                          <div  >
                                                <button onClick={sendRequest} type="submit" className="btn btn-primary send-button" > Send Message</button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
                  <Footer/>
            </>
      );
};

export default ContactUs;