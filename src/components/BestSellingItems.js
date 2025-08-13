import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import '../styles/BestSellingItems.css';
import leftArrow from '../assets/icons/left arrow.svg';
import rightArrow from '../assets/icons/right arrow.svg';
import iPad from '../assets/images/ipad.png';
import drones from '../assets/images/drone.png';
import appleWatch from '../assets/images/applewatch.png';
import tv from '../assets/images/tv.png';
import speaker from '../assets/images/speaker.png';

function BestSellingItems(props) {

    const scrollRef = useRef(null); // 🔹 container uchun ref

    const scroll = (direction) => {
        const scrollAmount = 240; // element eni + gap
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const products = [
        {id: 1, title: 'IPad (9th Gen)', image: iPad, price: 870},
        {id: 2, title: 'Drone With Camera', image: drones, price: 600},
        {id: 3, title: 'Apple Watch (2nd Gen)', image: appleWatch, price: 400},
        {id: 4, title: 'Ultra HD TV', image: tv, price: 2000},
        {id: 5, title: 'Bluetooth Speaker', image: speaker, price: 75},
    ]

    return (
        <section className="best-selling">
            <div className="best-selling-items d-flex flex-column align-items-center justify-content-center gap-5">
                <div className="best-selling-container d-flex flex-row justify-content-center align-items-center gap-5">
                    <h1 className={"d-flex fs-4"}>BEST SELLING ITEMS</h1>
                    <hr className={"line"}/>
                </div>
                <div className="items-container card-group d-flex flex-row align-items-center justify-content-center gap-5">
                    <img className={"arrows"} src={leftArrow} alt="left arrow" onClick={() => scroll('left')}/>
                    <div className="content-container d-flex flex-row align-items-center justify-content-center gap-4"
                         ref={scrollRef}>
                        <div
                            className="shop-items d-flex flex-row flex-wrap align-items-center justify-content-center w-100 gap-4"
                            id="productList">
                            {products.map((item) => (
                                <li key={item.id}
                                    className="shop-item product d-flex flex-column align-items-center justify-content-center h6 gap-2 p-2 w-auto">
                                    <Link to={`/product-detail/${item.id}`}
                                          className={"d-flex align-items-center justify-content-center text-decoration-none w-100"}>
                                        <div
                                            className={"d-flex flex-column w-100 h-100 text-dark justify-content-between align-items-center"}>
                                            <img src={item.image} alt="item" width="90%" height="auto"/>
                                            <h1 className="shop-item-title">{item.title}</h1>
                                            <p className="shop-item-price">${item.price}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                    <img className={"arrows"} src={rightArrow} alt="right arrow" onClick={() => scroll('right')}/>
                </div>
            </div>
        </section>
    );
}

export default BestSellingItems;