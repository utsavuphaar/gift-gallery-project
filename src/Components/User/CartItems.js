import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteAllProductsFromCart, deleteProductFromCart, fetchCartItems, removeAllProductsFromCart, removeProductFromCart } from "../../DataSlice/ProductSlice";
import { AiFillLock } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
export default function CartItems() {
    const { cartItems } = useSelector(store => store.Product);
    let [totalAmt, setTotalAmt] = useState(0)
    let [discountPrice, setDiscountPrice] = useState(0)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCartItems(1));
    }, [])
    const qty = ["Qty: 1", "Qty: 2", "Qty: 3", "Qty: 4", "Qty: 5", "Qty: 6", "Qty: 7", "Qty: 8", "Qty: 9", "Qty: 10"];
    for (let item of cartItems) {
        totalAmt = totalAmt + item["products.price"];
        discountPrice = discountPrice + (((parseInt(item["products.discountPercentage"] * item["products.price"]) / 100).toFixed(2)) * 1)
    }

    const removeItemFromCart = (index, productId) => {
        if (window.confirm("Are your sure ?")) {
            dispatch(removeProductFromCart(index))
            dispatch(deleteProductFromCart({ userId: 1, productId }));
        }
    }

    const removeAllItems = ()=>{
        if (window.confirm('Remove all items?')) {
            dispatch(removeAllProductsFromCart());
            dispatch(deleteAllProductsFromCart({userId:1}));
        }
    }
    return <>

        <h3 className="container-fluid p-4 m-0" style={{ backgroundColor: '#F7FAFC' }}><h5 className="container"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Cart ({cartItems.length}) </h5></h3>
        {cartItems.length != 0 ? (
            <section className="row m-auto container-fluid"  style={{backgroundColor:"#F7FAFC"}}>
                <div id="cart-left" className="col-md-9">
                    {cartItems?.map((cart, index) => <div key={index} className="row p-4 d-flex border" style={{ width: '100%', backgroundColor: 'white', height: 'auto' }}>
                        <div style={{ width: '120px', height: '120px'}} className="col-md-3">
                            <img width="120px" height="120px" src={cart["products.thumbnail"]} />
                        </div>
                        <div className="col-md-6" style={{ width: '70%', height: 'auto',marginLeft:'10px' }}>
                            <p className="text-uppercase fw-bold m-0">{cart["products.title"]}</p>
                            <p className="mb-1 text-secondary">{cart["products.description"].slice(0, 140)}</p>
                            {/* <div className="p-1"> */}
                                <button onClick={() => removeItemFromCart(index, cart["products.id"])} className="m-2 btn btn-outline-danger">Remove</button>
                                &nbsp;&nbsp;<button className="btn btn-outline-primary m-2">Save For Later</button>
                            {/* </div> */}
                        </div>
                        <div style={{ width: '100px', height: '100px' }} className="">
                            <p className="fw-bold"><BsCurrencyRupee />{cart["products.price"]}</p>
                            <select className="btn border">
                                {qty.map((value, index) => <option key={index}>
                                    {value} </option>)}
                            </select>
                        </div>
                    </div>)}
                    <div className="d-flex justify-content-between p-4 border me-3 mt-3 bg-white">
                        <Link to="/">
                            <button className="btn btn-primary"><AiOutlineArrowLeft className="fs-5 me-2" />Back To Shop</button>
                        </Link>
                        <button onClick={removeAllItems} className="btn me-4 btn-outline-danger" style={{ height: '40px' }}>Remove all</button>
                    </div>
                </div>
                <div id="cart-right" className="col-md-3 p-2">
                    <div className="border bg-white" id="cart-right-child1">
                        <div className="d-flex justify-content-between">
                            <div className="p-3 text-secondary">
                                <p>Subtotal:</p>
                                <p>Discount:</p>
                                <p>Tax:</p>
                            </div>
                            <div className="p-3">
                                <p className=""><BsCurrencyRupee />{totalAmt}</p>
                                <p className="text-danger">-<BsCurrencyRupee />{discountPrice.toFixed(2)}</p>
                                <p className="text-success">+<BsCurrencyRupee />100</p>
                            </div>
                        </div>
                        <center>
                            <hr className="m-0" style={{ width: '90%' }} />
                        </center>
                        <div className="d-flex justify-content-between">
                            <h6 className="p-3" >Total</h6>
                            <h6 className="p-3"><BsCurrencyRupee />{(totalAmt - discountPrice).toFixed(2)}</h6>
                        </div>
                        <center>
                          <Link to="/checkout">
                           <button className="btn btn-success m-2" style={{ width: '90%' }}>Checkout</button>
                          </Link> 
                        </center>
                    </div>
                </div>
                <div className="p-2 ms-2 d-flex m-2 justify-content-around row container-fluid ">
                        <div className="d-flex col-md-4" style={{ width: '30%' }}>
                            <div className="icon" >
                                <div>
                                    <AiFillLock style={{ width: '30px', height: '30px', color: 'grey' }} />
                                </div>
                            </div>
                            <div className="ms-2">
                                <p className="m-0">Secure Payment</p>
                                <p className="text-secondary">Have you ever finally just </p>
                            </div>
                        </div>
                        <div className="d-flex col-md-4" style={{ width: '30%' }}>
                            <div className="icon" >
                                <div>
                                    <TbMessage style={{ width: '30px', height: '30px', color: 'grey' }} />
                                </div>
                            </div>
                            <div className="ms-2">
                                <p className="m-0">Customer Support</p>
                                <p className="text-secondary">Have you ever finally just </p>
                            </div>
                        </div>
                        <div className="d-flex col-md-4" style={{ width: '30%' }}>
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
            </section>
        ) : (
            <div className='container-fluid d-flex p-4 justify-content-center align-content-center border' id='blackCart'>
                <div>
                    <img width={'450px'} height={'300px'} src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                    <h6 className='text-center'>Your cart is empty!</h6>
                    <p className='text-center m-2'>Add item to it now</p>
                    <center> <Link to="/"><button className='btn btn-primary' style={{ width: '200px' }}>Shop Now</button> </Link></center>
                </div>
            </div>
        )}
    </>
}