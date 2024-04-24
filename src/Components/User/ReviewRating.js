import './View-Review-Rating.css'
import { FaStar } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
export const ViewReviewRating = () => {

      const navigate = useNavigate();

      return <>
         
            <div className="container mt-3 border">

                  <div className="row">
                        <p className="fw-semibold fs-5 ml-2 mt-3 d-flex  ">Ratings & Reviews
                              <button className=" btn-sm btn-white shadow p-3 mt-2 bg-white rounded rate-product-btn" style={{ width: "150px", height: "40px", marginLeft: "200px" }} onClick={()=>navigate("/rate-product")}>Rate Product</button>
                        </p>
                        <div className='col-md-4 mt-1 '>
                              <p className='fs-2 d-flex'>4.3 &nbsp; <FaStar className='text-success mt-2 fs-3' /></p>

                              <p>1,572 Ratings &<br />
                                    245 Reviews
                              </p>

                        </div>
                        <div className='col-md-8'>
                              <div class="star-value">
                                    <h5 className='d-flex mt-3 fs-6'>5
                                          <FaStar style={{fontSize:"10px"}} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">914</div>
                                    </h5>
                                    <h5 className='d-flex mt-2 fs-6'>4
                                          <FaStar style={{fontSize:"10px"}} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">419</div>
                                    </h5>
                                    <h5 className='d-flex mt-2 fs-6'>3
                                          <FaStar style={{fontSize:"10px"}} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">148</div>
                                    </h5>
                                    <h5 className='d-flex mt-2 fs-6'>2
                                          <FaStar style={{fontSize:"10px"}} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "10%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">40</div>
                                    </h5>
                                    <h6 className='d-flex mt-2 fs-6'>1
                                          <FaStar style={{fontSize:"10px"}} className='text-gray-200 mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "5%", color: "red" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">50</div>
                                    </h6>

                              </div>


                        </div>

                  </div>
                  <div className='row'>
                        <div className='container '>
                              <div className="ms-1" style={{ width: "40px" }}>
                                    <span style={{ fontSize: "14px" }} className="p-1 rounded d-flex justify-content-center align-content-center fw-bold text-white bg-success">
                                          <p>5</p>&nbsp;<AiFillStar className="text-white mt-1  " />
                                    </span><br></br>

                              </div>
                              <p>Nice Product</p>
                              <p style={{ fontSize: "10px", color: "gray" }}>Abhishek Singh, Mar 2023</p>
                        </div>
                  </div>
                  &nbsp;
                  <div className='row'>
                        <div className='container '>
                              <div className="ms-1" style={{ width: "40px" }}>
                                    <span style={{ fontSize: "14px" }} className="p-1 rounded d-flex justify-content-center align-content-center fw-bold text-white bg-success">
                                          <p>4.2</p>&nbsp;<AiFillStar className="text-white mt-1  " />
                                    </span><br></br>

                              </div>
                              <p>Best Product in this range</p>
                              <p style={{ fontSize: "10px", color: "gray" }}>Priya Sharma, Jan 2022</p>
                        </div>
                  </div>
                 
            </div>

      </>
}
export default ViewReviewRating;