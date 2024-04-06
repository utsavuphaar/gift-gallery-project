import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCartItems } from "../../DataSlice/ProductSlice";
import { BsCurrencyRupee } from "react-icons/bs";
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
                {cartItems.map((cart,index)=><div key={index} className="m-2 p-2 d-flex" style={{width:'95%',border:'1px solid red', height:'auto'}}>
                    <div style={{width:'100px',height:'100px',border:'1px solid grey'}} className="m-2">
                        <img width="100px" height="100px" src={cart["products.thumbnail"]}/>
                    </div>
                    <div className="ms-2" style={{width:'70%',height:'auto'}}>
                         <p className="text-uppercase fw-bold m-0">{cart["products.title"]}</p> 
                         <p className="mb-1 text-secondary">{cart["products.description"]}</p>
                         <div>
                            <button className="btn btn-outline-danger">Remove</button>
                            &nbsp;<button className="btn btn-primary">Save For Later</button>
                        </div>  
                    </div>
                    <div style={{width:'100px',height:'100px'}} className="m-2">
                        <p className="fw-bold float-end"><BsCurrencyRupee />{cart["products.price"]}</p>
                    </div>
                </div>)}
                <button className="btn btn-primary">Back To Shop</button>
            </div>
            <div id="cart-right">
                
            </div>
        </section>
    </>
}