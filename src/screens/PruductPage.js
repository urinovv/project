import React, {useState} from 'react';
import '../styles/PruductPage.css';
import iPhoneBlack from '../assets/images/I15-dark.png';
import iPhoneBlue from '../assets/images/I15-blue.png';
import iPhoneGray from '../assets/images/I15-gray.png';
import iBlue from '../assets/images/IBlue.png';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Reviews from '../components/Reviews';
import LatestPosts from "../components/LatestPosts";
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";
import userReviews1 from '../assets/images/emma.png';
import userReviews2 from '../assets/images/thompson.png';

function PruductPage(props) {

    const [count, setCount] = useState(1);
    const inc = () => setCount((prevCount) => prevCount + 1);
    const dec = () => setCount((prevCount) => prevCount - 1);

    return (
        <section className={"pruduct-page d-flex flex-column align-items-center justify-content-center"}>
            <div className="pruduct-page-container d-flex flex-column align-items-center justify-content-center">
                <div className="pruducts-container d-flex flex-row align-items-start justify-content-center gap-5">
                    <div
                        className="pruduct-image-container d-flex flex-row align-items-start justify-content-center w-50 gap-4">
                        <div
                            className="image-left d-flex flex-column align-items-center justify-content-center gap-3">
                            <img src={iPhoneBlack} alt="iPhone 15"/>
                            <img className={"border-warning"} src={iPhoneBlue} alt="iPhone 15"/>
                            <img src={iPhoneGray} alt="iPhone 15"/>
                        </div>
                        <div className="image-right d-flex align-items-center justify-content-center p-5">
                            <img src={iBlue} alt="iPhone 15" width={"250px"}/>
                        </div>
                    </div>
                    <div
                        className="pruduct-description-container d-flex flex-column align-items-center justify-content-center w-50">
                        <div
                            className="pruduct-header d-flex flex-column align-items-start justify-content-center gap-2">
                            <h1 className="pruducts-title fw-light m-0">iPHONE 15 PRO MAX</h1>
                            <p className="pruducts-prices text-warning fw-light fs-3 m-0">$2000.00</p>
                            <div
                                className="stars-container d-flex flex-row align-items-center justify-content-start gap-2">
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                            </div>
                            <p className="pruducts-description m-0">Justo, cum feugiat imperdiet nulla molestie ac
                                vulputate scelerisque amet.
                                Bibendum adipiscing platea blandit sit sed quam semper rhoncus.</p>
                        </div>
                        <hr className="pruducts-divider w-100"/>
                        <div
                            className="pruduct-options d-flex flex-column align-items-start justify-content-center w-100 gap-3">
                            <div
                                className="pruducts-color d-flex flex-column align-items-start justify-content-center gap-2">
                                <h1 className="pruduct-colors fs-4 text-decoration-underline fw-light m-0">COLOR</h1>
                                <div
                                    className="p-colors d-flex flex-row align-items-start justify-content-center w-100 gap-3">
                                    <p className="pruduct-color m-0">Orange</p>
                                    <p className="pruduct-color m-0">Green</p>
                                    <p className="pruduct-color m-0">Blue</p>
                                    <p className="pruduct-color m-0">Black</p>
                                </div>
                            </div>
                            <div
                                className="pruducts-size d-flex flex-column align-items-start justify-content-center w-100 gap-2">
                                <h1 className="pruduct-sizes fs-4 fw-light text-decoration-underline m-0">SIZE</h1>
                                <div className="p-sizes d-flex flex-row gap-3 w-100">
                                    <p className="pruduct-size m-0">XL</p>
                                    <p className="pruduct-size m-0">L</p>
                                    <p className="pruduct-size m-0">M</p>
                                    <p className="pruduct-size m-0">S</p>
                                </div>
                            </div>
                            <div
                                className="pruduct-quantity d-flex flex-column align-items-start justify-content-center w-100 gap-2">
                                <p className="pruduct-number d-flex m-0">2 in stock</p>
                                <div
                                    className="pruduct-counter d-flex flex-row align-items-center justify-content-start w-50 gap-3 position-relative">
                                    <button onClick={dec} className={"counter-btn"}>-</button>
                                    <button className={"counter-btn w-25"}>{count}</button>
                                    <button onClick={inc} className={"counter-btn"}>+</button>
                                </div>
                                <div
                                    className="pruduct-btns d-flex flex-row align-items-center justify-content-center w-100 gap-3">
                                    <button
                                        className={"d-flex align-items-center justify-content-center btn btn-warning text-white text-center p-2 w-75"}>ORDER
                                        NOW
                                    </button>
                                    <button
                                        className={"d-flex align-items-center justify-content-center btn btn-dark text-white text-center p-2 w-75"}>ADD
                                        TO CART
                                    </button>
                                    <button
                                        className={" d-flex align-items-center justify-content-center btn btn-dark text-white text-center p-2 w-25"}>
                                        <FavoriteBorderIcon/>
                                    </button>
                                </div>
                            </div>
                            <hr className="pruducts-divider w-100"/>
                            <div
                                className="pruduct-desc d-flex flex-column align-items-start justify-content-start w-100 gap-2">
                                <div
                                    className="num-of-p d-flex flex-row align-items-center justify-content-start w-100 gap-2">
                                    <h1 className="p-num fs-4 m-0 fw-bold">SKU:</h1>
                                    <p className="pr-nums fs-5 m-0 fw-light">1223</p>
                                </div>
                                <div
                                    className="category-of-p d-flex flex-row align-items-center justify-content-start w-100 gap-2">
                                    <h1 className="p-category fs-4 m-0 fw-bold">Category:</h1>
                                    <p className="pr-categories fs-5 m-0 fw-light">Phone, Screen Touch</p>
                                </div>
                                <div
                                    className="tags-of-p d-flex flex-row align-items-center justify-content-start w-100 gap-2">
                                    <h1 className="p-tags fs-4 m-0 fw-bold">Tags:</h1>
                                    <p className="pr-tags fs-5 m-0 fw-light">Classic, Modern</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="pruducts-divider w-90 m-5"/>
                <div
                    className="pruducts-description-container d-flex flex-column align-items-center justify-content-center w-100">
                    <div
                        className="pruducts-page-description d-flex flex-column align-items-center justify-content-center w-75">
                        <h1 className="pruduct-description-header d-flex fs-3 w-100 justify-content-start align-items-center">Pruduct
                            Description</h1>
                        <p className="pruduct-description-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a
                            lectus.
                            Donec consectetuer ligula vulputate sem tristique cursus.
                            <ul>
                                <li>
                                    Donec nec justo eget felis facilisis fermentum.
                                </li>
                                <li>
                                    Suspendisse urna viverra non, semper suscipit pede.
                                </li>
                            </ul>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a
                            lectus.
                            Donec consectetuer ligula vulputate sem tristique cursus.
                        </p>
                    </div>

                    <hr className="pruducts-divider w-90 m-5"/>

                    <div className={"d-flex flex-column align-items-center justify-content-center w-100 gap-5"}>
                        <div className={"d-flex flex-column align-items-center justify-content-center w-100 gap-3"}>
                            <div
                                className={"d-flex flex-row align-items-center justify-content-center w-100 gap-3"}>
                                <img src={userReviews1} alt="user" width={"100px"} height={"100px"}
                                     className={"users-image"}/>
                                <div
                                    className={"d-flex flex-column align-items-start justify-content-center w-75"}>
                                    <div
                                        className={"d-flex flex-row align-items-center justify-content-center"}>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                    </div>
                                    <div
                                        className={"d-flex flex-row align-items-center justify-content-center gap-2"}>
                                        <h1 className={"d-flex fs-4 m-0"}>Emma Chamberlin </h1>
                                        <p className={"d-flex fs-5 m-0 fw-light"}> — 11/22/2022</p>
                                    </div>
                                    <p>
                                        Vitae tortor condimentum lacinia quis vel eros donec ac.
                                        Nam at lectus urna duis convallis convallis
                                    </p>
                                </div>
                            </div>

                            <div
                                className={"d-flex flex-row align-items-center justify-content-center w-100 gap-3"}>
                                <img src={userReviews2} alt="user" width={"100px"} height={"100px"}
                                     className={"users-image"}/>
                                <div
                                    className={"d-flex flex-column align-items-start justify-content-center w-75"}>
                                    <div
                                        className={"d-flex flex-row align-items-center justify-content-center"}>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                        <StarIcon className={"text-warning fs-4"}/>
                                    </div>
                                    <div
                                        className={"d-flex flex-row align-items-center justify-content-center gap-2"}>
                                        <h1 className={"d-flex fs-4 m-0"}>Thompson J.</h1>
                                        <p className={"d-flex fs-5 m-0 fw-light"}> — 11/22/2022</p>
                                    </div>
                                    <p>
                                        Vitae tortor condimentum lacinia quis vel eros donec ac.
                                        Nam at lectus urna duis convallis convallis
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"input-field-container d-flex flex-column align-items-start justify-content-center"}>
                            <h1 className={"fs-4 m-0"}>ADD A REVIEW</h1>
                            <div
                                className={"d-flex flex-column align-items-start justify-content-center w-100 gap-2 position-relative"}>
                                <p className={"m-0"}>Your email address will not be published. Required fields are
                                    marked *</p>
                                <p className={"m-0"}>Your rating *</p>
                                <div className={"d-flex position-relative"}>
                                    <StarIcon className={"fs-4 your-rating"}/>
                                    <StarIcon className={"fs-4 your-rating"}/>
                                    <StarIcon className={"fs-4 your-rating"}/>
                                    <StarIcon className={"fs-4 your-rating"}/>
                                    <StarIcon className={"fs-4 your-rating"}/>
                                </div>
                                <form className={"w-100 d-flex flex-column gap-2"} action="">
                                    <div className={"d-flex flex-column gap-2"}>
                                        <label>Choose your photo</label>
                                        <input type="file" required/>
                                    </div>
                                    <div className={"add-review-container w-100"}>
                                        <label htmlFor="review">Write your review here *</label>
                                        <input type="text" id={"review"} className={"d-flex w-100 bg-transparent"}
                                               required/>
                                    </div>
                                    <div className={"add-name-container w-100"}>
                                        <label htmlFor="name">Write your review here *</label>
                                        <input type="text" id={"name"} className={"d-flex w-100 bg-transparent"}
                                               required/>
                                    </div>
                                    <div className={"add-email-container w-100"}>
                                        <label htmlFor="email">Write your review here *</label>
                                        <input type="text" id={"email"} className={"d-flex w-100 bg-transparent"}
                                               required/>
                                    </div>
                                    <div
                                        className={"w-100 d-flex flex-row align-items-center justify-content-start gap-2"}>
                                        <input type="checkbox" id={"agree"} required/>
                                        <label htmlFor="agree">Save my name, email, and website in this browser for
                                            the next time.</label>
                                    </div>
                                    <button type={"submit"} className={"btn btn-warning w-25 text-white"}>Submit
                                    </button>
                                </form>
                            </div>
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

export default PruductPage;