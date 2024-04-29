import axios from "axios";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";


const AddProduct = () => {

    const [productdata, setproductdata] = useState({})
    // const [image1,setimage1] = useState("");
    // const [image2,setimage2] = useState("");
    // const [image3,setimage3] = useState("");


    let handleData = (e) => {
        let { name, value } = e.target;
        console.log(name);
        setproductdata({ ...productdata, [name]: value });
        console.log(productdata);
    }

    let handleImageArray = (e) => {
        // setproductdata();
        setproductdata({ ...productdata, images: [...[productdata.imageArray], e.target.value] });
        console.log(productdata)

    }

    const handleExcelUpload = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("excelFile", file);
        
        // You can send the file to the server for processing
        axios.post("http://localhost:3000/product/addProduct", formData)
            .then(() => {
                alert("Products added successfully");
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong");
            });
    };


    const additem = () => {
        axios.post("http://localhost:3000/product/addSingleProduct", { productdata })
            .then(() => {
                alert("Item added successfully")
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong")
            })

    }

    return <>
            <div className="container-fluid " style={{backgroundColor:"#FAF7FC", width: "75%"}}>
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
                            <label htmlFor="excelUpload" style={{ fontSize: "13px" }} className="p-2 btn btn-outline-dark w-50">
                                UPLOAD EXCEL
                                <IoCloudUploadOutline className="ms-3 fs-5" />
                            </label>
                            <input
                                id="excelUpload"
                                type="file"
                                style={{ display: "none" }}
                                onChange={handleExcelUpload} // Attach the event listener
                            />
                        </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <img className="w-75 mt-5 text-danger" src={productdata.thumbnail} style={{ height:"350px" ,backgroundColor: "#C8C8C8", borderRadius: "10px", boxShadow: "0px 0px 2px 2px #C8C8C8" }} />
                    
                    <div className="w-75 p-3 mt-4 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#FAFAFA", boxShadow: "0px 0px 2px 2px gainsboro", borderRadius: "5px" }}>
                        <img className="" style={{ width: "70px", height: "70px", borderRadius: "5px", backgroundColor: "#C8C8C8" }} />
                        <div className="w-75 h-100 ms-3 d-flex flex-column justify-content-between">
                            <label className="" style={{fontSize:"13px"}}>Image-1 URL</label>
                            <input type="text" onChange={(e) => handleImageArray(e)} name="image1" className="border-dark form-control" />
                        </div>
                    </div>
                    <div className="w-75 p-3 mt-4 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#FAFAFA", boxShadow: "0px 0px 2px 2px gainsboro", borderRadius: "5px" }}>
                        <img className="" style={{ width: "70px", height: "70px", borderRadius: "5px", backgroundColor: "#C8C8C8" }} />
                        <div className="w-75 h-100 ms-3  d-flex flex-column justify-content-between">
                            <label className="" style={{fontSize:"13px"}}>Image-2 URL</label>
                            <input type="text" onChange={(e) => handleImageArray(e)} name="image2" className="border-dark form-control" />
                        </div>
                    </div>
                    <div className="w-75 p-3 mt-4 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#FAFAFA" , boxShadow: "0px 0px 2px 2px gainsboro", borderRadius: "5px" }}>
                        <img className="" style={{ width: "70px", height: "70px", borderRadius: "5px", backgroundColor: "#C8C8C8" }} />
                        <div className="w-75 h-100 ms-3  d-flex flex-column justify-content-between">
                            <label className="" style={{fontSize:"13px"}}>Image-3 URL</label>
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