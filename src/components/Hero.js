import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/IMG.png';
import leftArrow from '../assets/icons/left arrow.svg';
import rightArrow from '../assets/icons/right arrow.svg';
import freeDelivery from '../assets/icons/shop-1.svg';
import qualityGuarantee from '../assets/icons/quality.svg';
import dailyOffers from '../assets/icons/offers.svg';
import securePayment from '../assets/icons/success.svg';
import {NavLink} from "react-router-dom";

function HomeScreen(props) {
    return (
        <section className="app-hero d-flex flex-column justify-content-center align-items-center position-relative">
            <div className="hero-container d-flex flex-row align-items-center justify-content-center gap-5">
                <button className={"btn"}><img src={leftArrow} alt="left"/></button>
                <div className="hero-left d-flex flex-column align-items-start justify-content-center gap-1">
                    <h1 className="hero-title fs-0">GOPRO HERO9 BLACK</h1>
                    <p className="hero-description fs-5">Limited stocks available. Grab it now!</p>
                    <NavLink to={`/shop`} className={"hero-btn btn btn-warning text-white"}>SHOP COLLECTION</NavLink>
                </div>
                <img src={heroImage} className={"hero-image"} width={"600px"} height={"580px"} alt="img"/>
                <button className={"btn"}><img src={rightArrow} alt="right"/></button>
            </div>
            <div className={"hero-description-container d-flex flex-row align-items-center justify-content-center gap-5"}>
                <div className="home-description">
                    <img src={freeDelivery} alt="free delivery" className="desc-img"/>
                    <div className="text-container">
                        <h1 className={"desc-text"}>FREE DELIVERY</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>
                            dolor sit amet.</p>
                    </div>
                </div>
                <div className="home-description">
                    <img src={qualityGuarantee} alt="guarantee" className="desc-img"/>
                    <div className="text-container">
                        <h1 className={"desc-text"}>QUALITY GUARANTEE</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>
                            dolor sit amet.</p>
                    </div>
                </div>
                <div className="home-description">
                    <img src={dailyOffers} alt="daily" className="desc-img"/>
                    <div className="text-container">
                        <h1 className={"desc-text"}>DAILY OFFERS</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>
                            dolor sit amet.</p>
                    </div>
                </div>
                <div className="home-description">
                    <img src={securePayment} alt="security" className="desc-img"/>
                    <div className="text-container">
                        <h1 className={"desc-text"}>SECURE PAYMENT</h1>
                        <p className="desc-description">Consectetur adipi elit lorem ipsum <br/>
                            dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeScreen;