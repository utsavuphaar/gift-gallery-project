import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import ApiUrl from '../ApiUrl';
import './adminstyle.css'
function Userlist() {
    const [state, dispatch] = useReducer((state, action) => {
        if (action.type === "set-product") {
            return { ...state, userList: action.payload };
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
        axios.get(process.env.REACT_APP_USER_LIST)
            .then(response => {
                dispatch({ type: "set-product", payload: response.data.users });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            {/* <section className="row mt-5" style={{ width: "75%", margin: "0 auto" }}>
            <div className='' >
                    <div className="col-md-6 mt-2">
                        <select style={{paddingLeft:"10px",border:"1px solid blue"}} className="form-select cursor-pointer rounded p-1">
                            <option>All User</option>
                            <option>New User</option>
                        </select>
                    </div>
            </div>
                
                <div className="col-md-12" style={{ overflowY: "auto", maxHeight: "450px" }}>
                    <table className="table p-2 text-center border position-relative">
                        <thead className="position-sticky bg-primary text-white" style={{ top: "-5px", zIndex: "1" }}>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {state.userList?.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section> */}

            <div className="responsive-table-container">
                <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                    <h1 className="mt-3 text-primary">User List</h1>
                    <select style={{ paddingLeft: "10px", border: "1px solid blue",outline:"none" }} className=" cursor-pointer rounded p-1">
                        <option>All User</option>
                        <option>New User</option>
                    </select>
                </div>
                <div className="custom-scroll">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.userList?.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Userlist