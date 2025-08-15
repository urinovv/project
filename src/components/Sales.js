import React, { useEffect, useState, useRef } from 'react';
import '../styles/Sales.css';
import salesImg from '../assets/images/laptopandphone.png';
import { NavLink } from "react-router-dom";

function Sales() {
    const targetDateRef = useRef(null);

    if (!targetDateRef.current) {

        const now = new Date().getTime();
        targetDateRef.current = now +
            (21 * 24 * 60 * 60 * 1000) +
            (22 * 60 * 60 * 1000) +
            (19 * 60 * 1000) +
            (30 * 1000);
    }

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date().getTime();
        const distance = targetDateRef.current - now;

        if (distance <= 0) return null;

        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="sales d-flex flex-column align-items-center justify-content-center">
            <div className="sales-container d-flex flex-row align-items-center justify-content-center pt-5 pb-5">
                <div className="sales-img-container d-flex align-items-center justify-content-center w-50 h-100">
                    <img src={salesImg} alt="salesImg" width="500px" height="400px" />
                </div>

                <div className="text-container d-flex flex-column align-items-start justify-content-center w-50 h-100">
                    <h1 className="sales-title fw-light fs-1">
                        30% DISCOUNT<br />ON APPLE COLLECTION
                    </h1>

                    {timeLeft ? (
                        <div className="countdown d-flex gap-3 mb-3">
                            <TimeBox value={timeLeft.days} label="Days" />
                            <TimeBox value={timeLeft.hours} label="Hrs" />
                            <TimeBox value={timeLeft.minutes} label="Min" />
                            <TimeBox value={timeLeft.seconds} label="Sec" />
                        </div>
                    ) : (
                        <p className="text-danger fw-bold">Time's up!</p>
                    )}

                    <NavLink to={`/shop`} className="btn btn-warning w-50 text-white">
                        SHOP COLLECTION
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

function TimeBox({ value, label }) {
    return (
        <div className="text-center">
            <div className="fw-bold fs-4">{String(value).padStart(2, '0')}</div>
            <div className="small text-muted">{label}</div>
        </div>
    );
}

export default Sales;
