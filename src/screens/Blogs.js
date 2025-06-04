import React from 'react';
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
import Reviews from '../components/Reviews';
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";

function Blogs(props) {
    return (
        <section className="blogs d-flex flex-column justify-content-center align-items-center">
            <div className="blogs-container">
                <div className={"d-flex flex-column align-items-center justify-content-center w-100 h-auto p-5"}>
                    <h1>Blogs</h1>
                    <div className={"d-flex flex-row align-items-start justify-content-center w-100 gap-3"}>
                        <NavLink to={`/`} className={"text-decoration-none text-dark"}>Home</NavLink>
                        <p> > </p>
                        <NavLink to={`/blogs`} className={"text-decoration-underline text-dark"}>Blogs</NavLink>
                    </div>
                </div>
                <div className="blogs-page-container d-flex flex-row align-items-start justify-content-center w-100">
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
                                <p className={"filter-item"}>White</p>
                                <p className={"filter-item"}>Chip</p>
                                <p className={"filter-item"}>Mobile</p>
                                <p className={"filter-item"}>Modern</p>
                            </div>
                            <div
                                className="shop-brands d-flex flex-column align-items-start justify-content-center w-100">
                                <h1 className={"filter-header d-flex fs-4"}>BRANDS</h1>
                                <hr className={"filter-border"}/>
                                <p className={"filter-item"}>FaceBook</p>
                                <p className={"filter-item"}>Instagram</p>
                                <p className={"filter-item"}>Twitter</p>
                                <p className={"filter-item"}>YouTube</p>
                                <p className={"filter-item"}>Pinterest</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="blogposts-container d-flex flex-column align-items-start justify-content-center gap-5 w-75">
                        <div
                            className="blogposts-contents d-flex flex-row align-items-start justify-content-center w-100 gap-5">
                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>GADGETS</p>
                                    <NavLink to={`/blogs/5 Must-Have Gadgets for the Modern Home`}><img src={postFirst} alt="item" width={"290px"} height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">5 Must-Have Gadgets for the Modern
                                    Home</h1>

                                <Button
                                    color="warning"
                                    id="toggler0"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler0">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            Dive into the world of cutting-edge technology with our latest blog post,
                                            where we highlight five essential gadgets every modern home should have.
                                            From smart assistants to home security systems,
                                            discover how these innovations can enhance your daily life and bring
                                            convenience
                                            to your fingertips.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>

                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>PHONES</p>
                                    <NavLink to={`/blogs/Eco-Friendly Innovations Making a Difference`}><img src={postSecond} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">Eco-Friendly Innovations Making a
                                    Difference</h1>

                                <Button
                                    color="warning"
                                    id="toggler1"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler1">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            Explore the intersection of technology and sustainability in our latest blog
                                            post.
                                            Learn about the innovative eco-friendly technologies revolutionizing various
                                            industries,
                                            from renewable energy solutions to recyclable electronics.
                                            Discover how these advancements are paving the way for a more sustainable
                                            future.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>

                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>DIGITAL
                                        WATCH</p>
                                    <NavLink to={`/blogs/Top Apps and Tools for Remote Work`}><img src={postFourth} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">Top Apps and Tools for Remote
                                    Work</h1>

                                <Button
                                    color="warning"
                                    id="toggler3"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler3">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            In today's remote work environment, productivity is key. Discover the top
                                            apps
                                            and tools that can help you stay organized,
                                            focused, and efficient while working from home. From project management
                                            platforms to time-tracking apps,
                                            find out which tools are essential for maximizing your productivity.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>
                        </div>

                        <div
                            className="blogposts-contents d-flex flex-row align-items-start justify-content-center w-100 gap-5">
                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>GADGETS</p>
                                    <NavLink to={`/blogs/Eco-Friendly Innovations Making a Difference(1)`}><img src={b4} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">Eco-Friendly Innovations Making a
                                    Difference</h1>

                                <Button
                                    color="warning"
                                    id="toggler4"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler4">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            Explore the intersection of technology and sustainability in our latest blog
                                            post. Learn about the innovative eco-friendly technologies revolutionizing
                                            various industries, from renewable energy solutions to recyclable
                                            electronics. Discover how these advancements are paving the way for a more
                                            sustainable future.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>

                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>PHONES</p>
                                    <NavLink to={`/blogs/5 Must-Have Gadgets for the Modern Home(1)`}><img src={b5} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">5 Must-Have Gadgets for the Modern
                                    Home</h1>

                                <Button
                                    color="warning"
                                    id="toggler5"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler5">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            Dive into the world of cutting-edge technology with our latest blog post,
                                            where we highlight five essential gadgets every modern home should have.
                                            From smart assistants to home security systems, discover how these
                                            innovations can enhance your daily life and bring convenience to your
                                            fingertips.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>

                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>DIGITAL
                                        WATCH</p>
                                    <NavLink to={`/blogs/Top Apps and Tools for Remote Work(1)`}><img src={b6} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">Top Apps and Tools for Remote
                                    Work</h1>

                                <Button
                                    color="warning"
                                    id="toggler6"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler6">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            In today's remote work environment, productivity is key. Discover the top
                                            apps and tools that can help you stay organized, focused, and efficient
                                            while working from home. From project management platforms to time-tracking
                                            apps, find out which tools are essential for maximizing your productivity.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>
                        </div>

                        <div
                            className="blogposts-contents d-flex flex-row align-items-start justify-content-center w-100 gap-5">
                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>GADGETS</p>
                                    <NavLink to={`/blogs/Top Apps and Tools for Remote Work(2)`}><img src={b7} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">Top Apps and Tools for Remote
                                    Work</h1>

                                <Button
                                    color="warning"
                                    id="toggler7"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler7">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            In today's remote work environment, productivity is key. Discover the top
                                            apps and tools that can help you stay organized, focused, and efficient
                                            while working from home. From project management platforms to time-tracking
                                            apps, find out which tools are essential for maximizing your productivity.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>

                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>PHONES</p>
                                    <NavLink to={`/blogs/5 Must-Have Gadgets for the Modern Home(2)`}><img src={b8} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">5 Must-Have Gadgets for the Modern
                                    Home</h1>

                                <Button
                                    color="warning"
                                    id="toggler8"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler8">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            Dive into the world of cutting-edge technology with our latest blog post,
                                            where we highlight five essential gadgets every modern home should have.
                                            From smart assistants to home security systems, discover how these
                                            innovations can enhance your daily life and bring convenience to your
                                            fingertips.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>

                            <div
                                className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                                <div
                                    className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                                    <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>DIGITAL
                                        WATCH</p>
                                    <NavLink to={`/blogs/Eco-Friendly Innovations Making a Difference(2)`}><img src={b9} alt="item" width={"290px"}
                                                           height={"220px"}/></NavLink>
                                </div>
                                <h1 className="latest-posts-title d-flex fs-5 m-0">Eco-Friendly Innovations Making a
                                    Difference</h1>

                                <Button
                                    color="warning"
                                    id="toggler9"
                                    className={"btn btn-warning w-50 text-white"}
                                    style={{
                                        marginBottom: '1rem'
                                    }}
                                >
                                    Read More
                                </Button>
                                <UncontrolledCollapse toggler="#toggler9">
                                    <Card>
                                        <CardBody className={"read-more-texts"}>
                                            Explore the intersection of technology and sustainability in our latest blog
                                            post. Learn about the innovative eco-friendly technologies revolutionizing
                                            various industries, from renewable energy solutions to recyclable
                                            electronics. Discover how these advancements are paving the way for a more
                                            sustainable future.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>

                            </div>
                        </div>

                        <div
                            className="blogs-pagination d-flex flex-row align-items-center justify-content-center gap-4 w-100">
                            <p>Prev</p>
                            <p className={"text-warning"}>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>Next</p>
                        </div>

                    </div>

                </div>
            </div>
            <Reviews/>
            <Brands/>
            <InstaShoplite/>
            <Footer/>
        </section>
    );
}

export default Blogs;