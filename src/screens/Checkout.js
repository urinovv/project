import React, {useState} from 'react';
import '../styles/Checkout.css';
import {NavLink} from "react-router-dom";
import Reviews from '../components/Reviews.js';
import LatestPosts from "../components/LatestPosts.js";
import Brands from "../components/Brands.js";
import InstaShoplite from "../components/InstaShoplite.js";
import Footer from "../components/Footer.js";

function Checkout(props) {

    return (
        <section className="checkout">
            <div className="checkout-container">
                <div className={"checkout-header d-flex flex-column align-items-center justify-content-center gap-2"}>
                    <h1>Checkout</h1>
                    <div className="d-flex flex-row align-items-start justify-content-center gap-3">
                        <NavLink to={`/`} className={"text-decoration-none text-dark"}>Home</NavLink>
                        <p> > </p>
                        <NavLink to={`/shop`} className={"text-decoration-underline text-dark"}>Shop</NavLink>
                    </div>
                    <form className={"d-flex flex-column w-100 align-items-center justify-content-center"} action="">
                        <div
                            className="checkout-info d-flex flex-row align-items-start justify-content-center gap-1 w-100 p-xl-5">
                            <div
                                className={"checkout-info-right d-flex flex-column align-items-center justify-content-center gap-4 w-50"}>
                                <h1 className={"fw-light text-uppercase w-75 fs-2"}>Billing details</h1>
                                <div
                                    className={"checkout-forms d-flex flex-column align-items-start justify-content-center w-75"}>
                                    <label htmlFor={"name"}>First name *</label>
                                    <input type="text" id={"name"} placeholder={"Enter your first name *"} required/>
                                    <label htmlFor="lastname">Last name *</label>
                                    <input type="text" id={"lastname"} placeholder={`Enter your last name *`} required/>
                                    <label htmlFor="company">Company name(optional)</label>
                                    <input type="text" id={"company"} placeholder={"Enter your company name *"} required/>
                                    <label htmlFor="country">Country/Region *</label>
                                    <input type="text" id={"country"} placeholder={"Where are you from *"} required/>
                                    <label htmlFor="street">Street</label>
                                    <input type="text" id={"street"} placeholder={"House number and street name"} required/>
                                    <input type="text" id={"street"} placeholder="Appartments, suite, etc." required/>
                                    <label htmlFor="city">Town/City *</label>
                                    <input type="text" id={"city"} placeholder={"Enter your city name *"} required/>
                                    <label htmlFor="state">State *</label>
                                    <input type="text" id={"state"} placeholder={"Enter your state name *"} required/>
                                    <label htmlFor="zip">Zip *</label>
                                    <input type="text" id={"zip"} placeholder={"Enter your zip code *"} required/>
                                    <label htmlFor="phone">Phone *</label>
                                    <input type="text" id={"phone"} placeholder={"Enter your phone number *"} required/>
                                    <label htmlFor="email">Email *</label>
                                    <input type="text" id={"email"} placeholder={"Enter your email address *"} required/>
                                </div>
                            </div>
                            <div
                                className="checkout-info-left d-flex flex-column align-items-start justify-content-center gap-4 w-50">
                                <h1 className={"fw-light text-uppercase fs-2 w-100"}>Additional information</h1>
                                <div
                                    className={"checkout-forms d-flex flex-column align-items-start justify-content-start w-75"}>
                                    <label htmlFor="notes">Order notes(optional)</label>
                                    <input type="text" id={"notes"}
                                           placeholder={"Notes about your order.Like special notes for delivery."} required/>
                                </div>
                            </div>
                        </div>
                        <div className="cart-totals d-flex flex-column align-items-start justify-content-start w-75">
                            <h1 className={"text-uppercase fw-light fs-3"}>Cart totals</h1>
                            <hr className="cart-totals-divider w-100"/>
                            <div className={"d-flex flex-row align-items-center justify-content-between w-50"}>
                                <h1 className={"text-uppercase fs-5 fw-light text-warning"}>Subtotal</h1>
                                <p className={"text-warning"}>${" Subtotal"}</p>
                            </div>
                            <hr className="cart-totals-divider w-100"/>
                            <div className={"d-flex flex-row align-items-center justify-content-between w-50"}>
                                <h1 className={"text-uppercase fs-5 fw-light text-warning"}>Total</h1>
                                <p className={"text-warning"}>${" Total"}</p>
                            </div>
                            <hr className="cart-totals-divider w-100"/>
                            <div
                                className={"d-flex flex-column align-items-start justify-content-center w-100 gap-2"}>
                                <div className={"d-flex flex-row align-items-center justify-content-center gap-2"}>
                                    <input type="radio" id={"radio"} name={"radio"} required/>
                                    <label htmlFor={"radio"}>Direct bank transfer</label>
                                </div>
                                <div className={"d-flex flex-row align-items-center justify-content-center gap-2"}>
                                    <input type="radio" id={"radio1"} name={"radio"} required/>
                                    <label htmlFor={"radio1"}>Check payments</label>
                                </div>
                                <div className={"d-flex flex-row align-items-center justify-content-center gap-2"}>
                                    <input type="radio" id={"radio2"} name={"radio"} required/>
                                    <label htmlFor="radio2">Cash on delivery</label>
                                </div>
                                <div className={"d-flex flex-row align-items-center justify-content-center gap-2"}>
                                    <input type="radio" id={"radio3"} name={"radio"} required/>
                                    <label htmlFor="radio3">PayPal</label>
                                </div>
                            </div>
                        </div>
                        <button type={"submit"} className={"btn btn-warning text-white w-25 p-2 m-xl-5"}>PLace an order
                        </button>
                    </form>
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

export default Checkout;