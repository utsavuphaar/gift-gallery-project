import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import './adminstyle.css';

export default function CategoryList() {
    const [categorylist, setcategorylist] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_CATEGORIES)
            .then((response) => {
                console.log(response.data.categories);
                setcategorylist(response.data.categories);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const deleteCategory = (categoryName, index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to delete the category "${categoryName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(process.env.REACT_APP_DELETE_CATEGORY, { data: { categoryName } })
                    .then((response) => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Category removed successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setcategorylist(prevList => prevList.filter((_, i) => i !== index));
                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Failed to remove category",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
            }
        });
    }

    return (
        <>
            <div className="responsive-table-container">
                <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                    <h1 className="mt-3 text-primary">Category List</h1>
                    <Link to="/admin/AddCategory" className="text-dark dashbord-list" style={{ textDecoration: "none" }}>
                        <button className="btn btn-primary">Add Category</button>
                    </Link>
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
                            {categorylist.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.categoryName}</td>
                                    <td>
                                        <FaRegEdit className="fs-4 text-primary" />
                                    </td>
                                    <td>
                                        <AiFillDelete onClick={() => deleteCategory(user.categoryName, index)} className="fs-4 text-secondary" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
