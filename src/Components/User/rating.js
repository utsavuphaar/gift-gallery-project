import React, { useState } from 'react';

// import './RateProduct.css'; // Moved import statement to the top

const RateProduct = () => {
    const [rating, setRating] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);
    const [submitClicked, setSubmitClicked] = useState(false);

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

        setRating(onStar);

        const updatedTags = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= onStar) updatedTags.push(i);
        }
        setSelectedTags(updatedTags);

        stars.forEach((star, index) => {
            if (index < onStar) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    };

    const handleTagClick = (event) => {
        const tagSet = parseInt(event.currentTarget.getAttribute('data-tag-set'), 10);

        if (selectedTags.includes(tagSet)) {
            const updatedTags = selectedTags.filter((tag) => tag !== tagSet);
            setSelectedTags(updatedTags);
        } else {
            setSelectedTags([...selectedTags, tagSet]);
        }
    };

    const handleSubmitClick = () => {
        setSubmitClicked(true);
        // Your submit logic here
    };

    return (
        <div className="wrapper">
            <div className="master mt-5">
                <h1>Review And rating</h1>
                <h2>How was your experience about our product?</h2>

                <div className="rating-component">
                    <div className="stars-box">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <i
                                key={value}
                                className={`star fa fa-star ${value <= rating ? 'selected' : ''}`}
                                title={`${value} star`}
                                data-value={value}
                                onMouseOver={handleStarMouseover}
                                onMouseOut={handleStarMouseout}
                                onClick={handleStarClick}
                            ></i>
                        ))}
                    </div>
                </div>

                <div className="feedback-tags">
                    {[1, 2, 3, 4, 5].map((tag) => (
                        <div
                            className="tags-container"
                            key={tag}
                            data-tag-set={tag}
                            onClick={handleTagClick}
                        >
                            <div className="question-tag">
                                Why was your experience{' '}
                                {tag === 5
                                    ? 'good'
                                    : tag === 3
                                    ? 'average rating'
                                    : 'so bad'}
                                ?
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button-box">
                    <input
                        type="submit"
                        className="done btn btn-success"
                        disabled={!selectedTags.length}
                        value="Add review"
                        onClick={handleSubmitClick}
                    />
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
    );
};

export default RateProduct;
