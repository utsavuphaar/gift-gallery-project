import React, { useEffect, useReducer } from 'react'

import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { useNavigate } from 'react-router-dom';
function GetOrders() {
    const navigate = useNavigate();
    var deliveryBoy = localStorage.getItem("deliveryBoy");
    deliveryBoy = JSON.parse(deliveryBoy);
    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-order") {
            return { ...state, orderList: action.payload };
        }
        else if (action.type === "delete-product") {
            if (window.confirm("Are you sure ?")) {
                state.productList.splice(action.payload, 1
                );
            }
            return { ...state };
        }
    }, { orderList: [] });

    useEffect(() => {
        axios.get(ApiUrl.viewAllOrders)
            .then(response => {
                console.log(response.data.result)
                dispatch({ type: "set-order", payload: response.data.result });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    let orderList = state.orderList.filter(order => order.status === 'Order Confirmed');
    const getProduct = async (orderItemId, userId,orderId) => {
        // Assuming deliveryBoy is defined somewhere accessible in your code
        // alert(orderItemId + " " + userId + " " + deliveryBoy.id+" "+orderId);
     const result =   await axios.post(ApiUrl.getOrder,{deliveryBoyId:deliveryBoy.id,orderItemId:orderItemId,userId:userId})
        if(result){
            await axios.put(ApiUrl.updateOrderStatus,{id:orderId,status:"Out for delivery"});
            axios.get(ApiUrl.viewAllOrders)
            .then(response => {
                console.log(response.data.result)
                dispatch({ type: "set-order", payload: response.data.result });
            }).catch(err => {
                console.log(err);
            })
            orderList = state.orderList.filter(order => order.status === 'Order Confirmed');
            alert("Order get Successfully...")
        }
    };
    

    return (
        <>
            <div className='container-fluid w-75 p-2' style={{ backgroundColor: "#f7fafc" }}>

                <div className='container p-2 mt-4 row ' style={{ overflow: "auto", height: '550px' }}>
                    <table className='table border  col-md-10 position-relative' style={{ maxHeight: '80vh', overflow: "scroll" }}>
                        <thead className='position-sticky' style={{ top: '-10px' }} >
                            <tr className='bg-primary text-center text-white'>

                                <th>Sr.No.</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Order Date</th>
                                <th>Order Id</th>
                            </tr>
                        </thead>
                        <tbody className='bg-light'>
                            {orderList?.map((order, index) => <tr key={index} className='text-center'>
                                <td>{index + 1}</td>

                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    <img src={data.product.thumbnail} onClick={() => navigate("/orderDetail", { state: order })} style={{ cursor: 'pointer' }} width="100px" height="100px" />
                                </td>)}
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    {data.product.title.slice(0, 30)}
                                </td>)}
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    {data.product.price}
                                </td>)}

                                <td>{order.orderDate}</td>
                                {order?.orderItems.map((data, ind) => <td key={ind}>
                                    <button onClick={() => getProduct(data.id, order.userId,order.id)} className='btn btn-outline-primary'>Get Order</button>
                                </td>)}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default GetOrders;