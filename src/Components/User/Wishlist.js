import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addProductIntoCart, deleteProductFromWishList, fetchWishList, removeProductFromWishlist } from '../../DataSlice/ProductSlice';
import { BsCart2 } from "react-icons/bs";
import { BsCurrencyRupee } from 'react-icons/bs';
import Footer from './footer';
import Header from './Header';
import '../Style.css'
import { Link } from 'react-router-dom';
function Wishlist() {
  const userId = localStorage.getItem("userId")
  const { wishList } = useSelector(store => store.Product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWishList({ userId }));
  }, [])

  let products = Object.values(wishList.flatMap(user => user.Wishlists.map(wishlist => wishlist.product)));
  const removeItemFromWishlist = (index, productId) => {
    if (window.confirm("Are your sure ?")) {
      // dispatch(removeProductFromWishlist(index))
      products.slice(index, 1);
      dispatch(deleteProductFromWishList({ userId, productId }));
    }
  }

  const addToCart = (productId) => {
    dispatch(addProductIntoCart({ userId, productId, quantity: 1 }));
  }


  return (
    <>
      <Header />
      <div className='container mt-3 mb-3 d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <div style={{ width: "30px", height: "40px", borderRadius: "5px", backgroundColor: "#0D6EFD" }}></div>
          <h3 className='p-2 fs-4 yourwishlist'>Your WishList ({wishList.length})</h3>
        </div>
        <button style={{ fontSize: "14px" }} className='btn btn-primary'><BsCart2 className='me-2 fs-5' />Move All To cart </button>
      </div>
      {products.length != 0 ? (
        <section className='container-fluid d-flex justify-content-center' id='wishlist-section'>
          <div className='row container-fluid mb-4'>
            {/* {products.map((product, index) =>
              <div key={index} className='container bg-white border rounded m-1' id='wishlist-component'>
                <img width="230px" height="280px" src={product.thumbnail} alt='image' />
                <h6><BsCurrencyRupee className='d-inline' />{product.price}</h6>
                <p className='text-secondary m-1'>{(product.description).slice(0, 50)}</p>
                <button onClick={() => removeItemFromWishlist(index, product.id)} className='btn btn-outline-primary'>Remove</button> &nbsp;
              </div>)} */}
            {products.map((product, index) => <div className='col-lg-3 mt-3  d-flex justify-content-center align-items-center'>
              <div className='container bg-white d-flex flex-column align-items-center justify-content-center' style={{ width: "300px" }}>
                <img style={{ borderRadius: "10px" }} className='mt-3' width="260px" height="220px" src={product.thumbnail} alt='image' />
                <div className='w-100 d-flex mt-2  justify-content-between  align-items-center'>
                  <h6 style={{ paddingLeft: "10px" }}>{(product.title).slice(0, 20)}</h6>
                  <h6 style={{ paddingRight: "10px" }}>₹{product.price}</h6>
                </div>
                <div style={{ paddingLeft: "10px", fontSize: "12px", height: "35px" }} className='w-100'>{(product.description).slice(0, 50)}</div>
                <div className='w-100 d-flex justify-content-around mt-2 mb-3'>
                  <button style={{ fontSize: "12px" }} onClick={() => removeItemFromWishlist(index, product.id)} className='btn btn-outline-primary'>Remove</button>
                  <button style={{ fontSize: "12px" }} onClick={()=> addToCart(product.id)} className='btn btn-primary'><BsCart2 className='fs-5' /> Move to Cart</button>
                </div>
              </div>
            </div>)}
          </div>
        </section>
      ) : (<div className='container-fluid d-flex p-4 justify-content-center align-content-center border' id='blackCart'>
        <div>
          <img width={'450px'} height={'300px'} src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
          <h6 className='text-center'>Empyt Wishlist!</h6>
          <p className='text-center m-2'>Add item to it now</p>
          <center> <Link to="/"><button className='btn btn-primary' style={{ width: '200px' }}>Shop Now</button> </Link></center>
        </div>
      </div>)}
      <Footer />
    </>
  )
}

export default Wishlist