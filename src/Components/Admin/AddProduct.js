import axios from "axios";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { Zoom } from 'react-toastify';
import Swal from "sweetalert2";


const AddProduct = () => {
    const [file, setFile] = useState(null);
    const [productdata, setproductdata] = useState({})
    // const [image1,setimage1] = useState("");
    // const [image2,setimage2] = useState("");
    // const [image3,setimage3] = useState("");


    let handleData = (e) => {
        let { name, value } = e.target;
        console.log(name);
        setproductdata({ ...productdata, [name]: value });
    }

    let handleImageArray = (e) => {
        // setproductdata();
        setproductdata({ ...productdata, images: [...[productdata.imageArray], e.target.value] });
        console.log(productdata)

    }

    const handleUpload = async () => {
        if (!file) {
            // alert('Please select a file.');
            toast.info("Please select a file", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
            return;
        }

        try {
            const formData = new FormData();
            formData.append('excelFile', file);

            await axios.post('http://localhost:3000/product/uploadExcelSheet', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            Swal.fire({
                position: "center",
                icon: "success",
                title: "File Uploaded Successfully",
                showConfirmButton: false,
                timer: 3000
            });
        } catch (error) {
            console.error('Error uploading file:', error);
            // alert('Error uploading file.');
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error Uploading file ",
            });
        }
    };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            setFile(selectedFile);
        } else {
            // alert('Please select an Excel file.');
            toast.info("Please select an Excel file", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    };


  const additem = () => {
    // Validate each field
    // if (!productdata.title || !productdata.description || !productdata.categoryName || !productdata.brand || !productdata.price || !productdata.stock || !productdata.rating || !productdata.discountPercentage || !productdata.thumbnail || !productdata.image1 || !productdata.image2 || !productdata.image3) {
    //     alert('Please fill in all fields.');
    //     toast.info("Please fill all fields ", {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         transition: Zoom,
    //     });
    //     return;
    // }

    console.log(productdata);

    // If all fields are filled, proceed to send data to the server
    axios.post("http://localhost:3000/product/addSingleProduct", { productdata })
        .then(() => {
            // alert("Item added successfully");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 3000
            });
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
};

    return <>
        <div className="container-fluid " style={{ backgroundColor: "#FAF7FC", width: "75%" }}>
            <div className="row ">
                <div className="col-md-6  d-flex flex-column align-items-center justify-content-start form">
                    <h3 className="mt-4 fs-3 ">Product Details</h3>
                    <div className="w-100 ">
                        <label className="mt-4 ">Gift Title Name</label>
                        <input type="text" onChange={(e) => handleData(e)} name="title" className="mt-2 border-dark form-control" />
                    </div>
                    <div className="w-100 ">
                        <label className="mt-4 ">Description</label>
                        <textarea type="text" onChange={(e) => handleData(e)} name="description" className="mt-2 border-dark form-control" rows={5} />
                    </div>
                    <div className="w-100 ">
                        <label className="mt-4 ">Category</label>
                        <input type="text" onChange={(e) => handleData(e)} name="categoryName" className="mt-2 border-dark form-control" />
                    </div>
                    <div className="w-100 ">
                        <label className="mt-4 ">Brand Name</label>
                        <input type="text" onChange={(e) => handleData(e)} name="brand" className="mt-2 border-dark form-control" />
                    </div>
                    <div className="w-100 row  d-flex justify-content-between align-items-center">
                        <div className="col-md-6">
                            <label className="mt-4 ">Reguler Price</label>
                            <input type="number" onChange={(e) => handleData(e)} name="price" className="mt-2 border-dark form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="mt-4   ">Stock</label>
                            <input type="number" onChange={(e) => handleData(e)} name="stock" className="mt-2 border-dark form-control" />
                        </div>
                    </div>
                    <div className="w-100 row ">
                        <div className="col-md-6">
                            <label className="mt-4 ">Rating</label>
                            <input type="number" onChange={(e) => handleData(e)} name="rating" className="mt-2 border-dark form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="mt-4 ">Discount</label>
                            <input type="number" onChange={(e) => handleData(e)} name="discountPercentage" className="mt-2 border-dark form-control" />
                        </div>
                    </div>
                    <div className="w-100 ">
                        <label className="mt-4 ">Thumbnail</label>
                        <input type="text" onChange={(e) => handleData(e)} name="thumbnail" className="mt-2 border-dark form-control" />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center" style={{ marginBottom: "50px", marginTop: "50px" }}>
                        {/* File upload input for Excel */}
                        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
                        <button className="btn btn-primary" onClick={handleUpload} width="200px">Upload File</button>
                    </div>
                    
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <img className="w-75 mt-5 text-danger" src={productdata.thumbnail} style={{ height: "350px", backgroundColor: "#C8C8C8", borderRadius: "10px", boxShadow: "0px 0px 2px 2px #C8C8C8" }} />

                    <div className="w-75 p-3 mt-4 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#FAFAFA", boxShadow: "0px 0px 2px 2px gainsboro", borderRadius: "5px" }}>
                        <img className="" style={{ width: "70px", height: "70px", borderRadius: "5px", backgroundColor: "#C8C8C8" }} />
                        <div className="w-75 h-100 ms-3 d-flex flex-column justify-content-between">
                            <label className="" style={{ fontSize: "13px" }}>Image-1 URL</label>
                            <input type="text" onChange={(e) => handleImageArray(e)} name="image1" className="border-dark form-control" />
                        </div>
                    </div>
                    <div className="w-75 p-3 mt-4 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#FAFAFA", boxShadow: "0px 0px 2px 2px gainsboro", borderRadius: "5px" }}>
                        <img className="" style={{ width: "70px", height: "70px", borderRadius: "5px", backgroundColor: "#C8C8C8" }} />
                        <div className="w-75 h-100 ms-3  d-flex flex-column justify-content-between">
                            <label className="" style={{ fontSize: "13px" }}>Image-2 URL</label>
                            <input type="text" onChange={(e) => handleImageArray(e)} name="image2" className="border-dark form-control" />
                        </div>
                    </div>
                    <div className="w-75 p-3 mt-4 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#FAFAFA", boxShadow: "0px 0px 2px 2px gainsboro", borderRadius: "5px" }}>
                        <img className="" style={{ width: "70px", height: "70px", borderRadius: "5px", backgroundColor: "#C8C8C8" }} />
                        <div className="w-75 h-100 ms-3  d-flex flex-column justify-content-between">
                            <label className="" style={{ fontSize: "13px" }}>Image-3 URL</label>
                            <input type="text" onChange={(e) => handleImageArray(e)} name="image3" className="border-dark form-control" />
                        </div>
                    </div>


                    <div className="w-100 d-flex mt-4 mb-4 align-items-center justify-content-around ">
                        <button style={{ fontSize: "13px" }} onClick={() => additem()} className="w-25 btn btn-dark">Save</button>
                        <button style={{ fontSize: "13px" }} className="w-25 btn btn-primary">Delete</button>
                        <button style={{ fontSize: "13px" }} className="w-25 btn btn-outline-dark">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default AddProduct;