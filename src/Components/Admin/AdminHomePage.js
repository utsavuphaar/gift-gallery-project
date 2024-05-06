import React, { useEffect, useState } from 'react'
import "./adminstyle.css";
import { FaUserGroup } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { IoCubeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { LiaStopwatchSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosGift } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../DataSlice/ProductSlice';
import ApiUrl from '../ApiUrl';
import axios from 'axios';
function AdminHomePage() {
    const [categoryList,setCategoryList] = useState(0);
    const [userList, setUserList] = useState(0);
    const {productList,category} = useSelector(store=>store.Product);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProduct());
        axios.get(ApiUrl.getCategories)
            .then(response => {
                setCategoryList(response.data.categories.length);
            }).catch(err => {
                console.log(err);
            })
        axios.get("http://localhost:3000/user/userList").then(response => {
            setUserList(response.data.users.length);
        }).catch(err => {
            console.log(err);
        })
    },[])

    return (
        <div className="col-md-9 d-flex" style={{backgroundColor:"#FAF7FC"}}> 
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
                                <p className="fs-4">{userList}</p>
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
                                    <div className="col-md-9 ">Total Product </div>
                                    <div className="col-md-3">
                                        <IoCubeOutline className="fs-3 cobeicon " /></div>

                                </div>
                                <br></br>
                                <p className="fs-4">{productList.length}</p>
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
                                    <div className="col-md-9 ">Total Category </div>
                                    <div className="col-md-3">
                                        <GoGraph className="fs-3 graphicon" /></div>
                                </div>
                                <br></br>
                                <p className="fs-4">{categoryList}</p>
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
               
                    <div className="row m-0 w-100 p-0">
                        <div className="col-md-12 m-0 p-0 w-100">
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
    )
}

export default AdminHomePage