import React, {useState} from 'react';
import '../styles/Cart.css';
import {NavLink} from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import iPhone15 from '../assets/images/IBlue.png';
import Reviews from '../components/Reviews';
import LatestPosts from "../components/LatestPosts";
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";

function Cart(props) {

    const [count, setCount] = useState(1);
    const inc = () => setCount((prevCount) => prevCount + 1);
    const dec = () => setCount((prevCount) => prevCount - 1);
    const del = () => delete (document.getElementById("products").innerHTML = "All products deleted successfully!");

    return (
        <section className={"cart"}>
            <div className="cart-container d-flex flex-column align-items-center justify-content-start">
                <div className={"cart-header d-flex flex-column justify-content-center align-items-center w-100"}>
                    <h1>Cart</h1>
                    <div className={"d-flex flex-row align-items-start justify-content-center gap-3"}>
                        <NavLink to="/" className={"text-decoration-none text-dark"}>Home</NavLink>
                        <p> > </p>
                        <NavLink to="/cart" className={"text-decoration-underline text-dark"}>Cart</NavLink>
                    </div>
                </div>
                <div className="cart-body d-flex flex-column align-items-center justify-content-center w-75 mt-5 pt-5">
                    <div className="cart-body-header d-flex flex-row align-items-center justify-content-between w-100">
                        <h1 className={"fs-5 fw-light text-uppercase"}>Product</h1>
                        <h1 className={"fs-5 fw-light text-uppercase"}>Quantity</h1>
                        <h1 className={"fs-5 fw-light text-uppercase"}>Subtotal</h1>
                        <div></div>
                    </div>
                    <hr className={"w-100 m-4"}/>
                    <div className="cart-products d-flex flex-row align-items-center justify-content-between w-100">
                        <div id={"products"} className={"d-flex flex-row align-items-center justify-content-between w-100"}>
                            <div
                                className={"d-flex flex-row align-items-center justify-content-between w-75"}>
                                <div
                                    className="cart-product d-flex flex-row align-items-center justify-content-center w-auto gap-3">
                                    <img src={iPhone15} alt="iphone 15" width={"100px"} height={"auto"}
                                         className={"product-image"}/>
                                    <div
                                        className={"product-details d-flex flex-column align-items-start justify-content-center gap-2"}>
                                        <h1 className={"fs-5 fw-light"}>iPhone 15 Pro Max</h1>
                                        <p className={"text-warning"}>$2000.00</p>
                                    </div>
                                </div>
                                <div
                                    className="pruduct-counter d-flex flex-row align-items-center justify-content-center w-auto gap-2 position-relative">
                                    <button onClick={dec} className={"counter-btn px-lg-3 p-lg-2"}>-</button>
                                    <button className={"counter-btn cart-count-btn"}>{count}</button>
                                    <button onClick={inc} className={"counter-btn px-lg-3 p-lg-2"}>+</button>
                                </div>
                                <div className="product-price">
                                    <p className={"fs-4 text-warning"}>$2000.00</p>
                                </div>
                            </div>
                            <DeleteForeverIcon className={"fs-1 del-icon"} dataToggle={"products"} onClick={del}/>
                        </div>
                    </div>
                    <div className="cart-totals d-flex flex-column align-items-start justify-content-center w-100 pt-5 gap-2">
                        <h1 className={"d-flex fs-4 fw-light text-uppercase"}>Cart totals</h1>
                        <hr className={"w-100 m-0"}/>
                        <div className={"d-flex flex-row align-items-start justify-content-between w-25"}>
                            <h1 className={"d-flex fs-5 fw-light text-uppercase"}>Subtotal</h1>
                            <p className={"text-warning"}>$2400.00</p>
                        </div>
                        <hr className={"w-100 m-0"}/>
                        <div className={"d-flex flex-row align-items-start justify-content-between w-25"}>
                            <h1 className={"d-flex fs-5 fw-light text-uppercase"}>Total</h1>
                            <p className={"text-warning"}>$2400.00</p>
                        </div>
                        <hr className={"w-100 m-0"}/>
                        <div className="cart-btns d-flex flex-row align-items-center justify-content-start w-100 gap-3">
                            <button className={"btn btn-warning w-25 p-2 text-white"}>Update cart</button>
                            <button className={"btn btn-warning w-25 p-2 text-white"}>Continue shipping</button>
                            <button className={"btn btn-warning w-25 p-2 text-white"}>Proceed to checkout</button>
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

export default Cart;