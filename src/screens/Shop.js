import React, { useState, useMemo } from 'react';
import '../styles/Shop.css';
import Reviews from '../components/Reviews.js';
import LatestPosts from "../components/LatestPosts.js";
import Brands from "../components/Brands.js";
import InstaShoplite from "../components/InstaShoplite.js";
import Footer from "../components/Footer.js";
import searchIcon from '../assets/icons/search.svg';
import { Link, NavLink } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import products from "../Products/mockProducts.js";

function Shop() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedTag] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    // Price range conditions
    const priceRanges = {
        lt10: (price) => price < 10,
        lt20: (price) => price >= 10 && price <= 20,
        lt30: (price) => price > 20 && price <= 30,
        lt40: (price) => price > 30 && price <= 40,
        lt50: (price) => price > 40 && price <= 50,
        lt100: (price) => price < 100,
        lt500: (price) => price < 500,
        lt1000: (price) => price < 1000,
        lt10000: (price) => price < 10000,
        all: () => true
    };

    // Filtered products
    const filteredProducts = useMemo(() => {
        return products.filter((item) => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
            const matchesBrand = selectedBrand === "All" || item.brand === selectedBrand;
            const matchesTag = !selectedTag || item.tags?.includes(selectedTag);
            const matchesPrice = !selectedPriceRange || priceRanges[selectedPriceRange](item.price);

            return matchesSearch && matchesCategory && matchesBrand && matchesTag && matchesPrice;
        });
    }, [searchTerm, selectedCategory, selectedBrand, selectedTag, selectedPriceRange]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <section className="shop d-flex flex-column align-items-center justify-content-center">
            <div className="shop-container d-flex flex-column justify-content-center align-items-center gap-5 p-5">
                <div className="shop-header">
                    <h1>SHOP</h1>
                    <div className="shop-header-links d-flex gap-3">
                        <NavLink to="/" className="text-decoration-none text-dark">Home</NavLink>
                        <p> > </p>
                        <NavLink to="/shop" className="text-decoration-underline text-dark">Shop</NavLink>
                    </div>
                </div>

                <div className="shop-container-items d-flex">
                    {/* LEFT */}
                    <div className="shop-item-container-left w-75">
                        <div className="items-filter d-flex justify-content-between w-100">
                            <p>Showing {paginatedProducts.length} of {filteredProducts.length} results</p>
                            <UncontrolledDropdown>
                                <DropdownToggle caret color="transparent" className="bg-transparent">
                                    Default sorting
                                </DropdownToggle>
                                <DropdownMenu className="bg-transparent d-menu">
                                    <DropdownItem onClick={() => setSelectedPriceRange('all')}>All</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt10')}>Less than $10</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt20')}>$10-$20</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt30')}>$20-$30</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt40')}>$30-$40</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt50')}>$40-$50</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt100')}>Less than $100</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt500')}>Less than $500</DropdownItem>
                                    <DropdownItem onClick={() => setSelectedPriceRange('lt1000')}>Less than $1000</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>

                        {/* Products */}
                        <div className="shop-items d-flex flex-wrap gap-4 align-items-center justify-content-center pt-5 pb-5">
                            {paginatedProducts.length > 0 ? (
                                paginatedProducts.map((item) => (
                                    <li key={item.id} className="shop-item product d-flex flex-column align-items-center justify-content-center gap-2 p-2">
                                        <Link to={`/product-detail/${item.id}`} className="text-decoration-none w-100">
                                            <div className="d-flex flex-column w-100 h-100 text-dark align-items-center">
                                                <img src={item.image} alt={item.title} width="90%" />
                                                <h1 className="shop-item-title">{item.title}</h1>
                                                <p className="shop-item-price">${item.price}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <p className="fs-4 text-muted mt-5">Not Found</p>
                            )}
                        </div>

                        {/* Pagination */}
                        {filteredProducts.length > 0 && (
                            <div className="shop-items-pagination d-flex flex-row align-items-center justify-content-center gap-4">
                                <p onClick={prevPage} style={{ cursor: 'pointer' }}>Prev</p>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <p
                                        key={i}
                                        className={currentPage === i + 1 ? "text-warning" : ""}
                                        onClick={() => setCurrentPage(i + 1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {i + 1}
                                    </p>
                                ))}
                                <p onClick={nextPage} style={{ cursor: 'pointer' }}>Next</p>
                            </div>
                        )}

                    </div>

                    {/* RIGHT */}
                    <div className="shop-item-container-right w-25 gap-5">
                        {/* Search */}
                        <div className="items-filter-search position-relative">
                            <label htmlFor="search-bar">
                                <input type="text" id="search-bar" placeholder="Search"
                                       value={searchTerm} onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}/>
                            </label>
                            <img src={searchIcon} alt="search-icon"/>
                        </div>

                        <div className="shop-search-filters d-flex flex-column gap-4">
                            {/* Categories */}
                            <div className="shop-categories">
                                <h1 className="fs-4">CATEGORIES</h1>
                                <hr />
                                {["All", "Phones", "Accessories", "Watches", "Laptops"].map(category => (
                                    <p key={category} className="filter-item" onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}>
                                        {category}
                                    </p>
                                ))}
                            </div>

                            {/* Brands */}
                            <div className="shop-brands">
                                <h1 className="fs-4">BRANDS</h1>
                                <hr />
                                {["All", "Apple", "Samsung"].map(brand => (
                                    <p key={brand} className="filter-item" onClick={() => { setSelectedBrand(brand); setCurrentPage(1); }}>
                                        {brand}
                                    </p>
                                ))}
                            </div>

                            {/* Price */}
                            <div className="filter-by-price">
                                <h1 className="fs-4">FILTER BY PRICE</h1>
                                <hr />
                                <p className="filter-item" onClick={() => setSelectedPriceRange('lt10')}>Less than $10</p>
                                <p className="filter-item" onClick={() => setSelectedPriceRange('lt20')}>$10-$20</p>
                                <p className="filter-item" onClick={() => setSelectedPriceRange('lt30')}>$20-$30</p>
                                <p className="filter-item" onClick={() => setSelectedPriceRange('lt40')}>$30-$40</p>
                                <p className="filter-item" onClick={() => setSelectedPriceRange('lt50')}>$40-$50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Reviews />
            <LatestPosts />
            <Brands />
            <InstaShoplite />
            <Footer />
        </section>
    );
}

export default Shop;
