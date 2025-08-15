import React, {useState} from 'react';
import '../styles/Blogs.css';
import searchIcon from "../assets/icons/search.svg";
import {NavLink} from "react-router-dom";
import {Button, Card, CardBody, UncontrolledCollapse} from "reactstrap";

import postFirst from "../assets/images/l1.png";
import postSecond from "../assets/images/l2.png";
import postFourth from "../assets/images/l4.png";
import b4 from '../assets/images/b4.png';
import b5 from '../assets/images/b5.png';
import b6 from '../assets/images/b6.png';
import b7 from '../assets/images/b7.png';
import b8 from '../assets/images/b8.png';
import b9 from '../assets/images/b9.png';
import Reviews from '../components/Reviews.js';
import Brands from "../components/Brands.js";
import InstaShoplite from "../components/InstaShoplite.js";
import Footer from "../components/Footer.js";

// Blog ma'lumotlari
const blogData = [
    {
        id: 1,
        title: "5 Must-Have Gadgets for the Modern Home",
        category: "GADGETS",
        tags: ["Modern"],
        brand: "FaceBook",
        img: postFirst,
        link: "5 Must-Have Gadgets for the Modern Home",
        content: "Dive into the world of cutting-edge technology..."
    },
    {
        id: 2,
        title: "Eco-Friendly Innovations Making a Difference",
        category: "PHONES",
        tags: ["Mobile"],
        brand: "Twitter",
        img: postSecond,
        link: "Eco-Friendly Innovations Making a Difference",
        content: "Explore the intersection of technology and sustainability..."
    },
    {
        id: 3,
        title: "Top Apps and Tools for Remote Work",
        category: "DIGITAL WATCH",
        tags: ["Chip"],
        brand: "Instagram",
        img: postFourth,
        link: "Top Apps and Tools for Remote Work",
        content: "In today's remote work environment..."
    },
    {
        id: 4,
        title: "Eco-Friendly Innovations Making a Difference",
        category: "GADGETS",
        tags: ["White"],
        brand: "YouTube",
        img: b4,
        link: "Eco-Friendly Innovations Making a Difference(1)",
        content: "Explore the intersection of technology..."
    },
    {
        id: 5,
        title: "5 Must-Have Gadgets for the Modern Home",
        category: "PHONES",
        tags: ["Modern"],
        brand: "Pinterest",
        img: b5,
        link: "5 Must-Have Gadgets for the Modern Home(1)",
        content: "Dive into the world of cutting-edge technology..."
    },
    {
        id: 6,
        title: "Top Apps and Tools for Remote Work",
        category: "DIGITAL WATCH",
        tags: ["Chip"],
        brand: "Instagram",
        img: b6,
        link: "Top Apps and Tools for Remote Work(1)",
        content: "In today's remote work environment..."
    },
    {
        id: 7,
        title: "Top Apps and Tools for Remote Work",
        category: "GADGETS",
        tags: ["White"],
        brand: "FaceBook",
        img: b7,
        link: "Top Apps and Tools for Remote Work(2)",
        content: "In today's remote work environment..."
    },
    {
        id: 8,
        title: "5 Must-Have Gadgets for the Modern Home",
        category: "PHONES",
        tags: ["Modern"],
        brand: "Twitter",
        img: b8,
        link: "5 Must-Have Gadgets for the Modern Home(2)",
        content: "Dive into the world of cutting-edge technology..."
    },
    {
        id: 9,
        title: "Eco-Friendly Innovations Making a Difference",
        category: "DIGITAL WATCH",
        tags: ["Mobile"],
        brand: "YouTube",
        img: b9,
        link: "Eco-Friendly Innovations Making a Difference(2)",
        content: "Explore the intersection of technology..."
    }
];

