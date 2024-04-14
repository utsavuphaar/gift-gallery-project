import { useDispatch, useSelector } from "react-redux"
import store from "../../Store/store"
import { AiFillStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useEffect } from "react";
import { addProductIntoCart, addProductIntoWishlist, fetchProduct } from "../../DataSlice/ProductSlice";
import { Link, useNavigate } from "react-router-dom";
export default function Product() {
    const dispatch = useDispatch();
    const navigate = useNavigate("")
    const { productList } = useSelector(store => store.Product);

    useEffect(() => {
        console.log("Hello");
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
        <div className="container-fluid border">
            <div className="row p-0 border ">
                <div className="col-lg-3">

                </div>
                <div className="col-lg-9 p-0 border d-flex flex-wrap justify-content-around align-items-center">
                    {productList.products?.map((product, index) => <div className=" mt-2 col-lg-4 d-flex justify-content-center align-items-center">
                        <div style={{ width: "270px" }} className="p-2 m-2 gift-card">

                            <img src={product.thumbnail} style={{ width: "250px", height: "230px", borderRadius: "10px" }} />
                            <div className="w-100">
                                <h6 className=" ms-2 mt-2">{product.title}</h6>
                            </div>
                            <div className="w-100  d-flex justify-content-center align-items-center">
                                <div className="d-flex align-items-center">
                                    <h5 className="">₹{product.price}</h5>
                                    <del style={{ fontSize: '10px' }} className="ms-2 text-secondary">MRP{product.price}</del>
                                    <div className="ms-2 me-2 d-flex align-items-center justify-content-center text-primary" style={{ borderRadius: "5px", width: "60px", height: "20px", fontSize: '10px', backgroundColor: "#C7E1FF" }}>
                                        {product.discountPercentage}% off
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center justify-content-center " >
                                    <div className="d-flex align-items-center justify-content-center ms-2" style={{ width: "50px" }}>
                                        <AiFillStar className="text-primary" />
                                        <span style={{ fontSize: "13px" }} className="fw-bold">{product.rating}</span>


                                    </div>
                                </div>
                            </div>
                            <div className="w-100 mt-1 d-flex justify-content-around align-items-center mb-1" >
                                <button className="btn btn-outline-primary">Move to cart</button>
                                <button className="btn btn-primary">Buy now</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>

    </>
}