import React from 'react';
import '../styles/Categories.css';
import phone from '../assets/images/phone.png';
import playStations from '../assets/images/light.png';
import smartWatches from '../assets/images/smartwatch.png';
import joystics from '../assets/images/joystic.png';
import airPods from '../assets/images/airpods.png';
import laptops from '../assets/images/laptops.png';

function Categories(props) {
    return (
        <section className="categories d-flex flex-column align-items-center justify-content-center">
            <div className="categories-container d-flex flex-column align-items-center justify-content-center gap-5">
                <div className="text-container d-flex flex-row align-items-center justify-content-center">
                    <h1 className={"categories-title d-flex fs-4"}>CATEGORIES</h1>
                    <hr/>
                </div>
                <div className="category-contents d-flex flex-row align-items-center justify-content-center gap-4">
                    <div className="c-items d-flex flex-column align-items-center justify-content-between">
                        <img src={phone} alt="phone"/>
                        <h1 className={"item-title d-flex fs-5"}>Phones</h1>
                    </div>

                    <div className="c-items d-flex flex-column align-items-center justify-content-between">
                        <img src={playStations} alt="playstations"/>
                        <h1 className={"item-title d-flex fs-5"}>Playstations</h1>
                    </div>

                    <div className="c-items d-flex flex-column align-items-center justify-content-between">
                        <img src={smartWatches} alt="watch"/>
                        <h1 className={"item-title d-flex fs-5"}>Digital Watches</h1>
                    </div>

                    <div className="c-items d-flex flex-column align-items-center justify-content-between">
                        <img src={joystics} alt="joystics"/>
                        <h1 className={"item-title d-flex fs-5"}>Joystics</h1>
                    </div>

                    <div className="c-items d-flex flex-column align-items-center justify-content-between">
                        <img src={airPods} alt="airpods"/>
                        <h1 className={"item-title d-flex fs-5"}>Ear Pods</h1>
                    </div>

                    <div className="c-items d-flex flex-column align-items-center justify-content-between">
                        <img src={laptops} alt="laptops"/>
                        <h1 className={"item-title d-flex fs-5"}>Laptops</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;