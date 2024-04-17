import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import { addProductIntoWishlist, deleteAllProductsFromCart, deleteProductFromCart, fetchCartItems, removeAllProductsFromCart, removeProductFromCart, updateQtyOfProductInCart } from "../../DataSlice/ProductSlice";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
export default () => {
    let userId = localStorage.getItem("userId");
    // const [cartItems, setCartItemList] = useState([]);
    let [totalamount, settotalamount] = useState(0);
    let [discountPrice, setDiscountPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cartItems,isLoading} = useSelector(store=>store.Product);

    useEffect(() => {
        dispatch(fetchCartItems(userId));
        totalamount = 0;
        discountPrice = 0;
        for (let productItem of cartItems) {
            totalamount = totalamount + productItem["products.price"] * productItem["products.cartItem.quantity"];
            // alert(productItem["products.cartItem.quantity"])
            discountPrice = discountPrice + ((((parseInt(productItem["products.discountPercentage"] * productItem["products.price"]) / 100)) * productItem["products.cartItem.quantity"]).toFixed(2) * 1);
        }
        setDiscountPrice(discountPrice)
        settotalamount(totalamount);
    }, []);

    const updateQty = (index,productId, quantity) => {
        
        dispatch(updateQtyOfProductInCart({ userId,productId,quantity }));
        let product = cartItems[index];
        totalamount = 0;
        discountPrice = 0;
        for (let productItem of cartItems) {
            totalamount = totalamount + productItem["products.price"] * productItem["products.cartItem.quantity"];
            // alert(productItem["products.cartItem.quantity"])
            discountPrice = discountPrice + ((((parseInt(product["products.discountPercentage"] * product["products.price"]) / 100)) * productItem["products.cartItem.quantity"]).toFixed(2) * 1);
        }
        setDiscountPrice(discountPrice)
        settotalamount(totalamount);
    }

    const removeItemFromCart = (index, productId) => {
        if (window.confirm("Are your sure ?")) {
            // cartItems.splice(index, 1);
            dispatch(deleteProductFromCart({ userId, productId }));
            dispatch(removeProductFromCart(index))
        }
    }
    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId, productId }))
    }

    const removeAllItems = () => {
        if (window.confirm('Remove all items?')) {
            // setCartItemList([]);
            dispatch(removeAllProductsFromCart());
            dispatch(deleteAllProductsFromCart({ userId }));
        }
    }
    return <>
        <ToastContainer />
        <Header />
        <h5 className="container p-4 fs-4">My Cart ({cartItems.length})</h5>
        {      cartItems.length != 0 ? (
                <section className="row border m-0 p-0">
                    <div className="col-md-9 border d-flex justify-content-center align-content-center flex-column">
                        {cartItems.map((product, index) =>
                            <div className="row container mt-2 border m-0 p-0" style={{}}>
                                <div className="col-md-3 float-end center-div justify-content-end align-items-end d-flex">
                                    <img className="m-auto" src={product["products.thumbnail"]} width="150px" height="150px" alt="abc" />
                                </div>
                                <div className="col-md-6">
                                    <h6 className="mt-2 text-uppercase">{product["products.title"]}</h6>
                                    <p style={{fontSize:'14px'}}>{(product['products.description']).slice(0, 100)}</p>
                                    <div>
                                    <button onClick={() => removeItemFromCart(index, product["products.id"])} className="m-2 btn btn-outline-danger">Remove</button>
                                    &nbsp;<button onClick={() => addToWishlist(product['products.id'])} className="btn btn-outline-primary m-2">Save For Later</button>
                                    </div>
                                </div>
                                <div className="col-md-3 flex-column d-flex justify-content-center align-content-center">
                                    <center>
                                    <div className="d-flex fs-6">
                                        <span className="d-flex" style={{fontSize:'15px'}}><BsCurrencyRupee className="mt-1"/>{product["products.price"]} </span>&nbsp;
                                        <span className=" text-primary" style={{fontSize:'12px'}}>({product["products.discountPercentage"]} % off )</span>
                                    </div>  
                                    <h5 className="mt-2" style={{fontSize:'15px'}}>
                                        Qty :  <input className="p-1 rounded" style={{border:'none',outline:'none',width: '50px', height: '30px' }} type="number" min={1} onClick={(event) => updateQty(index,product["products.id"], event.target.value)} defaultValue={product["products.cartItem.quantity"]}  />
                                    </h5>
                                    </center>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-3 p-0 m-0">
                        <div className="container border d-flex flex-column p-4" >
                            <div className="container border p-3" style={{borderRadius:"15px"}}>

                            <h5 className="text-center fw-bold mb-2">Order summary</h5>
                            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                            <div className="container d-flex w-100 justify-content-around align-items-center">
                            <label className="" >Item purchased : </label>
                            <span className="text-success">{cartItems.length}</span>

                            </div>
                            <p className="fs-5 w-100" >Sub Total : {totalamount}</p>
                            <label className="fs-5 w-100">Discount : {discountPrice.toFixed(2)}</label><hr />

                            </div>
                            <hr className="m-2"/>
                            <h4 className="fw-bold fs-4 d-flex">Total Bill : <BsCurrencyRupee />{(totalamount - discountPrice).toFixed(2)}</h4>

                            <button onClick={()=>navigate("/checkout",{state:cartItems})} className="btn btn-primary mt-3 w-100 fw-bold" >Checkout</button>

                            </div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-between p-4 border me-3 mt-3 bg-whit w-75">
                        <Link to="/">
                            <button className="btn m-2 btn-primary"><AiOutlineArrowLeft className="fs-5 me-2" />Back To Shop</button>
                        </Link>
                        <button  onClick={removeAllItems} className="btn m-2 btn-outline-danger">Remove all</button>
                        {/* <button onClick={removeAllItems} className="btn btn-outline-danger" style={{ height: 'auto' }}>Remove all</button> */}
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
            )

        }
        <div className="p-2 ms-2 row d-flex m-2 justify-content-around row container-fluid ">
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
    </>
}