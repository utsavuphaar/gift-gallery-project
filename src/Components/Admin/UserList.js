import axios from 'axios';
import React, { useEffect, useReducer } from 'react'
import ApiUrl from '../ApiUrl';
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
        axios.get(ApiUrl.userList)
            .then(response => {
                dispatch({ type: "set-product", payload: response.data.users });
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <section className='row mt-5' style={{ width: '80%' }}>
                <div className='mb-4 ms-2 form-group row'>
                    <label className='fs-4'>User :
                        <input className='col-md-3 ms-2 fs-6 p-2 rounded border' type='search' placeholder='search user..' />
                        <select className='col-md-3 fs-5 cursor-pointer border float-end rounded p-1'>
                            <option>All User</option>
                            <option>New User</option>
                        </select>
                    </label>
                </div>
                <div className='col-md-12' style={{overflowY:"auto",height:'450px'}}>
                    <table className='table p-2 text-center border position-relative' style={{ maxHeight: '70vh', overflow: "scroll" }}>
                        <thead className='position-sticky ' style={{top:'-5px'}}>
                            <tr className='bg-primary text-white text-center'>
                                <th>Sr. No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {state.userList?.map((user, index) => <tr key={index} >
                                <td className='text-center'>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>
                                    <button className='btn'>Edit</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Userlist