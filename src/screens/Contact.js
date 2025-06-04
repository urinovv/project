import React from 'react';
import '../styles/Contact.css';
import contactImg from '../assets/images/Contact Img.png';
import {NavLink} from "react-router-dom";
import Reviews from '../components/Reviews';
import LatestPosts from "../components/LatestPosts";
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";

function Contact(props) {
    return (
        <section className="contact">
            <div className="contact-container d-flex flex-column align-items-center justify-content-center gap-5">
                <div className="contact-header d-flex flex-column align-items-center justify-content-center p-5">
                    <h1>Contact</h1>
                    <div className="d-flex flex-row align-items-start justify-content-center gap-3">
                        <NavLink to={`/`} className={"text-decoration-none text-dark"}>Home</NavLink>
                        <p> > </p>
                        <NavLink to={`/contact`} className={"text-decoration-underline text-dark"}>Contact</NavLink>
                    </div>
                </div>
                <div className="contactInfoContainer d-flex flex-row align-items-start justify-content-between">
                    <div
                        className="contact-info-container d-flex flex-column align-items-start justify-content-center gap-3 w-50">
                        <div className={"d-flex flex-column align-items-start justify-content-center gap-2 w-100"}>
                            <h1 className={"fs-4 m-0"}>CONTACT INFO</h1>
                            <p className={"m-0"}>Tortor dignissim convallis aenean et tortor at risus viverra
                                adipiscing.</p>
                        </div>
                        <div
                            className="contactInfo d-flex flex-row align-items-start justify-content-center w-100 gap-4">
                            <div className="contactInfoLeft d-flex flex-column gap-2">
                                <h1 className={"fs-4 m-0"}>OFFICE</h1>
                                <p className={"m-0"}>730 Glenstone Ave 65802, Springfield, US</p>
                                <p className={"m-0"}>+998 99 302 18 74</p>
                                <p className={"m-0"}>yaxyourinov316@gmail.com</p>
                            </div>
                            <div className="contactInfoRight d-flex flex-column gap-2">
                                <h1 className={"fs-4 m-0"}>MANAGEMENT</h1>
                                <p className={"m-0"}>730 Glenstone Ave 65802, Springfield, US</p>
                                <p className={"m-0"}>+998 99 302 18 74</p>
                                <p className={"m-0"}>yaxyourinov316@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="any-questions d-flex flex-column align-items-center justify-content-center gap-4 w-50">
                        <div className={"any-question-header d-flex flex-column align-items-start justify-content-center gap-2 w-100"}>
                            <h1 className={"fs-4 m-0"}>ANY QUESTIONS ?</h1>
                            <p className={"m-0"}>Use the form below to get in touch with us.</p>
                        </div>
                        <form className="contact-inputs-container d-flex flex-column align-items-start justify-content-center gap-3 w-100">
                            <div className={"name-and-email d-flex flex-row gap-3"}>
                                <input type="text" placeholder={"Your full name *"} className={"contact-inputs-control w-50"}
                                       required/>
                                <input type="email" placeholder={"Write your email here *"}
                                       className={"contact-inputs-control w-50"} required/>
                            </div>
                            <input type="text" placeholder={"Phone number"} className={"contact-inputs-control"}
                                   required/>
                            <input type="text" placeholder={"Write your subject here *"}
                                   className={"contact-inputs-control"} required />
                            <input type="text" placeholder={"Write your message here"} className={"contact-inputs-control"} required/>
                            <button type="submit" className={"btn btn-warning text-white w-25 p-2"}>Submit</button>
                        </form>
                    </div>
                </div>
                <div className={"our-stores-container d-flex flex-row align-items-center justify-content-center gap-5 p-5"}>
                    <img src={contactImg} alt="img" className="our-stores-img" width={"50%"} height={"100%"} />
                    <div className={"our-stores-texts d-flex flex-column align-items-start justify-content-center gap-4 w-50"}>
                        <div className={"d-flex flex-column align-items-start justify-content-center gap-2"}>
                            <h1 className={"fs-4 m-0"}>OUR STORES</h1>
                            <p className={"m-0"}>You can also directly buy products from our stores.</p>
                        </div>
                        <div
                            className="contactInfo d-flex flex-row align-items-start justify-content-center w-100 gap-4">
                            <div className="contactInfoLeft d-flex flex-column gap-2">
                                <h1 className={"fs-4 m-0"}>USA</h1>
                                <p className={"m-0"}>730 Glenstone Ave 65802, Springfield, US</p>
                                <p className={"m-0"}>+998 99 302 18 74</p>
                                <p className={"m-0"}>yaxyourinov316@gmail.com</p>
                            </div>
                            <div className="contactInfoRight d-flex flex-column gap-2">
                                <h1 className={"fs-4 m-0"}>FRANCE</h1>
                                <p className={"m-0"}>13 Rue Montmartre 75001, Paris, France</p>
                                <p className={"m-0"}>+998 99 302 18 74</p>
                                <p className={"m-0"}>yaxyourinov316@gmail.com</p>
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

export default Contact;