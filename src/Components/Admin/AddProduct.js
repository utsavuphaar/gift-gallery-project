// import "./adminstyle.css";
// import "./addproduct.css";
import { IoIosGift } from "react-icons/io";

import { IoMagnet, IoNotificationsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoChevronDownCircleSharp } from "react-icons/io5";
import { AiOutlineTable } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

const AddProduct = () => {
    return <>

        <div className="conatainer-fluid w-75 row">
            <div className="col-md-12 border newform ">
                <div className="container newform">
                    <div className="row border">
                        <div className="col-md-12">
                            <spna className="font-weight-bold fs-5"> Products Details  </spna>
                        </div>
                    </div>
                    <div className="col-md-12 border d-flex mt-3">
                        <div className="col-md-6">
                            <div className="container  border first text-align-center">
                                <div className="row">

                                    <div className='col-md-12 mt-2'>
                                        <label>Get Title Name</label><br />
                                        <input type='text' className='form-control' /></div>

                                    <div className="col-md-12 mt-2">
                                        <label for="exampleFormControlTextarea1" className="form-label fs-6">Description</label><br />
                                        <textarea className="form-control-lg ml-4 border" style={{ width: "35vw" }} id="exampleFormControlTextarea1 " rows="3"></textarea>
                                    </div>

                                    <div className="col-md-12 mt-2 " >

                                        <label className="form-label fs-6"  >Category</label>
                                        <select className="form-select form-select-lg mb-3  form-select-padding-y " style={{ width: "35vw" }} size aria-label=".form-select-lg example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12 mt-2">
                                        <label>Get Title Name</label><br />
                                        <input type='text' className='form-control' />
                                    </div>

                                    <div className="col-md-12 mt-2">
                                        <tr>
                                            <th>
                                                <label>Sku</label><br />
                                                <input type='text' className='form-control' style={{ width: "37vh" }} />

                                            </th>
                                            <th>

                                                <label>Stock Quntity </label><br />
                                                <input type='text' className='form-control' style={{ width: "37vh" }} />


                                            </th>

                                        </tr>



                                    </div>

                                    <tr>
                                        <th>

                                            <label>Regolar Price</label><br />
                                            <input type='text' className='form-control' style={{ width: "37vh" }} />


                                        </th>

                                        <th>
                                            <label>Sales Price</label><br />
                                            <input type='text' className='form-control' style={{ width: "37vh" }} />

                                        </th>

                                    </tr>


                                    <div className="col-md-12 mt-2">

                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label fs-6">Tag</label><br />
                                            <textarea className="form-control-lg ml-4 border" style={{ width: "35vw" }} id="exampleFormControlTextarea1 " rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-2">

                                        <button type="button" className="btn btn-primary btn-lg d-flex">Upload via sheet &nbsp;<IoCloudUploadOutline className="mt-2" /></button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* bot each other frunt */}
                        <div className="col-md-6">

                            <div className="container border-info first text-align-center">
                                <div className="row">
                                    <div className='col-md-12 mt-2'>
                                        <input type='text' className='form-control' style={{ height: "30vh" }} />
                                    </div>


                                    <div className='col-md-12 mt-2 '>
                                        <label>Product Gallery</label><br />

                                        <input type='text' className='form-control border-info' style={{ height: "20vh" }} />
                                        {/* <img src="..." class="img-fluid" alt="..."/> */}
                                    </div>

                                    <label>Product Gallery</label><br /><br />
                                    <br></br>
                                    <div className='col-md-12 mt-2 border  d-flex'>

                                        <div className="col-md-4 ">
                                            <img src="s2.jpg" className="rounded float-start mt-2 " alt="nhi mili" style={{ width: "10vw" }} />
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <span>Product.thumbnail.jpg</span>
                                            <input type="range" className="form-range" id="customRange1" style={{ width: "20vh" }}></input>
                                        </div>
                                        <div className="col-md-2 mt-3">
                                            <span className="fs-4"> <IoIosCheckmarkCircle /></span>

                                        </div>

                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div className='col-md-12 mt-2 border  d-flex'>

                                        <div className="col-md-4 ">
                                            {/* <input type='text'  className='form-control border-info' style={{height:"20vh"}}/> */}
                                            <img src="s2.jpg" className="rounded float-start mt-2 " alt="nhi mili" style={{ width: "10vw" }} />
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <span>Product.thumbnail.jpg</span>
                                            <input type="range" className="form-range" id="customRange1" style={{ width: "20vh" }}></input>
                                        </div>


                                        <div className="col-md-2 mt-3">
                                            <span className="fs-4"> <IoIosCheckmarkCircle /></span>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </>
}
export default AddProduct;