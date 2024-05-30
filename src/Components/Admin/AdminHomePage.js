import React, { useEffect, useState } from 'react'
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
    const [categoryList, setCategoryList] = useState(0);
    const [userList, setUserList] = useState(0);
    const { productList, category } = useSelector(store => store.Product);
    const [orderlist, setorderlist] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
        fetchorder()
        axios.get(process.env.REACT_APP_GET_CATEGORIES)
            .then(response => {
                setCategoryList(response.data.categories.length);
            }).catch(err => {
                console.log(err);
            })
        axios.get(process.env.REACT_APP_USER_LIST).then(response => {
            setUserList(response.data.users.length);
        }).catch(err => {
            console.log(err);
        })
    }, [])


    const fetchorder = () => {

        axios.get(ApiUrl.getOrderdetail)
            .then((response) => {
                console.log(response.data.result);
                setorderlist(response.data.result);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="col-md-9 d-flex" style={{ backgroundColor: "#FAF7FC" }}>
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
                                <div className="w-100 table-responsive custom-scroll1 table-responsive-sm position-relative">
                                    <table className="table w-100 table-hover position-relative">
                                        <thead className="position-sticky">
                                            <tr className="table-info">
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Date-time</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Location</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderlist.map((order, index) => (
                                                <tr key={index}>
                                                    {order.orderItems.map((data, ind) => (
                                                        <td key={ind}>
                                                            <img src={data.product.thumbnail} alt="abc" width="100px" height="100px" />
                                                        </td>
                                                    ))}
                                                    {order.orderItems.map((data, ind) => (
                                                        <td key={ind}>
                                                            {data.product.title}
                                                        </td>
                                                    ))}
                                                    <td>{order.orderDate}</td>
                                                    {order.orderItems.map((data, ind) => (
                                                        <td key={ind}>
                                                            {data.product.price}
                                                        </td>
                                                    ))}
                                                    <td>{order.address}</td>
                                                    <td>{order.status}</td>
                                                </tr>
                                            ))}
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