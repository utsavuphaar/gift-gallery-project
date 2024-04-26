import axios from 'axios';
import './RateProduct.css';
import $, { event } from 'jquery';
import ApiUrl from '../ApiUrl';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RateProduct = () => {
      const {state} =useLocation();
      const navigate = useNavigate();
      const productId = state;
      const userId = localStorage.getItem("userId")
      const [rating, setRating] = useState(0);
      const [ratingMessage, setRatingMessage] = useState('');
      const [selectedTags, setSelectedTags] = useState([]);
      const [complimentVisible, setComplimentVisible] = useState(false);
      const [submitClicked, setSubmitClicked] = useState(false);
      const [comment,setComment] = useState("")
      const handleStarMouseover = (event) => {
            const onStar = parseInt(event.target.getAttribute('data-value'), 10);
            const stars = Array.from(event.target.parentNode.children);

            stars.forEach((star, index) => {
                  if (index < onStar) {
                        star.classList.add('hover');
                  } else {
                        star.classList.remove('hover');
                  }
            });
      };

      const handleStarMouseout = (event) => {
            Array.from(event.target.parentNode.children).forEach((star) => {
                  star.classList.remove('hover');
            });
      };

      const handleStarClick = (event) => {
            const onStar = parseInt(event.target.getAttribute('data-value'), 10);
            const stars = Array.from(event.target.parentNode.children);
            const message = event.target.getAttribute('data-message');

            setRating(onStar);
            setRatingMessage(message);

            const updatedTags = [];
            for (let i = 1; i <= 5; i++) {
                  if (i <= onStar) updatedTags.push(i);
            }
            setSelectedTags(updatedTags);

            $('.rating_msg').val(message);
            $('.starrate .ratevalue').val(onStar);

            $('.fa-smile-wink').show();
            $('.button-box .done').show();
            
            
            // if (onStar === 5) {
            //       $('.button-box .done').removeAttr('disabled');
            // } else {
            //       $('.button-box .done').attr('disabled', 'false');
            // }

            stars.forEach((star, index) => {
                  if (index < onStar) {
                        star.classList.add('selected');
                  } else {
                        star.classList.remove('selected');
                  }
            });

            $('[data-tag-set]').hide();
            $('[data-tag-set=' + onStar + ']').show();
      };

      const handleTagClick = (event) => {
            const choosedTagsLength = event.target.parentNode.querySelectorAll('input').length + 1;

            if (selectedTags.includes(parseInt(event.target.getAttribute('data-tag-set'), 10))) {
                  const updatedTags = selectedTags.filter((tag) => tag !== parseInt(event.target.getAttribute('data-tag-set'), 10));
                  setSelectedTags(updatedTags);
                  if (updatedTags.length <= 0) $('.button-box .done').attr('disabled', 'true');
            } else {
                  setSelectedTags([...selectedTags, parseInt(event.target.getAttribute('data-tag-set'), 10)]);
                  $('.button-box .done').removeAttr('disabled');
            }

            console.log(choosedTagsLength);
      };

      const handleComplimentClick = () => {
            setComplimentVisible(true);
      };

      const handleSubmitClick = () => {
            setSubmitClicked(true);
            axios.post(ApiUrl.addReview,{userId,productId,rating,comment}).then(res=>{
                  // console.log("")
                  alert("success")
                  navigate("/")
            }).catch(err=>{
                  console.log(err)
                  alert("error")
            });
      };

      return <>
            <div className="wrapper">
                  <div className="master mt-5">
                        <h1>Review And rating</h1>
                        <h2>How was your experience about our product?</h2>

                        <div className="rating-component">
                              <div className="status-msg">
                                    <label>
                                          <input className="rating_msg" type="hidden" name="rating_msg" value="" />
                                    </label>
                              </div>
                              <div className="stars-box fs-1 m-1">
                                    <i className={`star fa fa-star m-2 ${rating >= 1 ? 'selected' : ''}`} title="1 star" data-message="Poor" data-value="1" onMouseOver={handleStarMouseover} onMouseOut={handleStarMouseout} onClick={handleStarClick}></i>
                                    <i className={`star fa fa-star m-2 ${rating >= 2 ? 'selected' : ''}`} title="2 stars" data-message="Too bad" data-value="2" onMouseOver={handleStarMouseover} onMouseOut={handleStarMouseout} onClick={handleStarClick}></i>
                                    <i className={`star fa fa-star m-2 ${rating >= 3 ? 'selected' : ''}`} title="3 stars" data-message="Average quality" data-value="3" onMouseOver={handleStarMouseover} onMouseOut={handleStarMouseout} onClick={handleStarClick}></i>
                                    <i className={`star fa fa-star m-2 ${rating >= 4 ? 'selected' : ''}`} title="4 stars" data-message="Nice" data-value="4" onMouseOver={handleStarMouseover} onMouseOut={handleStarMouseout} onClick={handleStarClick}></i>
                                    <i className={`star fa fa-star m-2 ${rating >= 5 ? 'selected' : ''}`} title="5 stars" data-message="Very good quality" data-value="5" onMouseOver={handleStarMouseover} onMouseOut={handleStarMouseout} onClick={handleStarClick}></i>
                              </div>
                              <div className="starrate">
                                    <label>
                                          <input className="ratevalue" type="hidden" name="rate_value" value="" />
                                    </label>
                              </div>
                        </div>

                        <div className="feedback-tags">
                              {[1, 2, 3, 4, 5].map((tag) => (
                                    <div className="tags-container" data-tag-set={tag} key={tag} onClick={handleTagClick}>
                                          <div className="question-tag">Why was your experience {tag === 5 ? 'good' : tag === 3 ? 'average rating' : 'so bad'}?</div>
                                    </div>
                              ))}
                              <div className="tags-container" data-tag-set="5" onClick={handleComplimentClick}>
                                    <div className="make-compliment">
                                          <div className="compliment-container">
                                                Give a compliment
                                                <i className="far fa-smile-wink"></i>
                                          </div>
                                    </div>
                              </div>

                              <div className="tags-box">
                                    <input type="text" onChange={(event)=>setComment(event.target.value)} id='rating-box' className="form-control p-2" name="comment"   placeholder="please enter your review" />
                                    <input type="hidden" name="product_id" value="{$products->id}" />
                              </div>
                        </div>

                        <div className="button-box">
                              <input type="submit" className="done mt-2 btn btn-success"  value="Add review" onClick={handleSubmitClick} />
                        </div>

                        <div className="submited-box">
                              {submitClicked && (
                                    <>
                                          <div className="loader"></div>
                                          <div className="success-message">Thank you!</div>
                                    </>
                              )}
                        </div>
                  </div>
            </div>
      </>
};

export default RateProduct;