import React, { useState, useEffect } from 'react';
import '../styles/Reviews.css';
import leftArrow from '../assets/icons/left arrow.svg';
import rightArrow from '../assets/icons/right arrow.svg';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const reviews = [
    {
        name: 'Emma Chamberlin',
        text: `“I stumbled upon this tech store while searching for a new laptop, and I couldn't be happier with my experience! The staff was incredibly knowledgeable and guided me through the process of choosing the perfect device for my needs. Highly recommended!”`
    },
    {
        name: 'Thomas John',
        text: `“This tech store is my go-to for all things tech! Whether it's a new smartphone, accessories, or even troubleshooting advice, they've always got me covered. The staff is friendly, and their expertise is unmatched. Trust me; you won't regret shopping here!”`
    },
    {
        name: 'Kevin Bryan',
        text: `“I recently purchased a smartwatch from this tech store, and I'm absolutely thrilled with my purchase! Not only did they have an extensive selection to choose from, but their team helped me find the perfect fit for my lifestyle.”`
    },
    {
        name: 'Sarah Newton',
        text: `“Fantastic experience from start to finish. The team is professional and they genuinely care about their customers. Will definitely return for future purchases!”`
    },
    {
        name: 'Liam Brown',
        text: `“Quick service, great products and friendly staff. Found exactly what I needed without wasting time.”`
    },
    {
        name: 'Olivia Davis',
        text: `“The most helpful tech staff I’ve ever met. They fixed my issue within minutes!”`
    }
];

function Reviews() {
    const [index, setIndex] = useState(0);
    const visibleCount = 3;
    const total = reviews.length;

    const next = () => {
        if (total > 0) {
            setIndex((prev) => (prev + visibleCount) % total);
        }
    };

    const prev = () => {
        if (total > 0) {
            setIndex((prev) => (prev - visibleCount + total) % total);
        }
    };

    // ✅ Auto-play effect — faqat review mavjud bo‘lganda ishga tushadi
    useEffect(() => {
        if (total === 0) return;

        const interval = setInterval(next, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, [total]); // total o'zgarsa interval yangilanadi

    // Ko‘rinadigan reviewlar ro‘yxati
    const visibleReviews = Array.from({ length: visibleCount }, (_, i) =>
        reviews[(index + i) % total]
    );

    return (
        <section className="reviewss-section d-flex flex-column align-items-center">
            <div className="title-line d-flex align-items-center gap-3 justify-content-center mb-4">
                <h2 className="fs-3 m-0 w-50 mb-4">CUSTOMERS REVIEWS</h2>
                <hr className="flex-grow-1" style={{ borderTop: '1px solid #ccc' }} />
            </div>

            <div className="reviews-wrapper d-flex flex-row align-items-center justify-content-center gap-4 position-relative">
                <button className="arrow" onClick={prev} >
                    <ArrowBackIosIcon/>
                </button>
                <div className="reviews-track d-flex">
                    {visibleReviews.map((review, i) => (
                        <div key={i} className="review-card d-flex flex-column justify-content-between">
                            <p className="review-text">{review.text}</p>
                            <div className="stars d-flex gap-1 text-warning">
                                {[...Array(5)].map((_, idx) => (
                                    <StarIcon key={idx} fontSize="small" />
                                ))}
                            </div>
                            <h5 className="fw-bold reviewer-name">{review.name}</h5>
                        </div>
                    ))}
                </div>
                <button className="arrow" onClick={next} >
                    <ArrowForwardIosIcon/>
                </button>
            </div>
        </section>
    );
}

export default Reviews;
