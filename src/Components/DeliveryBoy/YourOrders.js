import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import ApiUrl from '../ApiUrl';
import { useNavigate } from 'react-router-dom';

const initialState = {
    orderList: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_ORDERS':
            return { ...state, orderList: action.payload };
        default:
            return state;
    }
}

function YourOrders() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const deliveryBoy = localStorage.getItem("deliveryBoy");
        const parsedDeliveryBoy = JSON.parse(deliveryBoy);
        if (parsedDeliveryBoy && parsedDeliveryBoy) {
            axios.post(ApiUrl.getParticularDeliveryBoyOrder, { deliveryBoyId: parsedDeliveryBoy })
                .then(response => {
                    const data = response.data.result;
                    console.log(data)
                    const filteredData = [];

                    data.forEach(item => {
                        if (item.orderItem.Order.status !== 'Delivered') {
                            filteredData.push(item);
                        }
                    });
                    console.log("Data fetched from API:", data); // Debugging log
                    dispatch({ type: 'SET_ORDERS', payload: filteredData });
                })
                .catch(err => {
                    console.log("Error fetching data:", err);
                });
        }
    }, []);

    const handleProductClick = (order) => {
        navigate("/orderData", { state: order });
    };


    return (
        <div className='container-fluid w-75 p-2' style={{ backgroundColor: "#f7fafc" }}>
            <div className='container p-2 mt-4 row' style={{ overflow: "auto", height: '550px' }}>
                <table className='table border col-md-10 position-relative' style={{ maxHeight: '80vh', overflow: "scroll" }}>
                    <thead className='position-sticky' style={{ top: '-10px' }}>
                        <tr className='bg-primary text-center text-white'>
                            <th>Sr.No.</th>
                            <th>Product Thumbnail</th>
                            <th>Product Title</th>
                            <th>Product Price</th>
                            <th>Order Date</th>
                            <th>User Name</th>
                        </tr>
                    </thead>
                    <tbody className='bg-light'>
                        {state.orderList.map((order, index) => (
                            <tr key={index} className='text-center'>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={order.orderItem.product.thumbnail} onClick={() => handleProductClick(order)} style={{ cursor: 'pointer' }} width="100px" height="100px" alt="Product" />
                                </td>
                                <td>{order.orderItem.product.title.slice(0, 20)}</td>
                                <td>{order.orderItem.product.price}</td>
                                <td>{new Date(order.orderItem.Order.orderDate).toLocaleDateString()}</td>
                                <td>{order.orderItem.Order.user.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default YourOrders;
