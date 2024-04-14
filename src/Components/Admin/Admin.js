import { MdOutlineWatchLater } from "react-icons/md";
import { LiaTableSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { PiListChecks } from "react-icons/pi";
import { FaTableCellsLarge } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoChevronDownCircleSharp } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { IoCubeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { LiaStopwatchSolid } from "react-icons/lia";
import { IoPowerSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiBox } from "react-icons/bi";
import { IoIosGift } from "react-icons/io";

import "./adminstyle.css";
const AdminProfile = () => {
    return <>
    {/*  complite the top code */}

        <div className="container-fluid run">
            <div className="row">

                <div className="col-md-2">
                    <br></br>
                    <button type="button" className="btn btn-primary btn-lg d-flex"><MdOutlineWatchLater className="mt-1" />&nbsp; Dashbord</button>

                    <span className="d-flex mt-3"> <FaTableCellsLarge className="mt-1" />&nbsp; &nbsp;Product</span>

                    <span className="d-flex mt-3">     <FaRegHeart className="mt-1" />&nbsp; &nbsp;Favorites</span>
                    <span className="d-flex mt-3">     <TiMessages className="mt-1" />&nbsp;&nbsp;Inbox</span>
                    <span className="d-flex mt-3">    <PiListChecks className="mt-1" />&nbsp;&nbsp;Order LIst</span>
                    <span className="d-flex mt-3">    <BiBox className="mt-1" />&nbsp;&nbsp;Product Stock</span>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>PAGES</p>
                    <span className="d-flex mt-3"> <LiaTableSolid className="mt-1 ml-4" />&nbsp;&nbsp;Table</span>
                      <br></br>
                      
                      <hr className="linemar seting1"></hr>
                    <p className="mt-2 d-flex"><IoSettingsOutline className="mt-1 seting" />&nbsp;&nbsp; Setting</p>
                    <p className="mt-2 d-flex"> <IoPowerSharp  className="mt-1" />&nbsp;&nbsp; Logout</p>

                </div>
                {/* block box start    width: 190px;
      height: 254px;
     */}

                <div className="col-md-10 bg-light d-flex mt-5">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-3 mt-2">
                                <div className="card">
                                    <div className="card-body  ">
                                        <div className="row d-flex">
                                            <div className="col-md-9 ">Total User </div>
                                            <div className="col-md-3">
                                                <FaUserGroup className="fs-3 usericon" /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-4">40,689</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-1"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-9">
                                                8.5% Up from yesterday
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-2">
                                <div className="card">
                                    <div className="card-body">
                                        {/* <p>Total Order</p>
                                        <p>10,293</p> */}

                                        <div className="row d-flex">
                                            <div className="col-md-9 ">Total User </div>
                                            <div className="col-md-3">
                                                <IoCubeOutline className="fs-3 cobeicon " /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-4">40,689</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-1"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-9">
                                                8.5% Up from yesterday
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-2">
                                <div className="card">
                                    <div className="card-body">
                                        {/* <span>Total Sales </span>
                                        <p>$89,000</p> */}
                                        <div className="row d-flex">
                                            <div className="col-md-9 ">Total User </div>
                                            <div className="col-md-3">
                                                <GoGraph className="fs-3 graphicon" /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-4">40,689</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-1"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-9">
                                                8.5% Up from yesterday
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-2">
                                <div className="card">
                                    <div className="card-body">
                                        {/* <p>Total Pending</p>
                                        <p>2040</p> */}
                                        <div className="row d-flex">
                                            <div className="col-md-9 ">Total User </div>
                                            <div className="col-md-3">
                                                <LiaStopwatchSolid className="fs-3 watchicon" /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-4">40,689</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-1"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-9">
                                                8.5% Up from yesterday
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* new start last */}
                        <div className="container w-100 p-0">
                            <div className="row mt-4 w-100 p-0">
                                <div className="col-md-12 w-100">
                                    <div className="card">
                                        <div className="card-body  ">
                                            <div className="row d-flex">
                                                <div className="col-md-9 ">Deals Details </div>
                                                <div className="col-md-3">
                                                    <button type="button" className="btn btn-outline-primary  d-flex float-end" >July&nbsp; <RiArrowDropDownLine className=" fs-2" /></button>
                                                    {/* <FaUserGroup className="fs-3 usericon" /> */}
                                                </div>

                                            </div>
                                            <br></br>
                                            <div className="border w-100 table-responsive table-responsive-sm">
                                                <table className="table w-100 table-hover ">
                                                    <thead >
                                                        <tr className="table-info">
                                                            <th scope="col">Product Name</th>
                                                            <th scope="col" >Location</th>
                                                            <th scope="col">Date-time</th>
                                                            <th scope="col">piece</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">

                                                                <div className="col-md-5 d-flex">
                                                                    <img src="watch.webp" className="img-fluid imgwatch"></img>
                                                                    &nbsp;<span className="textcolor " >Apple Watch</span>
                                                                </div>
                                                            </th>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                            <td>@mdo</td>
                                                            <td>  <button type="button" class="btn success">Deliverid</button></td>
                                                      
                                                        </tr>
                                                        <tr>
                                                        <th scope="row">
                                                        <div className="col-md-5 d-flex">
                                                        <img src="watch.webp" className="img-fluid imgwatch"></img>
                                                        &nbsp;<span className="textcolor" >Apple Watch</span>
                                                         </div>
                                                        </th>
                                                        <td>Jacob</td>
                                                        <td>Jacob</td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>  <button type="button" class="btn warning">Pending</button></td>
                                                        </tr>
                                                        <tr>
                                                        {/* scope="row" */}
                                                            <th >
                                                                {/* <img src="watch.webp" className="img-fluid imgwatch"></img> */}
                                                                <div className="col-md-5 d-flex">
                                                                    <img src="watch.webp" className="img-fluid imgwatch"></img>
                                                                    &nbsp;<span className="textcolor" >Apple Watch</span>
                                                                </div>
                                                            
                                                             </th>
                                                            <td>Larry the Bird</td>
                                                            <td>@twitter</td>
                                                            <td>@twitter</td>
                                                            <td>@twitter</td>
                                                            <td>  <button type="button" class="btn danger">Rejected</button></td>
                                                         
                                                           {/* </th> */}
                                                            
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <br></br>
                                            <div className="row d-flex">
                                                <div className="col-md-1">
                                                    <p className="autline mt-1">
                                                    </p>
                                                </div>
                                                <div className="col-md-9">
                                                </div>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>





                {/* brefore it */}




            </div>



        </div>


        {/*  */}


    </>
}
export default AdminProfile;