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
    const addToCart = (productId)=>{
        dispatch(addProductIntoCart({userId:1,productId:productId}))
    }
    const addToWishlist = (productId)=>{
        dispatch(addProductIntoWishlist({userId:2,productId}))
    }

    

    return <>
    <Link to="/cartitems"><button className="btn btn-primary">CartItems</button></Link>&nbsp;
    <Link to="/wishlist"  ><button className="btn btn-warning">Wishlist</button></Link>
        <div className="container-fluid">
            <div className="container border p-2 d-flex flex-wrap justify-content-around align-items-center">
                {productList.products?.map((product, index) => <div key={index} id="product-box" className="m-2 p-2 border d-flex flex-column rounded position-relative">
                    <img width="100%" height="250px" src={product.thumbnail} />
                    <div className="d-flex position-absolute" id="buttons">
                        <div>
                            <CiHeart onClick={()=>addToWishlist(product.id)} style={{ width: '25px', height: '25px' }} />
                        </div>
                        <div onClick={()=>addToCart(product.id)}><PiShoppingCartSimpleThin style={{ width: '20px', height: '20px' }} /></div>
                        <div><AiOutlineEye onClick={() => viewMore(product)} style={{ width: '20px', height: '20px' }} /></div>
                    </div>
                    <h6 className="mt-4">{product.title.split(" ").slice(0, 3).join(' ')}</h6>
                    <div>
                        <BiRupee /><span style={{ fontWeight: 'bold' }}>{product.price} </span><span className="text-secondary"><del>{product.price}</del></span>
                        &nbsp; <span className="text-success p-1" style={{ backgroundColor: 'lightgrey', fontSize: '14px', borderRadius: '5px', fontWeight: 'bold' }}>({product.discountPercentage} % off )</span>
                        &nbsp;&nbsp; <span className="bg-success p-1 text-light"><AiFillStar style={{ color: 'white' }} /> {product.rating}</span>
                    </div>
                </div>)}
            </div>
        </div>
    </>
}