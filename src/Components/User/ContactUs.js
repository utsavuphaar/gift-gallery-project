import { IoMdMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import './ContactUs.css';
import Header from "./Header";
import { useState } from "react";
import Footer from "./footer";
import axios from "axios";
import Swal from "sweetalert2";

export const ContactUs = () => {
    const userId = localStorage.getItem("userId");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");

    const sendRequest = (e) => {
        e.preventDefault(); // Prevent the form from submitting

        if (!name || !email || !contact || !message) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please fill all the fields",
            });
            return;
        }

        axios.post(process.env.REACT_APP_ADDCONTACT, { name, email, contact, message, userId })
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thanks for contacting us",
                    showConfirmButton: false,
                    timer: 3000
                });
                // Reset the form fields
                setName("");
                setEmail("");
                setContact("");
                setMessage("");
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong",
                });
            });
    };

    return (
        <>
            <Header />
            <div className="container margin ml-5 mb-5 main-container">
                <div className="row row-div">
                    <h1 className="text-center mt-5 fs-2" style={{ color: "#0D6EFD" }}>Get In Touch</h1>
                    <div className="col-lg-4">
                        <section className="box-1">
                            <div className="row">
                                <div className="col-lg-12 d-flex flex-column justfiy-content-center align-items-center">
                                    <div className="contactUs-icons-circle d-flex align-items-center justify-content-center bg-white" style={{ width: "40px", height: "40px", borderRadius: "50px" }}>
                                        <LuPhoneCall className="fs-5 text-primary" />
                                    </div>
                                    <h6 style={{ fontSize: "1.3rem" }} className="ml-2 mt-1 h6-tag">Call To Us</h6>
                                    <p className="p-tag" style={{ fontSize: "16px", marginBottom: "1rem" }}>We are available 24/7, 7 days a week</p>
                                    <p className="p-tag" style={{ fontSize: "16px", marginBottom: "2rem" }}>Phone: 7000718505 </p>
                                </div>
                            </div>
                        </section>
                        <section className="box-1 mt-3">
                            <div className="row">
                                <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center">
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
                    <div className="col-lg-8">
                        <form className="box-2 ml-5 mt-sm-4" onSubmit={sendRequest}>
                            <div className="row fill-margin">
                                <div className="col-lg-4 form-floating">
                                    <div className="input-field">
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" required className="input-tag" />
                                        <label htmlFor="name" className="label-name">Your name:</label>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="input-field">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" required className="input-tag" />
                                        <label htmlFor="email" className="label-name">Your Email:</label>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="input-field">
                                        <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" id="contact" required className="input-tag" />
                                        <label htmlFor="contact" className="label-name">Your Contact:</label>
                                    </div>
                                </div>

                                <div className="form-group" style={{ marginTop: '100px' }}>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" className="form-field mt-5 your-message-text-area" placeholder="Your Message" rows="7" required></textarea>
                                    <label htmlFor="message" className="label-name form-label your-message-text-area">Your Message</label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary send-button">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
