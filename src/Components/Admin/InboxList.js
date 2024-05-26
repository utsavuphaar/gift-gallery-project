import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import ApiUrl from '../ApiUrl';
function InboxList() {
    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-user") {
            return { ...state, inboxList: action.payload };
        }
        else if (action.type === "delete-product") {
            if (window.confirm("Are you sure ?")) {
                state.productList.splice(action.payload, 1
                );
            }
            return { ...state };
        }
    }, { userList: [] });

    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_CONTACT_US)
            .then(response => {
                console.log(response.data.admin);
                dispatch({ type: "set-user", payload: response.data.admin });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            {/* <section className="row mt-5 mb-5" style={{ width: "75%", margin: "0 auto" }}>
            <div className='' >
              <h1 className='text-primary text-center mt-5 mb-1'>Contact Us Information</h1>
            </div>

                <div className="col-md-12 mb-5" style={{ overflowY: "auto", maxHeight: "450px" }}>
                    <table className="table p-2 text-center border position-relative mb-5">
                        <thead className="position-sticky bg-primary text-white" style={{ top: "-5px", zIndex: "1" }}>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {state.inboxList?.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.message}</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section> */}

            <div className="responsive-table-container">
                <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                    <h1 className="mt-3 text-primary">Inbox List</h1>
                    <select className='col-md-3 cursor-pointer border float-end rounded p-1 border-primary' style={{outline:"none"}}>
                            <option>All message</option>
                            <option>New message</option>
                        </select>
                </div>
                <div className="custom-scroll">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                        {state.inboxList?.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.message}</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default InboxList;