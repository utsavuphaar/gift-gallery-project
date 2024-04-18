import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteProductFromWishList, fetchWishList, removeProductFromWishlist } from '../../DataSlice/ProductSlice';
import { BsCart2 } from "react-icons/bs";
import { BsCurrencyRupee } from 'react-icons/bs';
import Footer from './footer';
import Header from './Header';
import { Link } from 'react-router-dom';
function Wishlist() {
  const userId = localStorage.getItem("userId")
  const {wishList} = useSelector(store=>store.Product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchWishList({userId}));
  },[])

  let products =  Object.values(wishList.flatMap(user => user.Wishlists.map(wishlist => wishlist.product)));
  const removeItemFromWishlist = (index, productId) => {
    if (window.confirm("Are your sure ?")) {
        // dispatch(removeProductFromWishlist(index))
        products.slice(index,1);
        dispatch(deleteProductFromWishList({ userId, productId }));
    }
}
  return (
    <>
    <Header/>
    <div className='container p-4 fs-4'>Wishlist ({products.length})</div>
    {products.length!=0?(
    <section id='wishlist-section'>
      <div className='d-flex flex-wrap container mb-4'>
      {products.map((product,index)=>
      <div key={index} className='container bg-white border rounded m-1' id='wishlist-component'>
          <img width="230px" height="280px" src={product.thumbnail} alt='image'/>
          <h6><BsCurrencyRupee className='d-inline'/>{product.price}</h6>
          <p className='text-secondary m-1'>{(product.description).slice(0,50)}</p>
          <button onClick={()=>removeItemFromWishlist(index,product.id)} className='btn btn-outline-primary'>Remove</button> &nbsp;
          <button className='btn btn-primary'><BsCart2 className='d-inline mb-2'/> Move to Cart</button>
      </div>)}
      </div>
    </section>
    ):(<div className='container-fluid d-flex p-4 justify-content-center align-content-center border' id='blackCart'>
    <div>
        <img width={'450px'} height={'300px'} src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
        <h6 className='text-center'>Empyt Wishlist!</h6>
        <p className='text-center m-2'>Add item to it now</p>
        <center> <Link to="/"><button className='btn btn-primary' style={{ width: '200px' }}>Shop Now</button> </Link></center>
    </div>
</div>)}
        <Footer/>
    </>
  )
}

export default Wishlist