import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {NavLink} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';

function Footer(props) {
    return (
        <footer className={"app-footer d-flex flex-column justify-content-center align-items-center"}>
            <div className="footer-container d-flex flex-row justify-content-center align-items-center gap-5">
                <div className="footer-logo-container d-flex flex-column justify-content-center align-items-start w-25">
                    <div className="footer-logo d-flex flex-row align-items-center">
                        <h1 className={"logo1 fs-2 fw-bold"}>SHOP</h1> <h1 className={"logo2 fs-2 fw-light"}>LITE</h1>
                    </div>
                    <p className="site-description">Nisi, purus vitae, ultrices nunc.
                        Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                    <div className="social-medias d-flex flex-row align-items-center justify-content-center gap-2">
                        <InstagramIcon className={"txt-icon"}/>
                        <FacebookIcon className={"txt-icon"}/>
                        <TwitterIcon className={"txt-icon"}/>
                        <LinkedInIcon className={"txt-icon"}/>
                        <YouTubeIcon className={"txt-icon"}/>
                    </div>
                </div>

                <div className="footer-links-container">
                    <h1 className="links-header fs-4">QUICK LINKS</h1>
                    <div className="footer-links d-flex flex-column align-items-start justify-content-center gap-2">
                        <NavLink className={"text-decoration-none text-dark"} to="/">HOME</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/about">ABOUT</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/shop">SHOP</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/blogs">BLOGS</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/contact">CONTACT</NavLink>
                    </div>
                </div>

                <div className="footer-links-container">
                    <h1 className="links-header fs-4">HELP & INFO</h1>
                    <div className="footer-links d-flex flex-column align-items-start justify-content-center gap-2">
                        <NavLink className={"text-decoration-none text-dark"} to="/">TRACK YOUR ORDER</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/">RETURNS POLICES</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/">SHIPPING + DELIVERY</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/">CONTACT US</NavLink>
                        <NavLink className={"text-decoration-none text-dark"} to="/">FAQS</NavLink>
                    </div>
                </div>

                <div className="footer-links-container">
                    <h1 className="links-header fs-4">CONTACT US</h1>
                    <p className="footer-address-description">Do you have any queries <br/> or suggestions? <br/>
                        <EmailIcon className={"txt-icon"}/> yaxyourinov316@gmail.com</p>
                    <p className={"footer-number-description"}>If you need support? <br/> Just give us a call. <br/>
                        <PhoneSharpIcon className={"txt-icon"}/> +998 99 302 18 74</p>
                </div>
            </div>
            <hr className={"d-flex flex-column justify-content-center align-items-center w-75"}/>
            <div className="footer-text-container d-flex flex-row align-items-center justify-content-between w-75">
                <marquee behavior="left" direction="right">
                    <h1 className="cpoyright-of-site fs-6">© Copyright 2024 ShopLite. Design by Yaxyobek Urinov</h1>
                </marquee>
            </div>
        </footer>
    );
}

export default Footer;