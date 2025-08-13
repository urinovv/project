import React from 'react';
import '../styles/BlogPosts.css';
import post9 from '../assets/images/b9.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {NavLink} from "react-router-dom";
import Reviews from '../components/Reviews';
import LatestPosts from "../components/LatestPosts";
import InstaShoplite from "../components/InstaShoplite";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import Comments from "../components/Comments";

function BlogPost9(props) {
    return (
        <section className="blog-post">
            <div className="blog-post-container d-flex flex-column justify-content-center align-items-center">
                <div
                    className={"blog-post-image-container d-flex flex-column align-items-center justify-content-center w-100"}>
                    <img src={post9} alt="post" width={"75%"} height={"600px"}/>
                    <p className={"text-warning p-3 w-75 text-start"}>Feb 22/2023 - Technology</p>
                </div>
                <div
                    className={"blog-post-text-container d-flex flex-column align-items-center justify-content-center w-75"}>
                    <h1 className={"fs-1 text-uppercase fw-lighter w-100 text-start"}>
                        5 Must-Have Gadgets for the Modern Home
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa
                        magna. Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. Magna
                        diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas
                        neque. Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est
                        euismod.</p>
                    <p>
                        Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non
                        aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. Morbi
                        arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in vestibulum
                        erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer vitae neque
                        bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit tincidunt tellus
                        sit ornare. Purus ut quis sed venenatis eget ut ipsum, enim lacus. Praesent imperdiet vitae eu,
                        eu tincidunt nunc integer sit.
                    </p>
                    <h1 className={"fw-lighter fs-2"}>
                        “Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non
                        aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel. “
                    </h1>
                    <h1 className={"fw-lighter fs-3 w-100"}>
                        Is this great ?
                    </h1>
                    <ul className={"w-100"}>
                        <li>Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                        <li>Magna diam amet justo sed vel dolor et volutpat integer.</li>
                        <li>Laculis sit sapien hac odio elementum egestas neque.</li>
                    </ul>
                    <p>Morbi arcu amet, nulla fermentum vitae mattis arcu mi convallis. Urna in sollicitudin in
                        vestibulum erat. Turpis faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc integer
                        vitae neque bibendum eget. Tempus malesuada et pellentesque maecenas. Sociis porttitor elit
                        tincidunt tellus sit ornare. Purus ut ipsum, enim lacus.</p>
                    <p>Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa
                        ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna.
                        Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec
                        pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus. Nunc
                        tempus feugiat massa laoreet ultrices diam magna quam. Congue auctor auctor luctus neque. Enim
                        lorem ultrices diam donec. Sed id placerat consectetur faucibus.</p>
                    <p>Velit, praesent pharetra malesuada id pulvinar amet. Consequat potenti mollis massa iaculis et,
                        dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget
                        ullamcorper urna, elit ac diam tellus viverra lacus.</p>
                    <p>
                        Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa
                        ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna.
                        Etiam
                        nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque.
                        Odio
                        mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus.
                    </p>
                    <div className={"d-flex flex-row align-items-center justify-content-between w-100 p-3"}>
                        <div className={"d-flex flex-row align-items-center justify-content-start w-50 gap-3"}>
                            <p className={"post-content-link"}>Tech</p>
                            <p className={"post-content-link"}>Tips</p>
                            <p className={"post-content-link"}>Gadgets</p>
                        </div>
                        <div className={"d-flex flex-row gap-2"}>
                            <p>Share on: </p>
                            <div className={"post-content-icons d-flex gap-2"}>
                                <FacebookIcon/>
                                <InstagramIcon/>
                                <TwitterIcon/>
                                <LinkedInIcon/>
                                <YouTubeIcon/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"posts-pagination d-flex flex-row align-items-center justify-content-between w-100 p-3"}>
                        <NavLink to={`/blogs/5 Must-Have Gadgets for the Modern Home(2)`}
                                 className={"text-decoration-none text-dark"}>
                            <p className={"fs-5 text-uppercase"}>◀ Prev</p>
                        </NavLink>
                        <NavLink to={`/blogs/5 Must-Have Gadgets for the Modern Home`}
                                 className={"text-decoration-none text-dark"}>
                            <p className={"fs-5 text-uppercase"}>Next ▶</p>
                        </NavLink>
                    </div>

                    <div className={"d-flex flex-column w-100"}>
                        <hr/>
                        <Comments/>
                        <hr/>
                    </div>

                </div>
            </div>
            <LatestPosts/>
            <Reviews/>
            <Brands/>
            <InstaShoplite/>
            <Footer/>
        </section>
    );
}

export default BlogPost9;