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


    return (<>

        {state.orderList.length == 0 ? (
             <div className="responsive-table-container d-flex justify-content-center align-content-center" style={{ marginTop: "100px" }}>
            <img width="800px" height="550px" src='https://cdn.dribbble.com/users/9620200/screenshots/17987839/illustration_ui-03_4x.jpg' />
            </div >
        ) : (

        <div className="responsive-table-container " style={{ marginTop: "100px" }}>
            <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                <h1 className="mt-3 text-primary">My Orders </h1>
                {/* <button className="btn btn-primary">Add Category</button> */}
            </div>
            <div className="custom-scroll">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Product Thumbnail</th>
                            <th>Product Title</th>
                            <th>Product Price</th>
                            <th>Order Date</th>
                            <th>User Name</th>
                        </tr>
                    </thead>
                    <tbody>
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
    )
}
    </>
    );
}

export default YourOrders;