function Blogs() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [tag, setTag] = useState("All");
    const [brand, setBrand] = useState("All");
    const [page, setPage] = useState(1);
    const perPage = 6;

    // Filtrlash
    const filteredBlogs = blogData.filter(blog => {
        const matchCategory = category === "All" || blog.category === category;
        const matchTag = tag === "All" || blog.tags.includes(tag);
        const matchBrand = brand === "All" || blog.brand === brand;
        const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchTag && matchBrand && matchSearch;
    });

    // Pagination hisoblash
    const totalPages = Math.ceil(filteredBlogs.length / perPage);
    const paginatedBlogs = filteredBlogs.slice((page - 1) * perPage, page * perPage);

    return (
        <section className="blogs d-flex flex-column justify-content-center align-items-center">
            <div className="blogs-container">
                {/* Header */}
                <div className="d-flex flex-column align-items-center justify-content-center w-100 h-auto p-5">
                    <h1>Blogs</h1>
                    <div className="d-flex flex-row align-items-start justify-content-center w-100 gap-3">
                        <NavLink to={`/`} className="text-decoration-none text-dark">Home</NavLink>
                        <p> &gt; </p>
                        <NavLink to={`/blogs`} className="text-decoration-underline text-dark">Blogs</NavLink>
                    </div>
                </div>

                <div className="blogs-page-container d-flex flex-row align-items-start justify-content-center w-100">
                    {/* Filter panel */}
                    <div
                        className="shop-item-container-right d-flex flex-column align-items-center justify-content-center w-25 gap-5">
                        <div className="items-filter-search position-relative">
                            <label htmlFor="search-bar">
                                <input
                                    type="text"
                                    id="search-bar"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        setPage(1);
                                    }}
                                />
                            </label>
                            <img src={searchIcon} alt="search-icon"/>
                        </div>

                        <div
                            className="shop-search-filters d-flex flex-column align-items-start justify-content-center gap-4">
                            {/* Categories */}
                            <div
                                className="shop-categories d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className="filter-header fs-4">CATEGORIES</h1>
                                <hr className="filter-border"/>
                                {["All", "PHONES", "ACCESSORIES", "TABLES", "WATCHES", "GADGETS", "DIGITAL WATCH"].map(cat => (
                                    <p key={cat} className={`filter-item ${category === cat ? "text-warning" : ""}`}
                                       onClick={() => {
                                           setCategory(cat);
                                           setPage(1);
                                       }}>{cat}</p>
                                ))}
                            </div>

                            {/* Tags */}
                            <div
                                className="shop-tags d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className="filter-header fs-4">TAGS</h1>
                                <hr className="filter-border"/>
                                {["All", "White", "Chip", "Mobile", "Modern"].map(t => (
                                    <p key={t} className={`filter-item ${tag === t ? "text-warning" : ""}`}
                                       onClick={() => {
                                           setTag(t);
                                           setPage(1);
                                       }}>{t}</p>
                                ))}
                            </div>

                            {/* Brands */}
                            <div
                                className="shop-brands d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className="filter-header fs-4">BRANDS</h1>
                                <hr className="filter-border"/>
                                {["All", "FaceBook", "Instagram", "Twitter", "YouTube", "Pinterest"].map(b => (
                                    <p key={b} className={`filter-item ${brand === b ? "text-warning" : ""}`}
                                       onClick={() => {
                                           setBrand(b);
                                           setPage(1);
                                       }}>{b}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bloglar */}
                    <div
                        className="blogposts-container d-flex flex-column align-items-start justify-content-center gap-5 w-75">
                        <div
                            className="blogposts-contents flex-wrap d-flex flex-row align-items-start justify-content-start w-100 gap-5"
                            style={{position: "relative"}}>
                            {paginatedBlogs.length === 0 ? (
                                <p className="fs-4 text-muted m-auto w-auto h-auto" style={{
                                    position: "absolute",
                                    top: '300px',
                                    left: '45%',
                                    transform: "translate(50% 0)"
                                }}>Not found</p>
                            ) : (
                                paginatedBlogs.map(blog => (
                                    <div key={blog.id}
                                         className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2"
                                         style={{width: "290px"}}>
                                        <div className="posts-content-image">
                                            <p className="content-image-type bg-warning text-white p-1 m-0 w-auto">{blog.category}</p>
                                            <NavLink to={`/blogs/${blog.link}`}>
                                                <img src={blog.img} alt="item" width="290" height="220"/>
                                            </NavLink>
                                        </div>
                                        <h1 className="latest-posts-title fs-5 m-0">{blog.title}</h1>
                                        <Button color="warning" id={`toggler${blog.id}`} className="w-50 text-white">Read
                                            More</Button>
                                        <UncontrolledCollapse toggler={`#toggler${blog.id}`}>
                                            <Card>
                                                <CardBody className="read-more-texts">{blog.content}</CardBody>
                                            </Card>
                                        </UncontrolledCollapse>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Pagination */}
                        {paginatedBlogs.length > 0 && (
                            <div
                                className="blogs-pagination d-flex flex-row align-items-center justify-content-center gap-4 w-100">
                                <p onClick={() => setPage(p => Math.max(1, p - 1))}
                                   style={{cursor: page === 1 ? "default" : "pointer"}}>Prev</p>
                                {Array.from({length: totalPages}, (_, i) => i + 1).map(num => (
                                    <p key={num} onClick={() => setPage(num)}
                                       className={page === num ? "text-warning" : ""}
                                       style={{cursor: "pointer"}}>{num}</p>
                                ))}
                                <p onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                   style={{cursor: page === totalPages ? "default" : "pointer"}}>Next</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer qismlar */}
            <Reviews/>
            <Brands/>
            <InstaShoplite/>
            <Footer/>
        </section>
    );
}

export default Blogs;
