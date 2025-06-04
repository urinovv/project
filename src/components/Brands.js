import React from 'react';
import '../styles/Brands.css';

function Brands(props) {
    return (
        <section className="brands d-flex flex-column align-items-center justify-content-center">
            <div className="brands-container d-flex flex-row align-items-center justify-content-center gap-5">
                <div className="brand-container d-flex flex-row align-items-center justify-content-center">
                    <h1 className="brands-title fw-bolder">TECH </h1>
                    <h1 className="lighter fw-light"> LIGHT</h1>
                </div>

                <div className="brand-container d-flex flex-row align-items-center justify-content-center">
                    <h1 className="brands-title-2 fw-light">MiniStore.</h1>
                </div>

                <div className="brand-container d-flex flex-row align-items-center justify-content-center">
                    <h1 className="brands-title-3 fw-bold">ULTRAS</h1>
                </div>

                <div className="brand-container d-flex flex-row align-items-center justify-content-center">
                    <h1 className="brands-title-4 fw-lighter">SWANKY</h1>
                </div>

                <div className="brand-container d-flex flex-row align-items-center justify-content-center">
                    <h1 className="brands-title-5 fw-lighter">EMILY</h1>
                </div>

            </div>
        </section>
    );
}

export default Brands;