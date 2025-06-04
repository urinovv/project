import React from 'react';
import '../styles/Shop.css';
import Reviews from '../components/Reviews';
import LatestPosts from "../components/LatestPosts";
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";
import searchIcon from '../assets/icons/search.svg';
import {NavLink} from "react-router-dom";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import iPad from '../assets/images/ipad.png';
import drone from '../assets/images/drone.png';
import appleWatch from '../assets/images/applewatch.png';
import tv from '../assets/images/tv.png';
import headPhones from '../assets/images/headphones.png';
import speaker from '../assets/images/speaker-2.png';
import bluetoothSpeaker from '../assets/images/speaker.png';
import airPods from '../assets/images/airpods.png';
import macbookUltra from '../assets/images/macbook.png';
import iPhone15ProMax from '../assets/images/iPhone-15-pro.png';
import smartWatch from '../assets/images/smartwatch.png';

function Shop(props) {
    return (
        <section className="shop d-flex flex-column align-items-center justify-content-center">
            <div className="shop-container d-flex flex-column justify-content-center align-items-center gap-5 p-5">
                <div className="shop-header">
                    <h1 className={"d-flex"}>SHOP</h1>
                    <div className="shop-header-links d-flex flex-row align-items-start justify-content-center gap-3">
                        <NavLink to="/" className={"text-decoration-none text-dark"}>Home</NavLink>
                        <p className={"d-flex"}> > </p>
                        <NavLink to="/shop" className={"d-flex text-decoration-underline text-dark"}>Shop</NavLink>
                    </div>
                </div>

                <div className="shop-container-items d-flex flex-row align-items-start justify-content-center">
                    <div className="shop-item-container-left d-flex flex-column align-items-center justify-content-center w-75">
                        <div className="items-filter d-flex flex-row align-items-center justify-content-between w-100">
                            <p className={"d-flex m-0"}>Showing 1-9 of 55 results</p>

                            <UncontrolledDropdown>
                                <DropdownToggle
                                    caret
                                    color="transparent"
                                    className={"bg-transparent"}>
                                    Default sorting
                                </DropdownToggle>
                                <DropdownMenu dark className={"top-100"}>
                                    <DropdownItem>
                                        Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Action
                                    </DropdownItem>
                                    <DropdownItem>
                                        Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </div>
                        <div className="shop-items d-flex flex-row flex-wrap align-items-center justify-content-center w-100 gap-4">

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={iPad} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>iPad (9th Gen)</h1>
                                <p className="shop-item-price m-0">$870</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={drone} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Drone With Camera</h1>
                                <p className="shop-item-price">$600</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={appleWatch} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Apple Watch (2nd Gen)</h1>
                                <p className="shop-item-price">$400</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={tv} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Ultra HD TV</h1>
                                <p className="shop-item-price">$2000</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={headPhones} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Headphones </h1>
                                <p className="shop-item-price">$600</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={appleWatch} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Apple Watch (2nd Gen)</h1>
                                <p className="shop-item-price">$400</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={speaker} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Speaker</h1>
                                <p className="shop-item-price">$2000</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={bluetoothSpeaker} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Bluetooth Speaker</h1>
                                <p className="shop-item-price">$75</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={airPods} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>AirPods</h1>
                                <p className="shop-item-price">$600</p>
                            </div>

                            <div className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={macbookUltra} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>MacbookUltra</h1>
                                <p className="shop-item-price">$400</p>
                            </div>

                                <div
                                    className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                    <NavLink to={`/pruduct-page`} className={"w-100 h-100 text-decoration-none text-dark d-flex flex-column align-items-center justify-content-between"}>
                                    <img src={iPhone15ProMax} alt="item" width={"90%"} height={"auto"}/>
                                    <h1 className={"shop-item-title"}>iPHONE 15 PRO MAX</h1>
                                    <p className="shop-item-price">$2000</p>
                                    </NavLink>
                                </div>

                            <div
                                className="shop-item d-flex flex-column align-items-center justify-content-between h6 gap-2 p-2">
                                <img src={smartWatch} alt="item" width={"90%"} height={"auto"}/>
                                <h1 className={"shop-item-title"}>Smart Watch</h1>
                                <p className="shop-item-price">$75</p>
                            </div>

                        </div>
                        <div
                            className="shop-items-pagination d-flex flex-row align-items-center justify-content-center gap-4">
                            <p>Prev</p>
                            <p className={"text-warning"}>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>Next</p>
                        </div>
                    </div>
                    <div className="shop-item-container-right d-flex flex-column align-items-center justify-content-center w-25 gap-5">
                        <div className="items-filter-search position-relative">
                            <label htmlFor="search-bar">
                                <input type="text" id={"search-bar"} placeholder={"Search"}/>
                                <img src={searchIcon} alt="search-icon"/>
                            </label>
                        </div>
                        <div className="shop-search-filters d-flex flex-column align-items-start justify-content-center gap-4">
                            <div className="shop-categories d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>CATEGORIES</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"}>All</p>
                                <p className={"filter-item"}>Phones</p>
                                <p className={"filter-item"}>Accessories</p>
                                <p className={"filter-item"}>Tables</p>
                                <p className={"filter-item"}>Watches</p>
                            </div>
                            <div className="shop-tags d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>TAGS</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"}>White</p>
                                <p className={"filter-item"}>Chip</p>
                                <p className={"filter-item"}>Mobile</p>
                                <p className={"filter-item"}>Modern</p>
                            </div>
                            <div className="shop-brands d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>BRANDS</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"}>Apple</p>
                                <p className={"filter-item"}>Samsung</p>
                                <p className={"filter-item"}>Green</p>
                            </div>
                            <div className="filter-by-price d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>FILTER BY PRICE</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"}>Less than $10</p>
                                <p className={"filter-item"}>$10-$20</p>
                                <p className={"filter-item"}>$20-$30</p>
                                <p className={"filter-item"}>$30-$40</p>
                                <p className={"filter-item"}>$40-$50</p>
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

export default Shop;