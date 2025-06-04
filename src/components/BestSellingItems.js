import React from 'react';
import '../styles/BestSellingItems.css';
import leftArrow from '../assets/icons/left arrow.svg';
import rightArrow from '../assets/icons/right arrow.svg';
import iPad from '../assets/images/ipad.png';
import drones from '../assets/images/drone.png';
import appleWatch from '../assets/images/applewatch.png';
import tv from '../assets/images/tv.png';
import speaker from '../assets/images/speaker.png';

function BestSellingItems(props) {
    return (
        <section className="best-selling">
            <div className="best-selling-items d-flex flex-column align-items-center justify-content-center gap-5">
                <div className="best-selling-container d-flex flex-row justify-content-center align-items-center gap-5">
                    <h1 className={"d-flex fs-4"}>BEST SELLING ITEMS</h1>
                    <hr className={"line"}/>
                </div>
                <div className="items-container card-group d-flex flex-row align-items-center justify-content-center gap-5">
                    <img className={"arrows"} src={leftArrow} alt="left arrow"/>
                    <div className="content-container d-flex flex-row align-items-center justify-content-center gap-4">
                        <div className="items">
                            <img src={iPad} alt="ipad"/>
                            <h1 className={"items-title"}>IPad (9th Gen)</h1>
                            <p className={"items-costs"}>$870</p>
                        </div>
                        <div className="items">
                            <img src={drones} alt="drones"/>
                            <h1 className={"items-title"}>Drone With Camera</h1>
                            <p className={"items-costs"}>$600</p>
                        </div>
                        <div className="items">
                            <img src={appleWatch} alt="watch"/>
                            <h1 className={"items-title"}>Apple Watch (2nd Gen)</h1>
                            <p className={"items-costs"}>$400</p>
                        </div>
                        <div className="items">
                            <img src={tv} alt="tv"/>
                            <h1 className={"items-title"}>Ultra HD TV</h1>
                            <p className={"items-costs"}>$2000</p>
                        </div>
                        <div className="items">
                            <img src={speaker} alt="speaker"/>
                            <h1 className={"items-title"}>Bluetooth Speaker</h1>
                            <p className={"items-costs"}>$75</p>
                        </div>
                    </div>
                    <img className={"arrows"} src={rightArrow} alt="right arrow"/>
                </div>
            </div>
        </section>
    );
}

export default BestSellingItems;