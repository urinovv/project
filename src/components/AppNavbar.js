import React, { useState } from 'react';
import '../styles/Navbar.css';
import search from '../assets/icons/search.svg';
import user from '../assets/icons/user.svg';
import favourite from '../assets/icons/favourite.svg';
import shop from '../assets/icons/shop.svg';
import {NavLink} from 'react-router-dom';

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

function AppNavbar(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div className={"app-navbar d-flex justify-content-center align-items-center flex-row w-100"}>
            <Navbar className={"d-flex flex-row align-items-center justify-content-between w-75"} container={"fluid"} {...args}>
                <NavbarBrand className={"nav-title d-flex flex-row"} href="/"><h1 className={"fs-2"}>SHOP</h1> <h1 className={"fs-2 fw-light"}>LITE</h1></NavbarBrand>
                {/*<NavbarToggler onClick={toggle} />*/}
                {/*<Collapse isOpen={true} navbar>*/}
                <Nav tabs className={"d-flex flex-row align-items-center justify-content-between border-0 gap-3"}>
                    <NavItem>
                        <NavLink to={"/"} className={"nav-link d-flex border-0 bg-transparent text-primary text-black fs-5 fw-light text-decoration-none"} href="#" active >
                            Home
                        </NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className={"nav-link bg-transparent border-0 d-flex flex-row align-items-center justify-content-center gap-1 text-black fs-5 fw-light"} nav caret>
                            Pages
                        </DropdownToggle>
                        <DropdownMenu className={"nav-dropdown bg-transparent border-0 top-100"}>
                            <DropdownItem className={"dr-item"}><NavLink to={`/pruduct-page`} className={"text-decoration-none text-dark"}>Product Page</NavLink></DropdownItem>
                            <DropdownItem className={"dr-item"}><NavLink to={`/cart`} className={"text-decoration-none text-dark"}>Cart</NavLink></DropdownItem>
                            <DropdownItem className={"dr-item"}><NavLink to={`/checkout`} className={"text-decoration-none text-dark"}>Checkout</NavLink></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink to={`/blogs`} className={"nav-link bg-transparent border-0 text-black fs-5 fw-light text-decoration-none"}>Blogs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/shop`} className={"nav-link bg-transparent border-0 text-black fs-5 fw-light text-decoration-none"}>Shop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/about`} className={"nav-link bg-transparent border-0 text-black fs-5 fw-light text-decoration-none"}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={`/contact`} className={"nav-link bg-transparent border-0 text-black fs-5 fw-light text-decoration-none"}>Contact</NavLink>
                    </NavItem>
                </Nav>
                {/*</Collapse>*/}
                <div className={"nav-link-icons d-flex flex-row align-items-center justify-content-center gap-4"}>
                    <NavLink to={`/search`}><img src={search} alt="search" width="20px" height="20px"/></NavLink>
                    <NavLink to={`/profile`}><img src={user} alt="user" width="20px" height="20px"/></NavLink>
                    <NavLink to={`/cart`}><img src={favourite} alt="favourite" width="20px" height="20px"/></NavLink>
                    <NavLink to={`/shop`}><img src={shop} alt="shop" width="20px" height="20px"/></NavLink>
                </div>
            </Navbar>
        </div>
    );
}

export default AppNavbar;