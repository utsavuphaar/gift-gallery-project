import { BsCart2 } from "react-icons/bs";
import { FaRegGrinBeam, FaAmazonPay } from "react-icons/fa";
import { PiAddressBook } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineCancel, MdFavoriteBorder } from "react-icons/md";
import { IoIosPower } from "react-icons/io";
import userImg from "./Images/user.png";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const UserProfile = () => {
    const [disabled, setDisabled] = useState(true);
    const [disabledEntity, setDisabledEntity] = useState(true);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    let email = user.email;

    const logout = () => {
        if (user) localStorage.clear();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged Out",
            showConfirmButton: false,
            timer: 1500,
        });
        navigate("/signup");
    };

    const changePassword = () => {
        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Passwords do not match",
                showConfirmButton: true,
            });
            return;
        }

        axios
            .post(process.env.REACT_APP_UPDATE_PASSWORD, {
                email,
                password: oldPassword,
                newPassword: newPassword,
            })
            .then((res) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Password Updated",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setDisabled(true);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: err.response.data.message,
                    showConfirmButton: true,
                });
                setDisabled(true);
            });
    };

    const enablePassword = () => {
        setDisabled(!disabled);
    };

    const enableEntity = () => {
        setDisabledEntity(!disabledEntity);
    };

    return (
        <>
            <Header />
            <section className="container-fluid" style={{ backgroundColor: "#F7FAFC" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 mt-2 d-flex">
                        <div className="card p-4 w-100" style={{ backgroundColor: "white" }}>
                            <div className="d-flex align-items-center">
                                <img src={userImg} className="rounded-circle" style={{ width: '140px', height: '100px' }} alt="User" />
                                <div className="mt-3">
                                    <h6>Hello,</h6>
                                    <h5 className="text-primary">{user.name}</h5>
                                </div>
                            </div>
                            <div className="mt-4 container p-3">
                                <h6 className="fw-bold">Manage My Account</h6>
                                <ul className="list-unstyled">
                                    <li style={{ cursor: "pointer" }} className="mt-2"><FaRegGrinBeam className="me-1" />My Profile</li>
                                    <li style={{ cursor: "pointer" }} className="mt-2"><PiAddressBook className="me-1" />Address Book</li>
                                    <li style={{ cursor: "pointer" }} className="mt-2"><FaAmazonPay className="me-1" />My Payment Option</li>
                                </ul>
                                <h6 className="mt-4 fw-bold">My Orders</h6>
                                <ul className="list-unstyled">
                                    <li style={{ cursor: "pointer" }} className="mt-2"><GiReturnArrow className="me-1" />Delivered</li>
                                    <li style={{ cursor: "pointer" }} className="mt-2"><GiReturnArrow className="me-1" />My Returns</li>
                                    <li style={{ cursor: "pointer" }} className="mt-2"><MdOutlineCancel className="me-1" />My Cancellations</li>
                                    <li style={{ cursor: "pointer" }} className="mt-2"><MdOutlineCancel className="me-1" />On the way</li>
                                </ul>
                                <h6 className="mt-4 fw-bold">Other</h6>
                                <ul className="list-unstyled">
                                    <li style={{ cursor: "pointer" }} className="mt-2" onClick={() => navigate('/wishlist')}><MdFavoriteBorder className="me-1" />My Wishlist</li>
                                    <li style={{ cursor: "pointer" }} className="mt-2" onClick={() => navigate('/cart')}><BsCart2 className="me-1" />My Cart</li>
                                </ul>
                                <p onClick={logout} className="mt-4 text-primary" style={{ cursor: 'pointer' }}><IoIosPower className="me-1" />Logout</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12 mt-2 d-flex">
                        <div className="card p-4 w-100" style={{ backgroundColor: "white" }}>
                            <h5 className="fw-bold mb-4">Edit Your Profile <FiEdit onClick={enableEntity} className="float-end text-primary" style={{ cursor: 'pointer' }} /></h5>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">First Name*</label>
                                    <input defaultValue={user.name.split(" ")[0]} type="text" disabled={disabledEntity} className="form-control" id="firstName" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name*</label>
                                    <input defaultValue={user.name.split(" ")[1]} type="text" disabled={disabledEntity} className="form-control" id="lastName" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email*</label>
                                    <input defaultValue={user.email} type="email" disabled={disabledEntity} className="form-control" id="email" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="address" className="form-label">Contact*</label>
                                    <input defaultValue={user.contact} type="text" disabled={disabledEntity} className="form-control" id="address" required />
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary" type="button">Save Changes</button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h5 className="fw-bold">Password Changes <FiEdit onClick={enablePassword} className="float-end text-primary" style={{ cursor: 'pointer' }} /></h5>
                                <div className="row g-4">
                                    <div className="col-md-12">
                                        <input value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} disabled={disabled} type="password" className="form-control" id="oldPassword" placeholder="Current Password" required />
                                    </div>
                                    <div className="col-md-12">
                                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} disabled={disabled} type="password" className="form-control" id="newPassword" placeholder="New Password" required />
                                    </div>
                                    <div className="col-md-12">
                                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={disabled} type="password" className="form-control" id="confirmPassword" placeholder="Confirm New Password" required />
                                    </div>
                                    <div className="col-md-12">
                                        <button onClick={changePassword} className="btn btn-primary" type="button">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default UserProfile;
