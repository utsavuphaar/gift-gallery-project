
import { HiShoppingBag } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export const Footer = () => {
      return (
            <div className="container-fluid bg-light ">
                  <div className="row justify-content-center">
                        <div className="col-md-3">
                              <div className="row">
                                    <div className="shopping-bag-div ml-5 mt-5 text-sm-center">
                                          <span>
                                                <HiShoppingBag className="bag-icon text-md-center justify-content-md-center" />
                                          </span>
                                          <a href="#" className="logo-UtsavUphar text-center">
                                                UtsavUphar
                                          </a>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col text-left">
                                          <p className="mt-3 ml-4 text-md-center text-lg-left text-center text">
                                                Best information about the company
                                                <br />
                                                goes here but now lorem ipsum is
                                          </p>
                                    </div>
                              </div>
                              <div className="ml-4 text-lg-left text-sm-center">
                                    <a href="https://www.facebook.com" target="_blank">

                                          <BsFacebook className="facebookk-icon" />
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank">
                                          <AiFillTwitterCircle className="facebookk-icon" />
                                    </a>
                                    <a href="https://www.Instagram.com/" target="_blank">
                                          <TiSocialInstagram className="facebookk-icon" />
                                    </a>
                                    <a href="https://www.Linkedin.com/" target="_blank">
                                          <BsLinkedin className="facebookk-icon" />
                                    </a>
                                    <a href="https://www.YouTube.com/" target="_blank">
                                          <BsYoutube className="facebookk-icon" />
                                    </a>
                              </div>

                        </div>
                        <div className="col-md-9">
                              <div className="row">
                                    <div className="col-md-3 mt-5 text-center text-sm-center text-lg-left">
                                          <h5>About</h5>
                                          <span>About <br></br></span>
                                          <span>Find Store <br></br></span>
                                          <span>Categories<br></br></span>
                                          <span>Blogs<br></br></span>


                                    </div>
                                    <div className="col-md-3 mt-5 text-center text-sm-center text-sx-center text-lg-left">
                                          <h5>Partnership<br></br></h5>
                                          <span>About Us<br></br></span>
                                          <span>Find Store <br></br></span>
                                          <span>Categories <br></br></span>
                                          <span>Blogs<br></br></span>
                                    </div>
                                    <div className="col-md-3 mt-5 text-center text-sm-center text-lg-left">
                                          <h5>Information</h5>
                                          <span>Help Center <br></br></span>
                                          <span>Money Refund<br></br></span>
                                          <span>Shipping<br></br></span>
                                          <span>Contact Us<br></br></span>

                                    </div>
                                    <div className="col-md-3 mt-5 text-center text-sm-center text-lg-left">
                                          <h5>For Users</h5>
                                          <span>Login<br></br></span>
                                          <span>Register<br></br></span>
                                          <span>Settings<br></br></span>
                                          <span>My Orders<br></br></span>
                                    </div>

                              </div>

                        </div>
                  </div>
            </div >
      );

};

export default Footer;
