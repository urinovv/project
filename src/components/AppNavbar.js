import React, { useEffect, useRef, useState } from "react";
import '../styles/Navbar.css';
import search from '../assets/icons/search.svg';
import userIcon from '../assets/icons/user.svg';
import { useUser } from "../context/UserContext.js";
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
    Collapse,
    NavbarToggler
} from 'reactstrap';
import useShopStore from "../services/store/UseShopStore.js";

function AppNavbar({ onLogout, ...args }) {
    const { user, userData } = useUser();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [favOpen, setFavOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const cartRef = useRef(null);

    const { cart, favourites, removeFromCart, removeFromFavourites } = useShopStore();

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleFav = () => setFavOpen(prev => !prev);
    const toggleCart = () => setCartOpen(prev => !prev);
    const toggleNavbar = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setFavOpen(false);
            if (cartRef.current && !cartRef.current.contains(e.target)) setCartOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="app-navbar w-100">
            <Navbar color="transparent" light expand="md" className="px-3" {...args}>
                <NavbarBrand href="/" className="d-flex align-items-center">
                    <h1 className="fs-2 mb-0">SHOP</h1>
                    <h1 className="fs-2 fw-light mb-0">LITE</h1>
                </NavbarBrand>

                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto d-flex align-items-center gap-3" navbar>
                        <NavItem><NavLink to="/" className="nav-link">Home</NavLink></NavItem>
                        <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
                            <DropdownToggle nav caret className="nav-link">Pages</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink to="/checkout" className="text-dark text-decoration-none">Checkout</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem><NavLink to="/blogs" className="nav-link">Blogs</NavLink></NavItem>
                        <NavItem><NavLink to="/shop" className="nav-link">Shop</NavLink></NavItem>
                        <NavItem><NavLink to="/about" className="nav-link">About</NavLink></NavItem>
                        <NavItem><NavLink to="/contact" className="nav-link">Contact</NavLink></NavItem>
                    </Nav>

                    <div className="d-flex align-items-center gap-3">
                        <button className="bg-transparent border-0" onClick={() => setShowSearch(!showSearch)}>
                            <img src={search} alt="search" width="20" height="20" />
                        </button>

                        {showSearch && (
                            <div className="search-overlay-full" onClick={() => setShowSearch(false)}>
                                <div className="search-box" onClick={e => e.stopPropagation()}>
                                    <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search..." autoFocus />
                                    <button className="close-btn" onClick={() => setShowSearch(false)}>✖</button>
                                </div>
                            </div>
                        )}

                        <div className="favourites-dropdown-container" ref={dropdownRef}>
                            <button onClick={toggleFav} className="bg-transparent border-0 position-relative">
                                <img src={favourite} alt="favourite" width="20" height="20" />
                                {favourites.length > 0 && <span className="cart-badge">{favourites.length}</span>}
                            </button>
                            {favOpen && (
                                <div className="favourites-dropdown">
                                    {favourites.length > 0 ? (
                                        <>
                                            {favourites.map(item => (
                                                <div key={item.id} className="fav-item">
                                                    <img src={item.image} alt={item.title} className="fav-item-img" />
                                                    <div className="fav-item-details">
                                                        <p className="fav-item-title">{item.title}</p>
                                                        <p className="fav-item-price">${item.price}</p>
                                                    </div>
                                                    <button className="remove-btn" onClick={() => removeFromFavourites(item.id)}>×</button>
                                                </div>
                                            ))}
                                            <NavLink to="/favourites" className="view-fav-btn">View Favourites</NavLink>
                                        </>
                                    ) : <p className="empty-fav">No favourites yet</p>}
                                </div>
                            )}
                        </div>

                        <div className="cart-dropdown-container" ref={cartRef}>
                            <button onClick={toggleCart} className="bg-transparent border-0 position-relative">
                                <img src={shop} alt="shop" width="20" height="20" />
                                {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                            </button>
                            {cartOpen && (
                                <div className="cart-dropdown">
                                    {cart.length > 0 ? (
                                        <>
                                            {cart.map(item => (
                                                <div key={item.id} className="cart-item">
                                                    <img src={item.image} alt={item.title} className="cart-item-img" />
                                                    <div className="cart-item-details">
                                                        <p className="cart-item-title">{item.title}</p>
                                                        <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity || 1}</p>
                                                    </div>
                                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                                                </div>
                                            ))}
                                            <NavLink to="/cart" className="view-cart-btn">View Cart</NavLink>
                                        </>
                                    ) : <p className="empty-cart">Cart is empty</p>}
                                </div>
                            )}
                        </div>

                        {user ? (
                            <div className="d-flex align-items-center gap-2">
                                <NavLink to="/user" className="d-flex align-items-center">
                                    <img
                                        src={userData?.photoURL || user.photoURL || userIcon}
                                        alt="Profile"
                                        style={{ width: 30, height: 30, borderRadius: "50%" }}
                                    />
                                </NavLink>
                                <button onClick={onLogout} className="btn btn-warning text-white d-flex w-100">
                                    <NavLink to={`/logout`} className={"d-flex text-decoration-none text-white"}>Logout</NavLink>
                                </button>
                            </div>
                        ) : (
                            <div className="d-flex gap-2 w-100">
                                <NavLink to="/login" className="btn btn-warning text-white d-flex w-50">Login</NavLink>
                                <NavLink to="/register" className="btn btn-warning text-white d-flex w-50">Register</NavLink>
                            </div>
                        )}
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;
