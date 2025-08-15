import React, { useState } from "react";
import "../styles/ReviewForm.css";

export default function AddReviewForm({ onAddReview }) {
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");
    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !text || rating === 0) return alert("Barcha maydonlarni to'ldiring!");

        const newReview = {
            name,
            date: new Date().toLocaleDateString(),
            rating,
            text,
            photo: photo
                ? URL.createObjectURL(photo)
                : "https://via.placeholder.com/50"
        };

        onAddReview(newReview);
        setName("");
        setText("");
        setRating(0);
        setPhoto(null);
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h3 className="review-form-title">Add a Review</h3>

            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="review-input"
            />

            <div className="review-rating">
                <span>Your rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= rating ? "active" : ""}`}
                        onClick={() => setRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>

            <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="review-file"
            />

            <textarea
                placeholder="Write your review here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="review-textarea"
            ></textarea>

            <button type="submit" className="review-btn">
                Submit Review
            </button>
        </form>
    );
}
