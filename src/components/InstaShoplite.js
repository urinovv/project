import React from 'react';
import '../styles/InstaShoplite.css';
import instaImg1 from '../assets/images/ins1.png';
import instaImg2 from '../assets/images/ins2.png';
import instaImg3 from '../assets/images/ins3.png';
import instaImg4 from '../assets/images/ins4.png';
import instaImg5 from '../assets/images/ins5.png';
import instaImg6 from '../assets/images/ins6.png';

function InstaShoplite(props) {
    return (
        <section className={"instashoplite d-flex flex-column align-items-center justify-content-center"}>
            <div className="instashoplite-container d-flex flex-column align-items-center justify-content-center gap-4">
                <h1 className="instashoplite-header fw-light fs-2">INSTAGRAM #SHOPLITE</h1>
                <div className="instaimg-container d-flex flex-row align-items-center justify-content-center gap-4">
                    <img src={instaImg1} alt="img" width={"200px"} height={"200px"} />
                    <img src={instaImg2} alt="img" width={"200px"} height={"200px"} />
                    <img src={instaImg3} alt="img" width={"200px"} height={"200px"} />
                    <img src={instaImg4} alt="img" width={"200px"} height={"200px"} />
                    <img src={instaImg5} alt="img" width={"200px"} height={"200px"} />
                    <img src={instaImg6} alt="img" width={"200px"} height={"200px"} />
                </div>
            </div>
        </section>
    );
}

export default InstaShoplite;