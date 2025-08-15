import React, {useState} from 'react';
import '../styles/Cart.css';
import {NavLink, Link} from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Reviews from '../components/Reviews.js';
import LatestPosts from "../components/LatestPosts.js";
import Brands from "../components/Brands.js";
import InstaShoplite from "../components/InstaShoplite.js";
import Footer from "../components/Footer.js";
import useShopStore from "../services/store/UseShopStore.js";

function Cart() {
    const unitPrice = 2000;
    const [count, setCount] = useState(null);
    const [deleted] = useState(false);

    // const {id} = useParams();
    // const product = products.find(prod => prod.id.toString() === id);
    const {cart, removeFromCart, updateCartItem} = useShopStore();


    function inc(id, quantity) {
        // setCount(prev => prev + 1)
        updateCartItem(id, {quantity: quantity + 1})
    }

    function dec(id, quantity) {
        // setCount(prev => prev - 1)
        if (quantity >= 1) {

        updateCartItem(id, {quantity: quantity - 1})
        }
    }

    function subtotalPrice() {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        })
        return totalPrice.toFixed(2);
    }

    function productTotalPrice(product) {
        return product.price * product.quantity.toFixed(2);
    }

    const subtotal = count * unitPrice;

    return (
        <section className={"cart"}>
            <div className="cart-container d-flex flex-column align-items-center justify-content-start">
                <div className={"cart-header d-flex flex-column justify-content-center align-items-center w-100"}>
                    <h1>Cart</h1>
                    <div className={"d-flex flex-row align-items-start justify-content-center gap-3"}>
                        <NavLink to="/" className={"text-decoration-none text-dark"}>Home</NavLink>
                        <p> &gt; </p>
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

                    {!deleted ? (
                        // Cart Products
                        <div className="cart-products d-flex flex-column align-items-center justify-content-between w-100">
                            {
                                cart.map((product) => (
                                    /*Cart Product*/
                                    <div className={"d-flex flex-row align-items-center justify-content-between w-100"}>
                                        <div
                                            className="d-flex flex-row align-items-center justify-content-between w-75">
                                            {/*Cart Product info*/}
                                            <div
                                                className="cart-product d-flex flex-row align-items-center justify-content-start w-full gap-3 ">
                                                <img src={product.image} alt="iphone 15" width="100px" height="auto"
                                                     className="product-image"/>
                                                <div
                                                    className="product-details d-flex flex-column align-items-start justify-content-start gap-2">
                                                    <h1 className="fs-5 fw-light">{product.title}</h1>
                                                    <p className="text-warning">${product.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                            {/*Cart Product increment || decrement*/}
                                            <div
                                                className="pruduct-counter d-flex flex-row align-items-center justify-content-center w-auto gap-2 position-relative">
                                                <button onClick={() => dec(product.id, product.quantity)}
                                                        className="counter-btn px-lg-3 p-lg-2">-
                                                </button>
                                                <button
                                                    className="counter-btn cart-count-btn">{product.quantity}</button>
                                                <button onClick={() => inc(product.id, product.quantity)}
                                                        className="counter-btn px-lg-3 p-lg-2">+
                                                </button>
                                            </div>
                                            {/*Cart Product price*/}
                                            <div className="product-price">
                                                <p className="fs-4 text-warning">${productTotalPrice(product)}</p>
                                            </div>
                                        </div>
                                        <DeleteForeverIcon className="fs-1 del-icon"
                                                           onClick={() => removeFromCart(product.id)}/>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <p className="text-danger w-100 text-center">All products deleted successfully!</p>
                    )}

                    <div
                        className="cart-totals d-flex flex-column align-items-start justify-content-center w-100 pt-5 gap-2">
                        <h1 className="d-flex fs-4 fw-light text-uppercase">Cart totals</h1>
                        <hr className="w-100 m-0"/>
                        <div className="d-flex flex-row align-items-start justify-content-between w-25">
                            <h1 className="d-flex fs-5 fw-light text-uppercase">Subtotal</h1>
                            <p className="text-warning">${!deleted ? subtotalPrice() : '0.00'}</p>
                        </div>
                        <hr className="w-100 m-0"/>
                        <div className="d-flex flex-row align-items-start justify-content-between w-25">
                            <h1 className="d-flex fs-5 fw-light text-uppercase">Total</h1>
                            <p className="text-warning">${!deleted ? subtotal.toFixed(2) : '0.00'}</p>
                        </div>
                        <hr className="w-100 m-0"/>
                        <div className="cart-btns d-flex flex-row align-items-center justify-content-start w-100 gap-3">
                            <button className="btn btn-warning w-25 p-2 text-white">Continue shipping</button>
                            <Link to={`/checkout`} className={"text-decoration-none text-dark d-flex w-100"}>
                                <button className="btn btn-warning w-25 p-2 text-white">Proceed to checkout</button>
                            </Link>
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
