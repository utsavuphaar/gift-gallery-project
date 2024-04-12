import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/store"
import { CiHeart } from "react-icons/ci";
import { useEffect } from "react";
import { addProductIntoCart, addProductIntoWishlist, fetchProduct } from "../../DataSlice/ProductSlice";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
export default function Product() {
    const dispatch = useDispatch();
    const navigate = useNavigate("")
    const { productList } = useSelector(store => store.Product);
    useEffect(() => {
        dispatch(fetchProduct());
    }, [])

    const viewMore = (product) => {
        navigate("/viewmore", { state: product })
    }
    const addToCart = (productId) => {
        dispatch(addProductIntoCart({ userId: 1, productId: productId }))
    }
    const addToWishlist = (productId) => {
        dispatch(addProductIntoWishlist({ userId: 2, productId }))
    }

    

    return <>
        {/* <Link to="/cartitems"><button className="btn btn-primary">CartItems</button></Link>&nbsp;
    <Link to="/wishlist"  ><button className="btn btn-warning">Wishlist</button></Link> */}
        <div className="container-fluid border">
            <div className="row p-0">
                <div className="col-md-3 border">

                </div>
                <div className="col-md-9 p-2 d-flex flex-wrap justify-content-around align-items-center">
                    <div className="row productlist">
                        {productList.products?.map((product, index) => <div key={index} id="product-box" className="col-md-4  border position-relative">
                            <img width="100%" height="250px" id="gift" src={product.thumbnail} />


                            <div className="d-flex position-absolute" id="buttons">
                                <div>
                                    <CiHeart onClick={() => addToWishlist(product.id)} style={{ width: '25px', height: '25px' }} />
                                </div>
                                <div onClick={() => addToCart(product.id)}><PiShoppingCartSimpleThin style={{ width: '20px', height: '20px' }} /></div>
                                <div><AiOutlineEye onClick={() => viewMore(product)} style={{ width: '20px', height: '20px' }} /></div>
                            </div>
                            <h6 className="mt-2 fs-5 ms-3">{product.title.split(" ").slice(0, 3).join(' ')}</h6>
                            <div className="p-0 m-0 d-flex justify-content-between">
                                <div className=" col-md-3 col-sm-5 fs-4 d-flex justify-content-center align-items-center" style={{ fontWeight: "600", paddingLeft: "10px", paddingRight: "5px" }}>
                                    ₹ {product.price} <del className="ms-2" style={{ fontSize: '16px', color: 'gray' }}> ₹ {product.price}</del>
                                </div>
                                <div className=" col-md-3 col-sm-4 p-3 d-flex justify-content-center align-items-center ">
                                    <div className=" text-primary p-1" style={{ backgroundColor: ' #A4C9FE', borderRadius: '5px', fontSize: '12px' }}>
                                        {product.discountPercentage}% off

                                    </div>
                                </div>
                                <div className=" col-md-3 col-sm-3 d-flex justify-content-center align-items-center me-2" style={{paddingLeft:"5px",paddingRight:'5px'}} >
                                    <div style={{ borderRadius: "5px",fontSize:"14px" }} className=" text-white bg-primary p-1"><div />
                                      <AiFillStar style={{ color: 'white' }}/> {product.rating}
                                  </div>
                                </div>
                            </div>

                        </div>)}
                    </div>
                    {productList.products?.map((product, index) => <div key={index} id="product-box" className="p-0 border d-flex flex-column rounded position-relative">
                        <img width="100%" height="250px" id="gift" src={product.thumbnail} />


                        <div className="row border p-0 m-0">
                            <div className="col-md-6 ms-3 fs-5 p-0 m-0">
                                ₹ {product.price} <del className="ms-2" style={{fontSize:'16px', color:'gray'}}> ₹ {product.price}</del>
                            </div>
                            <div className=" border col-md-2">
                                    {product.discountPercentage}
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </>
}
// <div className="row border ms-1 p-2 w-100 d-flex justify-content-center align-items-center">
//     <div className="col-md-5 border p-0">
//         <span style={{ fontWeight: 'bold', fontSize:'18px' }} className="ms-3">₹{product.price} </span><span className="text-secondary" style={{fontSize:'12px'}}><del>₹{product.price}</del></span>
//     </div>
//     <div className="col-md-3 border p-0 ">
//         <span className=" ms-2 text-primary p-1" style={{ backgroundColor: 'lightgrey', fontSize: '10px', borderRadius: '5px', fontWeight: 'bold' }}>{product.discountPercentage} % off </span>
//     </div>
//     <div className="col-md-4 border p-0"><div />
//         <span style={{ borderRadius: "5px" }} className="ms-4 bg-primary p-1 text-light"><AiFillStar style={{ color: 'white' }} /> {product.rating}</span>
//     </div>
// </div>