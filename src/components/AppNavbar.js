import React, { useEffect, useRef, useState } from "react";
import '../styles/Navbar.css';
import search from '../assets/icons/search.svg';
import user from '../assets/icons/user.svg';
import favourite from '../assets/icons/favourite.svg';
import shop from '../assets/icons/shop.svg';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
} from 'reactstrap';
import useShopStore from "../services/store/UseShopStore";

function AppNavbar(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [favOpen, setFavOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");
    const dropdownRef = useRef(null);
    const [cartOpen, setCartOpen] = useState(false);
    const cartRef = useRef(null);

    const { cart, favourites, removeFromCart, removeFromFavourites } = useShopStore();

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const toggleFav = () => setFavOpen((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setFavOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleCart = () => setCartOpen((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(e) {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setCartOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <div className={"app-navbar d-flex justify-content-center align-items-center flex-row w-100"}>
            <Navbar className={"d-flex flex-row align-items-center justify-content-between app-navbar-group w-100"} container={"fluid"} {...args}>
                <NavbarBrand className={"nav-title d-flex flex-row"} href="/">
                    <h1 className={"fs-2"}>SHOP</h1>
                    <h1 className={"fs-2 fw-light"}>LITE</h1>
                </NavbarBrand>
                <Nav tabs className={"d-flex flex-row align-items-center justify-content-between border-0 gap-3"}>
                    <NavItem>
                        <NavLink to={"/"} className={"nav-link text-black fs-5 fw-light text-decoration-none"}>Home</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className={"nav-link bg-transparent border-0 text-black fs-5 fw-light"} nav caret>
                            Pages
                        </DropdownToggle>
                        <DropdownMenu className={"nav-link-item"}>
                            <DropdownItem>
                                <NavLink to={`/checkout`} className={"text-decoration-none text-dark"}>Checkout</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink to={`/blogs`} className={"nav-link text-black fs-5 fw-light text-decoration-none"}>Blogs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/shop`} className={"nav-link text-black fs-5 fw-light text-decoration-none"}>Shop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/about`} className={"nav-link text-black fs-5 fw-light text-decoration-none"}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/contact`} className={"nav-link text-black fs-5 fw-light text-decoration-none"}>Contact</NavLink>
                    </NavItem>
                </Nav>
                <div className={"nav-link-icons d-flex flex-row align-items-center justify-content-center gap-4"}>
                    <button onClick={() => setShowSearch(true)} className={"bg-transparent border-0"}>
                        <img src={search} alt="search" width="20px" height="20px"/>
                    </button>
                    <NavLink to={`/profile`}><img src={user} alt="user" width="20px" height="20px"/></NavLink>
                    {showSearch && (
                        <div className="search-overlay-full" onClick={() => setShowSearch(false)}>
                            <div
                                className="search-box"
                                onClick={(e) => e.stopPropagation()} // ichiga bosganda yopilmasligi uchun
                            >
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search..."
                                    autoFocus
                                />
                                <button
                                    className="close-btn"
                                    onClick={() => setShowSearch(false)}
                                >
                                    ✖
                                </button>
                            </div>
                        </div>
                    )}

                    {/* FAVOURITES */}
                    <div className="favourites-dropdown-container" ref={dropdownRef}>
                        <button onClick={toggleFav} className="fav-btn bg-transparent border-0 position-relative">
                            <img src={favourite} alt="favourite" width="20px" height="20px"/>
                            {favourites.length > 0 && <span className="cart-badge">{favourites.length}</span>}
                        </button>
                        {favOpen && (
                            <div className="favourites-dropdown">
                                {favourites.length > 0 ? (
                                    <>
                                        {favourites.map((item) => (
                                            <div key={item.id} className="fav-item">
                                                <img src={item.image} alt={item.title} className="fav-item-img"/>
                                                <div className="fav-item-details">
                                                    <p className="fav-item-title">{item.title}</p>
                                                    <p className="fav-item-price">${item.price}</p>
                                                </div>
                                                <button className="remove-btn"
                                                        onClick={() => removeFromFavourites(item.id)}>×
                                                </button>
                                            </div>
                                        ))}
                                        <NavLink to="/favourites" className="view-fav-btn">View Favourites</NavLink>
                                    </>
                                ) : (
                                    <p className="empty-fav">No favourites yet</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* CART */}
                    <div className="cart-dropdown-container" ref={cartRef}>
                        <button onClick={toggleCart} className="cart-btn bg-transparent border-0 position-relative">
                            <img src={shop} alt="shop" width="20px" height="20px"/>
                            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                        </button>
                        {cartOpen && (
                            <div className="cart-dropdown">
                                {cart.length > 0 ? (
                                    <>
                                        {cart.map((item) => (
                                            <div key={item.id} className="cart-item">
                                                <img src={item.image} alt={item.title} className="cart-item-img"/>
                                                <div className="cart-item-details">
                                                    <p className="cart-item-title">{item.title}</p>
                                                    <p className="cart-item-price">
                                                        ${item.price.toFixed(2)} x {item.quantity || 1}
                                                    </p>
                                                </div>
                                                <button className="remove-btn"
                                                        onClick={() => removeFromCart(item.id)}>×
                                                </button>
                                            </div>
                                        ))}
                                        <NavLink to="/cart" className="view-cart-btn">View Cart</NavLink>
                                    </>
                                ) : (
                                    <p className="empty-cart">Cart is empty</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className={"btn-group"}>
                    <NavLink to={`/login`} className={"btn btn-warning text-white"}>Login</NavLink>
                    <NavLink to={`/register`} className={"btn btn-warning text-white"}>Register</NavLink>
                </div>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
