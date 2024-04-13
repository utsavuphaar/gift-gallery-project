import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios";
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import { addProductIntoWishlist, deleteAllProductsFromCart, deleteProductFromCart, removeAllProductsFromCart, removeProductFromCart } from "../../DataSlice/ProductSlice";
import { BsCurrencyRupee } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
export default () => {
    let userId = localStorage.getItem("userId");
    const [cartItemList, setCartItemList] = useState([]);
    let [totalamount, settotalamount] = useState(0);
    let [discountPrice, setDiscountPrice] = useState(0)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        // let userId = sessionStorage.getItem("user_id");
        axios.get(`http://localhost:3000/cart/list/${userId}/`)
            .then(response => {
                for (let product of response.data.data) {
                    product.qty = 1;
                    totalamount = totalamount + product["products.price"];
                    discountPrice = discountPrice + (((parseInt(product["products.discountPercentage"] * product["products.price"]) / 100).toFixed(2)) * 1);
                    cartItemList.push(product);
                }
                // console.log(response.data.data.products["cartItem.quantity"])
                setCartItemList([...cartItemList]);
                setDiscountPrice(discountPrice)
                settotalamount(totalamount);
            }).catch(err => {
                console.log(err);
            })
    }, []);


    const updateQty = (index, value) => {
        let product = cartItemList[index];
        product.qty = value;
        totalamount = 0;
        discountPrice = 0;
        cartItemList.splice(index, 1);
        cartItemList.splice(index, 0, product);
        setCartItemList([...cartItemList]);
        for (let productItem of cartItemList) {
            totalamount = totalamount + productItem["products.price"] * productItem.qty;
            discountPrice = discountPrice + ((((parseInt(product["products.discountPercentage"] * product["products.price"]) / 100)) * productItem.qty).toFixed(2) * 1);
        }
        setDiscountPrice(discountPrice)
        settotalamount(totalamount);
    }

    const removeItemFromCart = (index, productId) => {
        if (window.confirm("Are your sure ?")) {
            cartItemList.splice(index, 1);
            dispatch(removeProductFromCart(index))
            dispatch(deleteProductFromCart({ userId, productId }));
        }
    }
    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId, productId }))
    }

    const removeAllItems = () => {
        if (window.confirm('Remove all items?')) {
            setCartItemList([]);
            dispatch(removeAllProductsFromCart());
            dispatch(deleteAllProductsFromCart({ userId }));
        }
    }
    return <>
        <ToastContainer />
        <Header />
        <h5 className="container">My Cart ({cartItemList.length})</h5>
        {
            cartItemList.length != 0 ? (
                <section className="row border m-0 p-0">
                    <div className="col-md-9 border d-flex justify-content-center align-content-center flex-column">
                        {cartItemList.map((product, index) =>
                            <div className="row container border m-0 p-0">
                                <div className="col-md-3 float-end center-div justify-content-end align-items-end d-flex">
                                    <img className="m-auto" src={product["products.thumbnail"]} width="150px" height="150px" alt="abc" />
                                </div>
                                <div className="col-md-6">
                                    <h6 className="mt-2 text-uppercase">{product["products.title"]}</h6>
                                    <p >{(product['products.description']).slice(0, 100)}</p>
                                    <div>
                                    <button onClick={() => removeItemFromCart(index, product["products.id"])} className="m-2 btn btn-outline-danger">Remove</button>
                                    &nbsp;<button onClick={() => addToWishlist(product['products.id'])} className="btn btn-outline-primary m-2">Save For Later</button>
                                    </div>
                                </div>
                                <div className="col-md-3 flex-column d-flex justify-content-center align-content-center">
                                    <center>
                                    <div>
                                        <span className="mt-2 fs-4"><BsCurrencyRupee />{product["products.price"]} </span>&nbsp;
                                        <span className="fs-5 text-success">({product["products.discountPercentage"]} % off )</span>
                                    </div>  
                                    <h5 className="mt-2">
                                        Qty. :  <input type="number" min={1} onClick={(event) => updateQty(index, event.target.value)} defaultValue={1} style={{ width: '50px', height: '30px' }} />
                                    </h5>
                                    </center>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-3 p-0 m-0">
                        <div className="container border d-flex flex-column p-4" >
                            <h5 className="text-center fw-bold mb-2">Order summary</h5>
                            <label className="fs-5">Item purchased : <span className="text-success">{cartItemList.length}</span></label>
                            <label className="fs-5">Sub Total : {totalamount}</label>
                            <label className="fs-5">Discount : {discountPrice.toFixed(2)}</label><hr />
                            <h4 className="fw-bold">Total Bill : <BsCurrencyRupee />{totalamount - discountPrice}</h4>
                            <button onClick={()=>navigate("/checkout",{state:cartItemList})} className="btn btn-success mt-3 fw-bold" >Checkout</button>
                            
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