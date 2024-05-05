import React from 'react'
import "./adminstyle.css";
import { AiOutlineStock } from "react-icons/ai";
import { IoCubeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { LiaStopwatchSolid } from "react-icons/lia";
import { FaCrown } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
function DashBoard() {
  return (
    <>
     <div className="col-md-10 bg-light d-flex mt-5">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-3 mt-2 ">
                                <div className="card"  style={{'background-image': 'linear-gradient(to right, rgb(208,214,261), rgb(249,221,209))'}} >
                                    <div className="card-body  ">
                                        <div className="row d-flex">
                                            <div className="col-md-3 ">
                                            <FaCrown  className="fs-2 usericon"  /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-3 text-center">20,</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-2"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-10 text-center">
                                             <span style={{fontSize:"20px"}}>Completed Deliveries</span>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-2">
                                <div className="card"  style={{'background-image': 'linear-gradient(to right, rgb(246,208,160), rgb(247,193,199)'}} >
                                    <div className="card-body">
                                        <div className="row d-flex">
                                            <div className="col-md-3">
                                                <IoCubeOutline className="fs-3  usericon" /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-3 text-center">40,689</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-2"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-10 text-center">
                                            <span style={{fontSize:"20px"}}>Pending Deliveries</span>
                                           
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-2">
                                <div className="card" style={{'background-image': 'linear-gradient(to right, rgb(208,214,261), rgb(249,221,209))'}}>
                                    <div className="card-body">
                                        <div className="row d-flex">
                                            <div className="col-md-3">
                                                <GoGraph className="fs-3 graphicon usericon" /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-4 text-center">40,684</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-2"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-10 text-center">
                                                <span style={{fontSize:"20px"}}>Total Collected</span>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mt-2">
                                <div className="card" style={{'background-image': 'linear-gradient(to right, rgb(208,214,261), rgb(249,221,209))'}}>
                                    <div className="card-body">
                                        <div className="row d-flex">
                                            <div className="col-md-3">
                                                <LiaStopwatchSolid className="fs-3 watchicon usericon" /></div>

                                        </div>
                                        <br></br>
                                        <p className="fs-4 text-center">40,689</p>
                                        <br></br>
                                        <div className="row d-flex">
                                            <div className="col-md-1">
                                                <p className="autline mt-2"><AiOutlineStock /></p>
                                            </div>
                                            <div className="col-md-9 text-center">
                                            <span style={{fontSize:"20px"}} > Total Earnings </span>

                                               
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>



                        </div>

                        {/* new start last */}
                        
                        <div className="container w-100 p-0 "  >
                           <div className="row mt-4 w-100  ">
                            
                                 <div className="col-md-6 bg-primry d-flex mx-auto justify-content-center rounded" style={{boxShadow:"5px 5px 20px #bebebe",height:"200px"}} >
                                 <div className='mt-1 mb-2 icon mt-4'>
                                    <IoIosGift className='ms-3  fs-4 text-light mt-3 ' />
                                  </div>
                                <p className=' fs-4 ms-2 mt-4 name'>
                                 
                                 20 Delivery is cancelled
                                 <br></br>
                                 <hr></hr>
                                 <p style={{color:"grey"}} className="text-center fs-5">10 minute estimited</p>
                               </p> 
                                </div>
                            </div>
                        </div> 


                    </div>
                </div>
    </>
  )
}

export default DashBoard