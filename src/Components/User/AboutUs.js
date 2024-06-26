import about from "./Images/aboutUs-image.jpg"
import img1 from "./Images/img1.png"
import img5 from "./Images/Img5.png"
import img3 from "./Images/person1.png"
import img4 from "./Images/img4.png"
import { FaUsers } from "react-icons/fa6";
import { FaGifts } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import './AboutUs.css';
import Header from "./Header";
import Footer from "./footer"
export const AboutUs =()=>{
      return<>
      <Header/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-5 mt-5">
          <h2 className="ml-5 mb-4 mt-2 fs-1 text-primary text-sm-center" style={{ color: "#53A0B0" }}>About Us</h2>
          <p className="ml-5 mt-5 text-sm-center">
            Welcome to our Gift Gallery, where every present tells a story and every moment is celebrated in style. Our application is your one-stop destination for finding the perfect gift for every occasion, whether it's a birthday, anniversary, holiday, or just a spontaneous gesture of love and appreciation. With a curated collection of unique and thoughtful gifts, we strive to make gifting an experience filled with joy and meaning. Explore our virtual aisles, discover treasures that speak to the heart, and let us help you create unforgettable memories, one gift at a time.
          </p>
          <p className="ml-5 text-sm-center">
            Explore our virtual aisles, discover treasures that speak to the heart, and let us help you create unforgettable memories, one gift at a time.
          </p>
        </div>
        <div className="col-md-6 p-5 mt-5">
          <div className="about-us-container position-relative">
            <img className='about-image' src={about} alt="Gift box and flowers" style={{ cursor: 'pointer', maxWidth: "100%", height: "auto" }} />
            <div className="overlay-2 position-absolute top-50 start-50 translate-middle">
              <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram className='ml-3' style={{ color: "white", width: "50px", height: "50px" }} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className='ml-3' style={{ color: "white", width: "50px", height: "50px" }} />
              </a>
              <a href="https://www.Twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare className='ml-3' style={{ color: "white", width: "50px", height: "50px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mb-sm-0 mt-sm-5 d-flex justify-content-center">
          <div className="card card-container mt-3" style={{ width: "20rem" }}>
            <img src={img3} className="card-img-top" alt="Placeholder" style={{ maxHeight: "350px", width: "100%" }} />
            <div className="card-body">
              <h5 className="card-title">Tom Cruise</h5>
              <p className="card-text">Founder and Chairman</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mb-sm-0 mt-sm-5 d-flex justify-content-center">
          <div className="card card-container mt-3" style={{ width: "20rem" }}>
            <img src={img4} className="card-img-top" alt="Placeholder" style={{ maxHeight: "350px", width: "100%" }} />
            <div className="card-body">
              <h5 className="card-title">Emma Watson</h5>
              <p className="card-text">Managing Director</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4 d-flex mt-xs-4 mt-sm-5 justify-content-center">
          <div className="card card-container mt-3" style={{ width: "20rem" }}>
            <img src={img5} className="card-img-top mt-3" alt="Placeholder" style={{ maxHeight: "350px", width: "100%" }} />
            <div className="card-body">
              <h5 className="card-title">Will Smith</h5>
              <p className="card-text">Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='icon-decoration d-flex justify-content-center mb-4'>
              <div className='icon-decoration-border'>
                <div className="icon-circle d-flex justify-content-center align-content-center">
                  <TbTruckDelivery className='ml-2 mt-2 icon-design' size={30} style={{ color: "white" }} />
                </div>
              </div>
            </div>
            <div className='content'>
              <div className='paragraph-1 text-center'>
                <h5>Free and Fast Delivery</h5>
              </div>
              <div className='paragraph-2 text-center'>
                <p>Free Delivery for all Orders Over Rs.1000</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='icon-decoration d-flex justify-content-center mb-4'>
              <div className='icon-decoration-border'>
                <div className="icon-circle d-flex justify-content-center align-content-center">
                  <RiCustomerServiceLine className='ml-2 mt-2 icon-design' size={30} style={{ color: "white" }} />
                </div>
              </div>
            </div>
            <div className='content d-flex flex-column'>
              <div className='paragraph-1 text-center'>
                <h5 className="text-center">24/7 Customer Service</h5>
              </div>
              <div className='paragraph-2 text-center'>
                <p className="text-center">Friendly 24/7 Customer Support</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='icon-decoration d-flex justify-content-center mb-4'>
              <div className='icon-decoration-border'>
                <div className="icon-circle d-flex justify-content-center align-content-center">
                  <SiAdguard className='ml-2 mt-3 icon-design' size={25} style={{ color: "white" }} />
                </div>
              </div>
            </div>
            <div className='content d-flex flex-column'>
              <div className='paragraph-1 text-center'>
                <h5>Money Back Guarantee</h5>
              </div>
              <div className='paragraph-2 text-center'>
                <p>We Return Money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
}
export default AboutUs;
