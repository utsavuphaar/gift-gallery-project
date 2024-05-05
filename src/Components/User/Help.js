import Header from "./Header";
import Footer from "./footer";
import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { SiMoneygram } from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";

function Help() {
    return <>
        <Header />

        <div className="border mt-4 p-2 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#232347", maxWidth: "100%" }}>
            <h3 className="text-white mb-2">How can we help?</h3>
            <div className="border mt-2 mb-2 d-flex justify-content-between align-items-center w-100 w-md-50 bg-white" style={{ borderRadius: "50px", height: "40px", maxWidth: "400px" }}>
                <input className="ms-2 flex-grow-1" style={{ border: "none", borderRadius: "50px", outline: "none", paddingLeft: "10px" }} placeholder="Type your question" />
                <CiSearch className="fs-5 me-3" />
            </div>
        </div>


        <div className=" mt-4 p-3 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#D7E6F5", maxWidth: "100%" }}>
            <p style={{ fontSize: "14px" }}>Having problems with an order? Reach out to the seller with a help request</p>
            <button style={{ borderRadius: "50px", fontSize: "13px" }} className=" btn btn-outline-dark">Get help with an order</button>
        </div>

        <hr className="mt-4 bg-light" style={{ maxWidth: "100%" }} />

        <div className="d-flex justify-content-center align-items-center" style={{ maxWidth: "100%" }}>
            <p className="fs-4 text-secondary">Featured articles</p>
        </div>

        <div className="m-0" style={{ maxWidth: "100%" }}>
            <div className="row m-0 p-0 d-flex justify-content-center align-items-center">
                <div className="col-md-3 p-3 ">
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">After You Purchase</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">What's the Status of My Order?</h4>
                    </div>
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">Order Issues & Returns</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">How to Get Help with An Order</h4>
                    </div>
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">Shopping And Gifting</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">How to Purchase an Item On UtsavUphaar</h4>
                    </div>
                </div>
                <div className="col-md-3 p-3 ">
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">Shopping & Gifting</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">How to Contact a Shop</h4>
                    </div>
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">Shopping & Gifting</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">How to Buy an UptavUphaar Gift Card</h4>
                    </div>
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">Searching for Items</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">How to Search for Items and Shops</h4>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-column p-3 ">
                    <div className="mt-4 d-flex flex-column ">
                        <span style={{ fontSize: "12px" }} className="text-secondary">Searching for Items</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">How to Find the Best Items for You </h4>
                    </div>
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">After Your Purchase</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">How Do I Change My Shipping Address</h4>
                    </div>
                    <div className="mt-4 d-flex flex-column">
                        <span style={{ fontSize: "12px" }} className="text-secondary">Buying Safely</span>
                        <h4 style={{ fontSize: "15px" }} className="mt-1">Tips for Buying Safely on UtsavUphaar</h4>
                    </div>
                </div>
                <hr className="w-75 mt-2" />
            </div>
        </div>

        <div className="d-flex mt-2 justify-content-center align-items-center" style={{ maxWidth: "100%" }}>
            <p className="fs-4 text-secondary">Shop on UtsavUphaar</p>
        </div>

        <div className="container " style={{ maxWidth: "100%" }}>
            <div className="row ">
                <div className="col-md-3 mt-3  d-flex justify-content-center ">
                    <TiShoppingCart className="fs-1 w-25 text-dark" />
                    <div className=" d-flex flex-column">
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>Buying on UtsavUphaar</span>
                        <p style={{ fontSize: "13px" }} className="mt-2 text-secondary">Shopping & Gifting <br /> Searching for Items <br /> Buying Safely</p>
                    </div>
                </div>
                <div className="col-md-3 mt-3  d-flex justify-content-center ">
                    <SiMoneygram className="fs-1 w-25 text-dark" />
                    <div className=" d-flex flex-column">
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>Cart & Payment</span>
                        <p style={{ fontSize: "13px" }} className="mt-2 text-secondary">Payment Gift Cards <br /> Coupons & Taxes <br /> Custom Fees Checkout <br />Payment Options</p>
                    </div>
                </div>
                <div className="col-md-3 mt-3  d-flex justify-content-center ">
                    <MdLibraryBooks className="fs-1 w-25 text-dark" />
                    <div className=" d-flex flex-column">
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>Your Orders</span>
                        <p style={{ fontSize: "13px" }} className="mt-2 text-secondary">After You Purchase <br /> Order Issues & Returns</p>
                    </div>
                </div>
                <div className="col-md-3 mt-3 d-flex justify-content-center">
                    <FaUserLarge className="fs-1 w-25 text-dark" />
                    <div className=" d-flex flex-column">
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>Your UtsavUphaar Account</span>
                        <p style={{ fontSize: "13px" }} className="mt-2 text-secondary">Sign In & Password <br /> Account Settings <br />Regional Settings <br />Contacting UtsavUphaar<br />Account Safety & Privacy</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </>
}

export default Help;