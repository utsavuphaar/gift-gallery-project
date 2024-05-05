import './View-Review-Rating.css'
import { FaStar } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Check } from '@mui/icons-material';
export const ViewReviewRating = () => {
      const [reviews, setReviews] = useState([]);
      const location = useLocation();
      const [avgRating, setAvgRating] = useState(0);
      const navigate = useNavigate();
      const productId = location.state.id;

      useEffect(() => {
            axios.get(`http://localhost:3000/review/viewallreview/${productId}/`)
                  .then(res => {
                        setReviews(res.data.result);
                  })
                  .catch(err => {
                        console.log(err);
                  });
      }, [productId]);

      useEffect(() => {
            let totalRating = 0;
            for (let item of reviews) {
                  totalRating += item.rating;
            }
            const avgRating = totalRating / reviews.length;
            setAvgRating(avgRating);
      }, [reviews]);


      return <>
            <div className="container mt-5 border w-75">
                  <div className="row">
                        <p className="fw-semibold fs-5 ml-2 mt-3 d-flex">Ratings & Reviews  &nbsp;&nbsp;
                              <button className='btn btn-primary border float-end' onClick={() => navigate("/viewmore/rate-product", { state: productId })}> Rate Product</button>
                        </p>
                        <div className='col-md-4 mt-1 '>
                              <p className='fs-2 d-flex'>{avgRating.toFixed(1)}&nbsp; <FaStar className='text-primary mt-2 fs-3' /></p>
                              <p>{reviews.length} Ratings & Reviews
                              </p>
                        </div>
                        <div className='col-md-8'>
                              <div class="star-value">
                                    <h5 className='d-flex mt-3 fs-6'>5
                                          <FaStar style={{ fontSize: "10px" }} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">914</div>
                                    </h5>
                                    <h5 className='d-flex mt-2 fs-6'>4
                                          <FaStar style={{ fontSize: "10px" }} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">419</div>
                                    </h5>
                                    <h5 className='d-flex mt-2 fs-6'>3
                                          <FaStar style={{ fontSize: "10px" }} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">148</div>
                                    </h5>
                                    <h5 className='d-flex mt-2 fs-6'>2
                                          <FaStar style={{ fontSize: "10px" }} className='text-dark mt-1' />&nbsp;
                                          <div class="progress mt-1">
                                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "10%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">40</div>
                                    </h5>
                                    <h5 className='d-flex mt-2 fs-6'>1
                                          <FaStar style={{ fontSize: "10px" }} className='text-gray-200 mt-1' />&nbsp;
                                          <div class="progress mt-1 ms-1">
                                                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "5%", color: "red" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <div class="rating-hit">50</div>
                                    </h5>

                              </div>
                        </div>
                  </div><hr />
                  {reviews.map((data, index) =>
                        <div className='row' key={index}>
                              <div className='col-md-2'>
                                    <p className='bg-success p-1 text-light rounded'><AiFillStar className='mb-1' /> {data.rating}</p>
                              </div>
                              <div className='col-md-9'>
                                    <h6>{data.comment}</h6>
                              </div>
                              <div className='d-flex'>
                                    <p className='text-muted'>{data.user.name} <Check cla /> </p> &nbsp;&nbsp;
                                    <p className='text-muted'>Certified User,</p> &nbsp;&nbsp;
                                    <p className='text-muted float-end'>{data.updatedAt.toString().split("T")[0]}</p>
                              </div>
                        </div>
                  )}
                  {/*                   
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
                  </div> */}

            </div>

      </>
}
export default ViewReviewRating;