import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCartItems } from "../../DataSlice/ProductSlice";
export default function CartItems(){
    const {cartItems} = useSelector(store=>store.Product);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCartItems(1));
    },[])
    console.log(cartItems)
    return<>
        <h5>cartitems</h5>
        <section id="main-cart" >
            <div id="cart-left">
                {cartItems.map((cart,index)=><div style={{width:'70%'}}>


                </div>)}
            </div>
            <div id="cart-right">

            </div>
        </section>
    </>
}