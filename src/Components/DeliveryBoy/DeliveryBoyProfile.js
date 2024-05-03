
import { IoStarSharp } from "react-icons/io5";
import { IoQrCodeSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

import { FaRegUser } from "react-icons/fa";

import image from './user.png'
import "./adminstyle.css";
import { Link, Outlet } from "react-router-dom";
const DeliveryBoyDeshbord = () => {
  return <>
    <div className="container-fluid run">
      <div className="row">

        <div className="col-md-2">
          <br />
          <span className="text-dark fs-5  font-weight-bold " >&nbsp; &nbsp;
            <img src={image} alt='abc' style={{ borderRadius: "50%", height: "100px", width: "130px" }} className="img-fluid h-5"></img><br></br>
            &nbsp; &nbsp;DeliveryBoy</span>


          <span className="d-flex mt-3">    &nbsp; &nbsp;DeliveryBoy712@gmail.com</span>
          <span className="d-flex mt-1"> &nbsp;&nbsp;&nbsp;    <IoStarSharp className="mt-1" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;<IoStarSharp className="mt-1" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;<IoStarSharp className="mt-1" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;</span>

          <hr></hr>
          <Link to="">
            <span className="d-flex mt-3" style={{ color: "black" }}> &nbsp;&nbsp;<IoQrCodeSharp className="mb-1 ml-4 fs-3" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;Dashbord</span>
          </Link>

          <span className="d-flex mt-3" style={{ color: "black" }}> &nbsp;&nbsp;<CiDeliveryTruck className="mb-1 ml-4 fs-3" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;My Delivery</span>
          <Link to="getOrder">
            <span className="d-flex mt-3" style={{ color: "black" }}> &nbsp;&nbsp;<HiOutlineCurrencyRupee className="mb-1 ml-4 fs-3" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;Orders</span>
          </Link>

          <span className="d-flex mt-3" style={{ color: "black" }}> &nbsp;&nbsp;<HiOutlineCurrencyRupee className="mb-1 ml-4 fs-3" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;Earnings</span>
          <span className="d-flex mt-3" style={{ color: "black" }}> &nbsp;&nbsp;<FaRegUser className="mb-2 ml-4 fs-3" style={{ color: "#FCBE2D" }} />&nbsp;&nbsp;Profile</span>

        </div>
        <Outlet />

      </div>



    </div>

  </>
}
export default DeliveryBoyDeshbord;