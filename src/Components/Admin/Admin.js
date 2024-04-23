import { MdOutlineWatchLater } from "react-icons/md";
import { LiaTableSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { PiListChecks } from "react-icons/pi";
import { FaTableCellsLarge } from "react-icons/fa6";

import { IoSettingsOutline } from "react-icons/io5";
import { IoPowerSharp } from "react-icons/io5";
import { BiBox } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import "./adminstyle.css";
import { color } from "@chakra-ui/react";
const AdminProfile = () => {
    return <>
        <div className="container-fluid run position-relative">
            <div className="row">
                <div className="col-md-2 position-sticky" style={{top:'1px'}}>
                    <br></br>
                    <Link to="">
                        <button type="button" className="btn btn-primary btn-lg d-flex"><MdOutlineWatchLater className="mt-1" />&nbsp; Dashbord</button>
                    </Link>

                    <span className="d-flex mt-3"> <FaTableCellsLarge className="mt-1" />&nbsp; &nbsp;Product</span>

                    <span className="d-flex mt-3">     <FaRegHeart className="mt-1" />&nbsp; &nbsp;Favorites</span>
                    <span className="d-flex mt-3">     <TiMessages className="mt-1" />&nbsp;&nbsp;Inbox</span>
                    <Link to="orderList" state={{color:'black'}}>
                        <span className="d-flex mt-3">    <PiListChecks className="mt-1" />&nbsp;&nbsp;Order List</span>
                    </Link>
                    <Link to="userList">
                        <span className="d-flex mt-3">    <FaUsers className="mt-1" />&nbsp;&nbsp;User List</span>
                    </Link>
                    <Link to="productList"><span className="d-flex mt-3">
                        <BiBox className="mt-1" />&nbsp;&nbsp;Product Stock</span>
                    </Link>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>PAGES</p>
                    <span className="d-flex mt-3"> <LiaTableSolid className="mt-1 ml-4" />&nbsp;&nbsp;Table</span>
                    <hr className="linemar seting1"></hr>
                    <p className="mt-2 d-flex"><IoSettingsOutline className="mt-1 seting" />&nbsp;&nbsp; Setting</p>
                    <p className="mt-2 d-flex"> <IoPowerSharp className="mt-1" />&nbsp;&nbsp; Logout</p>
                </div>
                <Outlet />






                {/* brefore it */}




            </div>



        </div>


        {/*  */}


    </>
}
export default AdminProfile;