import React from 'react';
import '../styles/ItemsList.css';
import itemFirst from '../assets/images/i1.png';
import itemSecond from '../assets/images/i2.png';
import itemThird from '../assets/images/i3.png';
import itemFourth from '../assets/images/i4.png';
import itemFive from '../assets/images/i5.png';
import itemSix from '../assets/images/i6.png';
import itemSeven from '../assets/images/i7.png';
import itemEight from '../assets/images/i8.png';
import itemNine from '../assets/images/i9.png';
import itemTen from '../assets/images/i10.png';
import itemEleven from '../assets/images/i11.png';
import itemTwelve from '../assets/images/i12.png';

function ItemsList(props) {
    return (
        <section className={"items-list d-flex align-items-center justify-content-center"}>
            <div className="contents-container d-flex flex-row align-items-center justify-content-center">

                <div className="container-items">
                    <h1 className={"contents-title"}>FEATURED</h1>
                    <hr className={"horiz-line"}/>

                    <div className="content-items-container">
                        <div className="content-items">
                            <img src={itemFirst} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Wireless headset</h1>
                                <p className={"items-price"}>$500</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemSecond} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Iphone x Pro Max</h1>
                                <p className={"items-price"}>$820</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemThird} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Iphone 11 Pro</h1>
                                <p className={"items-price"}>$960</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-items">
                    <h1 className={"contents-title"}>LATEST ITEMS</h1>
                    <hr className={"horiz-line"}/>

                    <div className="content-items-container">
                        <div className="content-items">
                            <img src={itemFourth} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Apple airPod</h1>
                                <p className={"items-price"}>$450</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemFive} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Screen touch watch</h1>
                                <p className={"items-price"}>$750</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemSix} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Digital watch</h1>
                                <p className={"items-price"}>$660</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-items">
                    <h1 className={"contents-title"}>BEST REVIEWED</h1>
                    <hr className={"horiz-line"}/>

                    <div className="content-items-container">
                        <div className="content-items">
                            <img src={itemSeven} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Wireless Joysticks</h1>
                                <p className={"items-price"}>$350</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemEight} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Apple White AirPod</h1>
                                <p className={"items-price"}>$330</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemNine} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Gimbal stabilizer</h1>
                                <p className={"items-price"}>$920</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-items">
                    <h1 className={"contents-title"}>ON SALE</h1>
                    <hr className={"horiz-line"}/>

                    <div className="content-items-container">
                        <div className="content-items">
                            <img src={itemTen} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Iphone 15 pro max</h1>
                                <p className={"items-price"}><del className={"on-sale"}>$1666</del>$999</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemEleven} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">White AirPods</h1>
                                <p className={"items-price"}><del className={"on-sale"}>$500</del>$410</p>
                            </div>
                        </div>
                        <hr className={"horiz-line"}/>
                        <div className="content-items">
                            <img src={itemTwelve} alt="item"/>
                            <div className="items-details">
                                <h1 className="items-title">Security CCTV camera</h1>
                                <p className={"items-price"}><del className={"on-sale"}>$600</del>$500</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default ItemsList;