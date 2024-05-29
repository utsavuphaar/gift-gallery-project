import { useEffect, useRef } from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import { addProductIntoWishlist, deleteAllProductsFromCart, deleteProductFromCart, fetchCartItems, removeAllProductsFromCart, removeProductFromCart, updateQtyOfProductInCart } from "../../DataSlice/ProductSlice";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import '../Style.css';
import Footer from "./footer";
import Swal from "sweetalert2";

export default () => {
    let userId = localStorage.getItem("userId");
    const totalamount = useRef(0);
    const discountPrice = useRef(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems, isLoading } = useSelector(store => store.Product);

    useEffect(() => {
        dispatch(fetchCartItems(userId));
        totalamount.current = 0;
        discountPrice.current = 0;
        for (let product of cartItems) {
            totalamount.current += product["products.price"] * product["products.cartItem.quantity"];
            discountPrice.current += ((parseInt(product["products.discountPercentage"] * product["products.price"] * product["products.cartItem.quantity"]) / 100).toFixed(2)) * 1;
        }
        console.log(totalamount.current);
    }, [cartItems, dispatch, userId]);

    const updateQty = (index, productId, quantity) => {
        dispatch(updateQtyOfProductInCart({ userId, productId, quantity }));
        dispatch(fetchCartItems(userId));
        totalamount.current = 0;
        discountPrice.current = 0;
        for (let productItem of cartItems) {
            totalamount.current += productItem["products.price"] * productItem["products.cartItem.quantity"];
            discountPrice.current += ((((parseInt(productItem["products.discountPercentage"] * productItem["products.price"]) / 100)) * productItem["products.cartItem.quantity"]).toFixed(2)) * 1;
        }
    }

    const removeItemFromCart = (price, index, productId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-3",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You want to delete from cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                totalamount.current -= price;
                dispatch(deleteProductFromCart({ userId, productId }));
                dispatch(removeProductFromCart(index));
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your cart has been deleted.",
                    icon: "success"
                });
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your cart is safe :)",
                    icon: "error"
                });
            }
        });
    }

    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId, productId }));
    }

    const removeAllItems = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-3",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You want to delete from cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeAllProductsFromCart());
                dispatch(deleteAllProductsFromCart({ userId }));
                totalamount.current = 0;
                discountPrice.current = 0;
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your cart has been deleted.",
                    icon: "success"
                });
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your cart is safe :)",
                    icon: "error"
                });
            }
        });
    }

    return (
        <>
            <ToastContainer />
            <Header />
            <div className="container mt-3 mb-3 d-flex align-items-center">
                <div style={{ backgroundColor: "#0D6EFD", height: "40px", borderRadius: "5px", width: "25px" }}></div>
                <span className="ms-2 fs-5">My Cart ({cartItems.length})</span>
            </div>
            {cartItems.length !== 0 ? (
                <section className="row  m-0 p-0">
                    <div className="col-md-9 d-flex justify-content-center align-items-center flex-column">
                        {cartItems.map((product, index) =>
                            <div key={index} className="row w-75 container  mt-2 mb-2 m-0 p-0" style={{ boxShadow: "0px 1px 1px 2px #0D6EFD" }}>
                                <div className="col-md-3  float-end center-div justify-content-center align-items-center d-flex">
                                    <img className="mt-2 mb-2" style={{ borderRadius: "5px" }} id="cart-img" src={product["products.thumbnail"]} width="130px" height="130px" alt="abc" />
                                </div>
                                <div className="col-md-6  d-flex flex-column justify-content-center">
                                    <h6 className="mt-2 text-uppercase">{product["products.title"]}</h6>
                                    <p style={{ fontSize: '14px' }}>{(product['products.description']).slice(0, 100)}</p>
                                    <div>
                                        <button style={{ fontSize: "13px" }} onClick={() => removeItemFromCart((product["products.price"] * product["products.cartItem.quantity"]), index, product["products.id"])} className="m-2 btn btn-outline-primary">Remove</button>
                                        <button style={{ fontSize: "13px" }} onClick={() => addToWishlist(product['products.id'])} className="btn btn-primary m-2">Save For Later</button>
                                    </div>
                                </div>
                                <div className="col-md-3 flex-column d-flex justify-content-center align-items-start">
                                    <center>
                                        <div >
                                            <span className="mt-2 " style={{ fontSize: '15px' }}><BsCurrencyRupee className="d-inline" />{product["products.price"]} </span>&nbsp;
                                            <span className=" text-primary" style={{ fontSize: '12px' }}>({product["products.discountPercentage"]} % off )</span>
                                        </div>
                                        <h5 className="mt-2" style={{ fontSize: '15px' }}>
                                            Qty :  <input className="p-1 rounded" style={{ width: '50px', height: '30px', border: "1px solid blue", outline: 'none' }} type="number" min={1} onClick={(event) => updateQty(index, product["products.id"], event.target.value)} defaultValue={product["products.cartItem.quantity"]} />
                                        </h5>
                                    </center>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-3 p-0 m-0">
                        <div className="container  d-flex flex-column p-4" >
                            <div className="container  p-3" style={{ borderRadius: "10px", boxShadow: "0px 0px 1px 1px gainsboro" }}>
                                <h5 className="text-center fw-bold mb-2">Order summary</h5>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                                    <div className="p-0 container mt-2  d-flex w-100 justify-content-between align-items-center">
                                        <label className="" style={{ fontSize: "14px" }}>Item purchased : </label>
                                        <span className=" text-success">{cartItems.length}</span>
                                    </div>
                                    <div className="p-0 container mt-2  d-flex w-100 justify-content-between align-items-center">
                                        <label className="" style={{ fontSize: "14px" }}>Sub Total : </label>
                                        <span className=" text-success">{totalamount.current}</span>
                                    </div>
                                    <div className="p-0 container mt-2 d-flex w-100 justify-content-between align-items-center">
                                        <label className="" style={{ fontSize: "14px" }}>Discount : </label>
                                        <span className=" text-success">{discountPrice.current.toFixed(2)}</span>
                                    </div>
                                    <div className="p-0 container  mt-2 d-flex w-100 justify-content-between align-items-center">
                                        <hr className="w-100" />
                                    </div>
                                </div>
                                <h4 className="fw-bold mt-2">Total Bill : <BsCurrencyRupee className="d-inline" />{(totalamount.current - discountPrice.current).toFixed(2)}</h4>
                                <button onClick={() => navigate("/checkout", { state: cartItems })} className="btn btn-primary mt-3 w-100 fw-bold">Checkout</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-button d-flex justify-content-center p-2 bg-whit w-100">
                        <Link to="/">
                            <button style={{ fontSize: "13px" }} className="btn m-2 btn-primary"><AiOutlineArrowLeft className="fs-5 d-inline me-2" />Back To Shop</button>
                        </Link>
                        <button style={{ fontSize: "13px" }} onClick={removeAllItems} className="btn m-2 btn-outline-primary">Remove all</button>
                    </div>
                </section>
            ) : (
                <div className='container-fluid d-flex p-4 justify-content-center align-content-center border' id='blackCart'>
                    <div>
                        <img width='450px' height='300px' src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                        <h6 className='text-center'>Your cart is empty!</h6>
                        <p className='text-center m-2'>Add item to it now</p>
                        <center> <Link to="/"><button className='btn btn-primary' style={{ width: '200px' }}>Shop Now</button> </Link></center>
                    </div>
                </div>
            )}
            <div className="p-2 ms-2 row  mb-2 d-flex m-2 justify-content-evenly row container-fluid ">
                <div className="d-flex col-md-4 justify-content-center align-items-center">
                    <div className="icon">
                        <div>
                            <AiFillLock style={{ width: '30px', height: '30px', color: 'grey' }} />
                        </div>
                    </div>
                    <div className="ms-2">
                        <p className="m-0">Secure Payment</p>
                        <p className="text-secondary">Have you ever finally just </p>
                    </div>
                </div>
                <div className="d-flex col-md-4 justify-content-center align-items-center">
                    <div className="icon">
                        <div>
                            <TbMessage style={{ width: '30px', height: '30px', color: 'grey' }} />
                        </div>
                    </div>
                    <div className="ms-2">
                        <p className="m-0">Customer Support</p>
                        <p className="text-secondary">Have you ever finally just </p>
                    </div>
                </div>
                <div className="d-flex col-md-4 justify-content-center align-items-center">
                    <div className="icon">
                        <div>
                            <CiDeliveryTruck style={{ width: '30px', height: '30px', color: 'grey' }} />
                        </div>
                    </div>
                    <div className="ms-2">
                        <p className="m-0">Free delivery</p>
                        <p className="text-secondary">Have you ever finally just </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
