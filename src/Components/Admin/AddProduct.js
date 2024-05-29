import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Zoom } from 'react-toastify';
import Swal from "sweetalert2";

    const AddProduct = () => {
        const [file, setFile] = useState(null);
        const [productdata, setProductData] = useState({});
        const [thumbnail, setThumbnail] = useState(null);
        const [images, setImages] = useState([null, null, null]);
        const [thumbnailUrl, setThumbnailUrl] = useState('');
        const [imagePreviews, setImagePreviews] = useState([null, null, null]);
    
        const handleData = (e) => {
            let { name, value } = e.target;
            setProductData({ ...productdata, [name]: value });
        };
    
        const handleImageArray = (index, e) => {
            const files = [...images];
            files[index] = e.target.files[0];
            setImages(files);
            
            const reader = new FileReader();
            reader.onload = () => {
                const previews = [...imagePreviews];
                previews[index] = reader.result;
                setImagePreviews(previews);
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    
        const handleThumbnailChange = (e) => {
            const selectedFile = e.target.files[0];
            if (selectedFile && selectedFile.type.startsWith('image/')) {
                setThumbnail(selectedFile);
                const reader = new FileReader();
                reader.onload = () => {
                    setThumbnailUrl(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            } else {
                toast.info("Please select an image file", {
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

    const handleUpload = async () => {
        if (!file) {
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

            await axios.post(process.env.REACT_APP_ADD_EXCEL_SHEET, formData, {
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
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error Uploading file",
            });
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            setFile(selectedFile);
        } else {
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

    
    //     const selectedFile = e.target.files[0];
    //     if (selectedFile && selectedFile.type.startsWith('image/')) {
    //         setThumbnail(selectedFile);
    //         setThumbnailUrl(URL.createObjectURL(selectedFile));
    //     } else {
    //         toast.info("Please select an image file", {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             transition: Zoom,
    //         });
    //     }
    // };

    const additem = () => {
        const formData = new FormData();
        formData.append('productdata', JSON.stringify(productdata));
        formData.append('thumbnail', thumbnail);
        images.forEach((image, index) => {
            if (image) {
                formData.append(`image${index + 1}`, image);
            }
        });

        axios.post(process.env.REACT_APP_ADD_PRODUCT, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                const data = response.data;
                setThumbnailUrl(data.thumbnail);
                setImagePreviews([data.image1, data.image2, data.image3]);

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
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong",
                });
            });
    };

    return (
        <>
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
                                <label className="mt-4 ">Regular Price</label>
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
                            <input type="file" accept="image/*" onChange={handleThumbnailChange} className="mt-2 border-dark form-control" />
                        </div>
                        <div className="w-100 d-flex align-items-center justify-content-center" style={{ marginBottom: "50px", marginTop: "50px" }}>
                            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
                            <button className="btn btn-primary" onClick={handleUpload} width="200px">Upload File</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        {thumbnail && (
                            <img className="w-75 mt-5 text-danger" src={thumbnailUrl || URL.createObjectURL(thumbnail)} style={{ height: "350px", backgroundColor: "#C8C8C8", borderRadius: "10px", boxShadow: "0px 0px 2px 2px #C8C8C8" }} alt="Thumbnail" />
                        )}
                        {[0, 1, 2].map((index) => (
                            <div key={index} className="w-75 p-3 mt-4 d-flex align-items-center justify-content-around" style={{ backgroundColor: "#FAFAFA", boxShadow: "0px 0px 2px 2px gainsboro", borderRadius: "5px" }}>
                                {images[index] && (
                                    <img src={imagePreviews[index] || URL.createObjectURL(images[index])} style={{ width: "70px", height: "70px", borderRadius: "5px", backgroundColor: "#C8C8C8" }} alt={`Image ${index + 1}`} />
                                )}
                                <div className="w-75 h-100 ms-3 d-flex flex-column justify-content-between">
                                    <label className="" style={{ fontSize: "13px" }}>Image-{index + 1} File</label>
                                    <input type="file" accept="image/*" onChange={(e) => handleImageArray(index, e)} className="border-dark form-control" />
                                </div>
                            </div>
                        ))}
                        <div className="w-100 d-flex mt-4 mb-4 align-items-center justify-content-around ">
                            <button style={{ fontSize: "13px" }} onClick={additem} className="w-25 btn btn-dark">Save</button>
                            <button style={{ fontSize: "13px" }} className="w-25 btn btn-primary">Delete</button>
                            <button style={{ fontSize: "13px" }} className="w-25 btn btn-outline-dark">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
