import React, { useEffect, useReducer } from 'react'

import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
    const getProduct = async (orderItemId, userId, orderId) => {
        const result = await axios.post(ApiUrl.getOrder, { deliveryBoyId: deliveryBoy, orderItemId: orderItemId, userId: userId })
        if (result) {
            await axios.put(ApiUrl.updateOrderStatus, { id: orderId, status: "Out for delivery" });
            axios.get(ApiUrl.viewAllOrders)
                .then(response => {
                    console.log(response.data.result)
                    dispatch({ type: "set-order", payload: response.data.result });
                }).catch(err => {
                    console.log(err);
                })
            orderList = state.orderList.filter(order => order.status === 'Order Confirmed');
            // alert("Order get Successfully...")
            Swal.fire({
                position: "center",
                position: "center",
                icon: "success",
                title: "Order Get Successfully",
                showConfirmButton: false,
                timer: 2000
            });

        }
    };


    return (
        <>
            <div className="responsive-table-container " style={{marginTop:"100px"}}>
                <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                    <h1 className="mt-3 text-primary">Order List</h1>
                    {/* <button className="btn btn-primary">Add Category</button> */}
                </div>
                <div className="custom-scroll">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr.No.</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Order Date</th>
                                <th>Order Id</th>
                            </tr>
                        </thead>
                        <tbody>
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
                                    <button onClick={() => getProduct(data.id, order.userId, order.id)} className='btn btn-outline-primary'>Get Order</button>
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