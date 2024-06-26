import { IoIosGift } from "react-icons/io";
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import './footer.css'
export const Footer = () => {
      return <>
            <footer className="footer">
                  <div className="container">
                        <div className="row">
                              <div className="footer-col ml-3">
                                    <div className='col-md-6 ms-1 title' style={{ width: "250px" }}>
                                          <div className='mt-1 p-2 mb-2 icon  d-flex justify-content-center align-items-center'>
                                                <IoIosGift className='fs-3 text-light' />
                                          </div>
                                          <span className='ms-3 fs-3 name'>
                                                UtsavUphaar
                                          </span>
                                    </div>
                                    <div className="p-3">
                                          <p style={{ color: "black" }}>
                                                Thank you for visiting our Gift Gallery! We offer a wide range of unique and personalized gifts for every occasion. Follow us on social media for the latest updates and special offers.
                                          </p>

                                    </div>
                              </div>
                              <div className="footer-col">
                                    <h4 className="mt-3">company</h4>
                                    <ul>
                                          <li><a href="#">about us</a></li>
                                          <li><a href="#">our services</a></li>
                                          <li><a href="#">privacy policy</a></li>
                                          <li><a href="#">affiliate program</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4 className="mt-3">get help</h4>
                                    <ul>
                                          <li><a href="#">FAQ</a></li>
                                          <li><a href="#">shipping</a></li>
                                          <li><a href="#">returns</a></li>
                                          <li><a href="#">order status</a></li>
                                          <li><a href="#">payment options</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4 className="mt-3">Gift Gallery</h4>
                                    <ul>
                                          <li><a href="#">watch</a></li>
                                          <li><a href="#">bag</a></li>
                                          <li><a href="#">shoes</a></li>
                                          <li><a href="#">dress</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <ul className="social-links mt-0">
                                          <a href="https://www.facebook.com/" target="_blank"> <FaFacebook className="fs-4" />   </a>
                                          <a href="https://www.twitter.com/" target="_blank"><AiFillTwitterCircle className="fs-4" /></a>
                                          <a href="https://www.instagram.com/" target="_blank"><RiInstagramFill className="fs-4" /></a>
                                          <a href="https://www.youtube.com/" target="_blank"><FaYoutube className="fs-4" /></a>
                                    </ul>
                              </div>
                        </div>
                  </div>
                  <div className="container-fluid p-2 bg-secondary d-flex justify-content-center align-items-center">
                        {/* <div className=" d-flex justify-content-center align-items-center p-1 copyright"> */}
                        <h6 className="mt-2 text-white"> &copy; 2024 UtsavUphar. All rights reserved.</h6>
                        {/* </div> */}
                  </div>
            </footer>
      </>

};

export default Footer;