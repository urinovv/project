import React, {useEffect, useRef, useState} from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/IMG.png';
import freeDelivery from '../assets/icons/shop-1.svg';
import qualityGuarantee from '../assets/icons/quality.svg';
import dailyOffers from '../assets/icons/offers.svg';
import securePayment from '../assets/icons/success.svg';
import {NavLink} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
    {
        title: 'GOPRO HERO9 BLACK',
        description: 'Limited stocks available. Grab it now!',
        image: heroImage
    },
    {
        title: 'GOPRO HERO10 BLACK',
        description: 'Now with 5.3K video. Don’t miss out!',
        image: heroImage
    },
    {
        title: 'GOPRO MAX',
        description: '360° video capture. Unleash creativity!',
        image: heroImage
    }
];

function HomeScreen(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);

    const startAutoplay = () => {
        slideInterval.current = setInterval(nextSlide, 5000); // 5s
    };

    const stopAutoplay = () => {
        clearInterval(slideInterval.current);
    };

    return (
        <section className="app-hero d-flex flex-column justify-content-center align-items-center position-relative">
            <div className="hero-container d-flex flex-row align-items-center justify-content-center">
                <button className="btn" onClick={() => {
                    stopAutoplay();
                    prevSlide();
                    startAutoplay();
                }}>
                    <ArrowBackIosIcon className={"arrow"}/>
                </button>
                <div className="hero-body d-flex flex-row align-items-center justify-content-center gap-5 w-75">
                    <div className="hero-left d-flex flex-column align-items-start justify-content-center gap-1 w-50">
                        <h1 className="hero-title fs-0">{slides[currentIndex].title}</h1>
                        <p className="hero-description fs-5">{slides[currentIndex].description}</p>
                        <NavLink to={`/shop`} className="hero-btn btn btn-warning text-white w-auto">SHOP
                            COLLECTION</NavLink>
                    </div>
                    <img src={slides[currentIndex].image} className="hero-image"
                         alt="img"/>
                </div>
                <button className="btn" onClick={() => {
                    stopAutoplay();
                    nextSlide();
                    startAutoplay();
                }}>
                    <ArrowForwardIosIcon className={"arrow"}/>
                </button>
            </div>

            <div className="hero-description-container d-flex flex-row align-items-center justify-content-center gap-5">
                <div className="home-description">
                    <img src={freeDelivery} alt="free delivery" className="desc-img"/>
                    <div className="text-container">
                        <h1 className="desc-text">FREE DELIVERY</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>dolor sit amet.</p>
                    </div>
                </div>
                <div className="home-description">
                    <img src={qualityGuarantee} alt="guarantee" className="desc-img"/>
                    <div className="text-container">
                        <h1 className="desc-text">QUALITY GUARANTEE</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>dolor sit amet.</p>
                    </div>
                </div>
                <div className="home-description">
                    <img src={dailyOffers} alt="daily" className="desc-img"/>
                    <div className="text-container">
                        <h1 className="desc-text">DAILY OFFERS</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>dolor sit amet.</p>
                    </div>
                </div>
                <div className="home-description">
                    <img src={securePayment} alt="security" className="desc-img"/>
                    <div className="text-container">
                        <h1 className="desc-text">SECURE PAYMENT</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeScreen;
