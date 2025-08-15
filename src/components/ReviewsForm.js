import React from "react";
import "../styles/ReviewsForm.css";

export default function ReviewsList({ reviews }) {
    return (
        <div className="reviews-list">
            {reviews.slice(0, 3).map((rev, idx) => (
                <div key={idx} className="reviews-card">
                    <img
                        src={rev.photo}
                        alt={rev.name}
                        className="review-avatar"
                    />
                    <div className="review-content">
                        <div className="review-header">
                            <strong className="review-name">{rev.name}</strong>
                            <span className="review-date">{rev.date}</span>
                        </div>
                        <div className="review-stars fs-3 m-0">
                            {"★".repeat(rev.rating)}
                        </div>
                        <p className="review-text">{rev.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
