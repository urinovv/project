import React from 'react';
import '../styles/Reviews.css';
import leftArrow from '../assets/icons/left arrow.svg';
import rightArrow from '../assets/icons/right arrow.svg';
import StarIcon from '@mui/icons-material/Star';

function Reviews(props) {
    return (
        <section className="reviews d-flex flex-column justify-content-start align-items-center">
            <div className="reviews-container d-flex flex-column align-items-center justify-content-center gap-5">
                <div className="header-container d-flex flex-row align-items-center justify-content-center gap-3 w-100">
                    <h1 className="reviews-header d-flex fs-3 w-25">CUSTOMERS REVIEWS</h1>
                    <hr className={"horizontal-line"}/>
                </div>
                <div
                    className="customers-container d-flex flex-row align-items-center justify-content-center w-100 gap-4">
                    <img className={"arrows"} src={leftArrow} alt="left arrow"/>
                    <div className="customers-container d-flex flex-row align-items-center justify-content-center gap-3">
                        <div className="customers d-flex flex-column align-items-start justify-content-center gap-2">
                            <p className="customers-reviews">“I stumbled upon this tech store while searching for a new
                                laptop,
                                and I couldn't be happier with my experience! The staff was incredibly knowledgeable and
                                guided
                                me through the process of choosing the perfect device for my needs. Highly
                                recommended!”</p>
                            <div className="gave-stars d-flex flex-row align-items-center justify-content-center gap-1 text-warning">
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                            </div>
                            <h1 className="customers-names d-flex fs-5 fw-bolder">Emma Chamberlin</h1>
                        </div>
                        <div className="customers d-flex flex-column align-items-start justify-content-center gap-2">
                            <p className="customers-reviews">“This tech store is my go-to for all things tech! Whether
                                it's a new smartphone, accessories, or even troubleshooting advice,
                                they've always got me covered. The staff is friendly, and their expertise is unmatched.
                                Trust me; you won't regret shopping here!”</p>
                            <div className="gave-stars d-flex flex-row align-items-center justify-content-center gap-1 text-warning">
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                            </div>
                            <h1 className="customers-names d-flex fs-5 fw-bold">Thomas John</h1>
                        </div>
                        <div className="customers d-flex flex-column align-items-start justify-content-center gap-2">
                            <p className="customers-reviews">“I recently purchased a smartwatch from this tech store,
                                and I'm absolutely thrilled with my purchase!
                                Not only did they have an extensive selection to choose from,
                                but their team helped me find the perfect fit for my lifestyle.”</p>
                            <div className="gave-stars d-flex flex-row align-items-center justify-content-center gap-1 text-warning">
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                                <StarIcon className={"d-flex star-reviews"}/>
                            </div>
                            <h1 className="customers-names d-flex fs-5 fw-bold">Kevin Bryan</h1>
                        </div>
                    </div>
                    <img className={"arrows"} src={rightArrow} alt="right arrow"/>
                </div>
            </div>
        </section>
    );
}

export default Reviews;