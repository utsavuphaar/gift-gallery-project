import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useRef } from 'react';
import { useReducer, useState, useEffect } from "react";
import URL from "../ApiUrl.js";
import Swal from "sweetalert2";

const AddCategory = () => {



      const [category, setCategoryName] = useState("");
      const navigate = useNavigate();

      const additem = () => {
            // alert(category)
            if(category.length!=0){
                axios.post(URL.addCategory, { categoryName: category })
                      .then(() => {
                            // alert("Item added successfully");
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Category added successfully",
                                showConfirmButton: false,
                                timer: 3000
                            });
                            navigate(-1)
                      })
                      .catch(err => {
                            console.log(err);
                            // alert("Something went wrong");
                            Swal.fire({
                                  icon: "error",
                                  title: "Error",
                                  text: "Something went wrong ",
                            });
    
                      });
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Please enter something ",
              });
            }

      }


      return <>
            {/* <div className="responsive-table-container w-50">
                  <div className="w-100 p-4 d-flex justify-content-between align-items-center">
                        <h3 className="mt-3 text-primary">Add Category</h3>
                  </div>
                  <div className="">

                        <label>
                              Category Name :
                        </label>
                        <br></br>
                        <input className="ml-5" type="text" onChange={(e) => setCategoryName(e.target.value)} />

                  </div>
                        <button className="btn btn-outline-primary mt-5 mb-3" onClick={additem}>Cancel</button>&nbsp;&nbsp;
                        <button className="btn btn-primary mt-5 mb-3" onClick={additem}>Submit</button>

            </div> */}
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="responsive-table-container w-100 w-md-50 p-4 border rounded">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="text-primary">Add Category</h3>
    </div>
    <div className="mb-3">
      <label htmlFor="categoryName" className="form-label">Category Name:</label>
      <input 
        id="categoryName" 
        className="form-control" 
        type="text" 
        onChange={(e) => setCategoryName(e.target.value)} 
      />
    </div>
    <div className="d-flex justify-content-end">
      <button 
        className="btn btn-outline-primary me-2" 
        onClick={additem}
      >
        Cancel
      </button>
      <button 
        className="btn btn-primary" 
        onClick={additem}
      >
        Submit
      </button>
    </div>
  </div>
</div>
      </>
}

export default AddCategory;