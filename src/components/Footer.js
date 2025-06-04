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
                        <InstagramIcon className={"text-warning txt-icon"}/>
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
            <hr/>
            <div className="footer-text-container d-flex flex-row align-items-center justify-content-between w-75">
                <h1 className="payment-methods fs-5">Payment Options: <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                           height="16" fill="currentColor"
                                                                           className="bi bi-paypal" viewBox="0 0 16 16">
                    <path
                        d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z"/>
                </svg></h1>
                <h1 className="cpoyright-of-site fs-5">© Copyright 2024 ShopLite. Design by Yaxyobek Urinov</h1>
            </div>
        </footer>
    );
}

export default Footer;