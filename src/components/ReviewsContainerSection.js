import React, { useState } from "react";
import ReviewsList from "../components/ReviewsForm.js";
import AddReviewForm from "../components/ReviewForm.js";

export default function ReviewsContainer() {
    const [reviews, setReviews] = useState([
        {
            name: "Emma Chamberlin",
            date: "11/22/2022",
            rating: 5,
            text: "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis",
            photo: "https://via.placeholder.com/50"
        },
        {
            name: "Thompson J.",
            date: "11/22/2022",
            rating: 4,
            text: "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis",
            photo: "https://via.placeholder.com/50"
        }
    ]);

    const addReview = (newReview) => {
        setReviews([newReview, ...reviews]);
    };

    return (
        <div style={{ padding: "20px", width: "90%", display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", gap: "20px"}}>
            {/* Top Reviews */}
            <hr style={{ margin: "0", width: "100%", height: "auto" }}/>
            <ReviewsList reviews={reviews} />
            <hr style={{margin: "0", width: "100%", height: "auto"}}/>
            {/* Add a Review */}
            <AddReviewForm onAddReview={addReview} />
            <hr style={{margin: "0", width: "100%", height: "auto"}}/>
        </div>
    );
}
