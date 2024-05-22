import axios from "axios"
import { useEffect, useState } from "react"
import URL from '../ApiUrl'
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import './adminstyle.css'

export default function CategoryList() {

    const [categorylist, setcategorylist] = useState([]);

    useEffect(() => {
        axios.get(URL.getCategories)
            .then((response) => {
                console.log(response.data.categories);
                setcategorylist(response.data.categories);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return <>
        <div className="responsive-table-container">
            <div className="w-100 p-4 d-flex justify-content-between align-items-center">
            <h1 className="mt-3 text-primary">Category List</h1>
            <button className="btn btn-primary">Add Category</button>
            </div>
            <div className="custom-scroll">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Category Name</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorylist?.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.categoryName}</td>
                                <td>
                                    <FaRegEdit className="fs-4 text-primary" />
                                </td>
                                <td>
                                    <AiFillDelete className="fs-4 text-secondary" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}