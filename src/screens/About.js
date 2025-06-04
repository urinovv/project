import React from 'react';
import '../styles/About.css';
import freeDelivery from "../assets/icons/shop-1.svg";
import qualityGuarantee from "../assets/icons/quality.svg";
import dailyOffers from "../assets/icons/offers.svg";
import securePayment from "../assets/icons/success.svg";
import Reviews from "../components/Reviews";
import LatestPosts from "../components/LatestPosts";
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";
import {NavLink} from "react-router-dom";
import aboutVideo from '../assets/images/about-video.png';
import playBtn from '../assets/icons/play btn.svg';

function About(props) {
    return (
        <section className="about d-flex flex-column align-items-center justify-content-center">
            <div className="about-container d-flex flex-column justify-content-center align-items-center gap-5">
                <div>
                    <h1 className={"about-header"}>ABOUT US</h1>
                    <div
                        className="about-text-container d-flex flex-row align-items-start justify-content-center gap-2">
                        <NavLink to={"/"} className="about-home text-decoration-none text-dark">Home</NavLink>
                        <p className={"d-flex align-items-center justify-content-center"}>></p>
                        <NavLink to={"/about"} className={"about-us text-decoration-underline text-dark"}>About
                            Us</NavLink>
                    </div>
                </div>
                <div className="about-video-container d-flex flex-row align-items-center justify-content-center gap-5">
                    <div className="video-container-about d-flex position-relative">
                        <img src={aboutVideo} alt="about video" className="d-flex" width={"600px"} height={"500px"}/>
                        <img src={playBtn} alt="play btn" className="d-flex position-absolute paly-button"/>
                    </div>
                    <div
                        className="text-container-about d-flex flex-column align-items-start justify-content-center gap-4 w-50">
                        <h1 className="about-video-title m-0">Best Digital Store BasicStore</h1>
                        <div
                            className="desc-container d-flex flex-column align-items-start justify-content-center gap-2">
                            <p className="about-video-description m-0">Risus augue curabitur diam senectus congue velit
                                et.
                                Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros
                                at.
                                Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era.
                                Nulla adipiscing pharetra eros at. </p>
                            <p className={"about-video-description m-0"}>
                                Nulla adipiscing pharetra pellentesque maecenas odio eros at.
                                Et libero vulputate amet duis erat volutpat vitae eget.
                                Quam libero etiam et in ac at quis.
                                Risus augue curabitur diam senectus congue velit et.
                            </p>
                        </div>
                        <NavLink to={`/shop`} className={"btn btn-warning p-2 text-white w-25"}>GO TO SHOP</NavLink>
                    </div>
                </div>
                <div
                    className={"description-container d-flex flex-row align-items-center justify-content-center gap-5"}>
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
            </div>
            <Reviews/>
            <LatestPosts/>
            <Brands/>
            <InstaShoplite/>
            <Footer/>
        </section>
    );
}

export default About;