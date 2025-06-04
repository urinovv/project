import React from 'react';
import '../styles/Sales.css';
import salesImg from '../assets/images/laptopandphone.png';
import {NavLink} from "react-router-dom";

function Sales(props) {
    return (
        <section className="sales d-flex flex-column align-items-center justify-content-center">
            <div className="sales-container d-flex flex-row align-items-center justify-content-center">
                <div className={"sales-img-container d-flex align-items-center justify-content-center w-50 h-100"}>
                    <img src={salesImg} alt="salesImg" width={"500px"} height={"400px"}/>
                </div>
                <div className="text-container d-flex flex-column align-items-start justify-content-center w-50 h-100">
                    <h1 className="sales-title fw-light fs-1">30% DISCOUNT<br/> ON APPLE COLLECTION</h1>
                    <NavLink to={`/shop`} className={"btn btn-warning w-50 text-white"}>SHOP COLLECTION</NavLink>
                </div>
            </div>
        </section>
    );
}

export default Sales;