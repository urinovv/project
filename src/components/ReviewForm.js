import React, { useState } from "react";
import "../styles/ReviewForm.css";

export default function ReviewForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            rating,
            review,
            photo
        });
        alert("Review submitted successfully!");
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h2>ADD A REVIEW</h2>
            <p className="note">
                Your email address will not be published. Required fields are marked *
            </p>

            <label>Your rating *</label>
            <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= (hover || rating) ? "active" : ""}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
            ★
          </span>
                ))}
            </div>

            <label>Choose your photo</label>
            <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                accept="image/*"
            />

            <label>Write your review here *</label>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
            />

            <div className="checkbox">
                <input type="checkbox" id="save-info" />
                <label htmlFor="save-info">
                    Save my name, email, and website in this browser for the next time.
                </label>
            </div>

            <button type="submit" className="submit-btn">
                Submit
            </button>
        </form>
    );
}
