import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteProductFromWishList, fetchWishList, removeProductFromWishlist } from '../../DataSlice/ProductSlice';
import { BsCart2 } from "react-icons/bs";
import { BsCurrencyRupee } from 'react-icons/bs';
function Wishlist() {
  const {wishList} = useSelector(store=>store.Product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchWishList({userId:2}));
  },[])

  let products =  Object.values(wishList.flatMap(user => user.Wishlists.map(wishlist => wishlist.product)));
  const removeItemFromWishlist = (index, productId) => {
    if (window.confirm("Are your sure ?")) {
        // dispatch(removeProductFromWishlist(index))
        products.slice(index,1);
        dispatch(deleteProductFromWishList({ userId: 2, productId }));
    }
}
  return (
    <section id='wishlist-section'>
      <div className='container p-4 fs-3'>Wishlist ({products.length})</div>
      <div className='d-flex flex-wrap container'>
      {products.map((product,index)=>
      <div key={index} className='container bg-white border rounded m-1' id='wishlist-component'>
          <img width="230px" height="280px" src={product.thumbnail} alt='image'/>
          <h6><BsCurrencyRupee/>{product.price}</h6>
          <p className='text-secondary m-1'>{(product.description).slice(0,50)}</p>
          <button onClick={()=>removeItemFromWishlist(index,product.id)} className='btn btn-outline-primary'>Remove</button> &nbsp;
          <button className='btn btn-primary'><BsCart2 className='mb-2'/> Move to Cart</button>
      </div>)}
      </div>
    </section>
  )
}

export default Wishlist