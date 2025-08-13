import React, {useState} from 'react';
import '../styles/Shop.css';
import Reviews from '../components/Reviews';
import LatestPosts from "../components/LatestPosts";
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";
import searchIcon from '../assets/icons/search.svg';
import {Link, NavLink} from "react-router-dom";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import products from "../Products/mockProducts";

function Shop(props) {

    const [ setSelectedPriceRange, setSelectedTagRange] = useState(null);


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
                    <div
                        className="shop-item-container-left d-flex flex-column align-items-center justify-content-center w-75">
                        <div className="items-filter d-flex flex-row align-items-center justify-content-between w-100">
                            <p className={"d-flex m-0"}>Showing 1-9 of 55 results</p>

                            <UncontrolledDropdown>
                                <DropdownToggle
                                    caret
                                    color="transparent"
                                    className={"bg-transparent"}>
                                    Default sorting
                                </DropdownToggle>
                                <DropdownMenu className={"top-100 bg-transparent d-menu"}>
                                    <DropdownItem onClick={() => setSelectedPriceRange('all')}>
                                        All
                                    </DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt10')}>
                                        Less than $10
                                    </DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt100')}>
                                        Less than $100
                                    </DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt500')}>
                                        Less than $500
                                    </DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt1000')}>
                                        Less than $1000
                                    </DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt10000')}>
                                        Less than $10000
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </div>
                        <div
                            className="shop-items d-flex flex-row flex-wrap align-items-center justify-content-center w-100 gap-4"
                            id={"productList"}>

                            <div
                                className="shop-items d-flex flex-row flex-wrap align-items-center justify-content-center w-100 gap-4"
                                id="productList">
                                {products.map((item) => (
                                    <li key={item.id}
                                        className="shop-item product d-flex flex-column align-items-center justify-content-center h6 gap-2 p-2">
                                        <Link to={`/product-detail/${item.id}`} className={"d-flex align-items-center justify-content-center text-decoration-none w-100"} >
                                            <div
                                                className={"d-flex flex-column w-100 h-100 text-dark justify-content-between align-items-center"}>
                                                <img src={item.image} alt="item" width="90%" height="auto"/>
                                                <h1 className="shop-item-title">{item.title}</h1>
                                                <p className="shop-item-price">${item.price}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
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
                    <div
                        className="shop-item-container-right d-flex flex-column align-items-center justify-content-center w-25 gap-5">
                        <div className="items-filter-search position-relative">
                            <label htmlFor="search-bar">
                                <input type="text" id={"search-bar"} placeholder={"Search"}/>
                                <img src={searchIcon} alt="search-icon"/>
                            </label>
                        </div>
                        <div
                            className="shop-search-filters d-flex flex-column align-items-start justify-content-center gap-4">
                            <div
                                className="shop-categories d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>CATEGORIES</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"}>All</p>
                                <p className={"filter-item"}>Phones</p>
                                <p className={"filter-item"}>Accessories</p>
                                <p className={"filter-item"}>Tables</p>
                                <p className={"filter-item"}>Watches</p>
                            </div>
                            <div
                                className="shop-tags d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>TAGS</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"} onClick={() => setSelectedTagRange('white')}>White</p>
                                <p className={"filter-item"} onClick={() => setSelectedTagRange('chip')}>Chip</p>
                                <p className={"filter-item"} onClick={() => setSelectedTagRange('mobile')}>Mobile</p>
                                <p className={"filter-item"} onClick={() => setSelectedTagRange('modern')}>Modern</p>
                            </div>
                            <div
                                className="shop-brands d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>BRANDS</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"}>Apple</p>
                                <p className={"filter-item"}>Samsung</p>
                                <p className={"filter-item"}>Green</p>
                            </div>
                            <div
                                className="filter-by-price d-flex flex-column align-items-start justify-content-center w-100">
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