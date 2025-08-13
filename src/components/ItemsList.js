import React from 'react';
import '../styles/ItemsList.css';
import {Link} from 'react-router-dom';
import products from "../Products/mockProducts";

function ItemsList(props) {

    const featuredProducts = [
        products[2],
        products[5],
        products[8],
    ];
    const latestProducts = [
        products[9],
        products[10],
        products[11],
    ];
    const bestReviewedProducts = [
        products[4],
        products[9],
        products[11],
    ];
    const onSaleProducts = [
        products[1],
        products[2],
        products[7],
    ];

    return (
        <section className={"items-list d-flex align-items-center justify-content-center"}>
            <div className="contents-container d-flex flex-row align-items-center justify-content-center">

                <div className="container-items">
                    <h1 className={"contents-title"}>FEATURED</h1>
                    <hr className={"horiz-line"}/>
                    {featuredProducts.map((item) => (
                        <div key={item.id} className="content-items-container">
                            <Link to={`/product-detail/${item.id}`}
                                  className={"d-flex align-items-center justify-content-center text-decoration-none text-dark w-100"}>
                                <div className="content-items">
                                    <img src={item.image} alt="item"/>
                                    <div className="items-details">
                                        <h1 className="items-title">{item.title}</h1>
                                        <p className={"items-price"}>${item.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="container-items">
                    <h1 className={"contents-title"}>LATEST ITEMS</h1>
                    <hr className={"horiz-line"}/>
                    {latestProducts.map((item) => (
                        <div key={item.id} className="content-items-container">
                            <Link to={`/product-detail/${item.id}`}
                                  className={"d-flex align-items-center justify-content-center text-decoration-none text-dark w-100"}>
                                <div className="content-items">
                                    <img src={item.image} alt="item"/>
                                    <div className="items-details">
                                        <h1 className="items-title">{item.title}</h1>
                                        <p className={"items-price"}>${item.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="container-items">
                    <h1 className={"contents-title"}>BEST REVIEWED</h1>
                    <hr className={"horiz-line"}/>
                    {bestReviewedProducts.map((item) => (
                        <div key={item.id} className="content-items-container">
                            <Link to={`/product-detail/${item.id}`}
                                  className={"d-flex align-items-center justify-content-center text-decoration-none text-dark w-100"}>
                                <div className="content-items">
                                    <img src={item.image} alt="item"/>
                                    <div className="items-details">
                                        <h1 className="items-title">{item.title}</h1>
                                        <p className={"items-price"}>${item.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>

                <div className="container-items">
                    <h1 className={"contents-title"}>ON SALE</h1>
                    <hr className={"horiz-line"}/>
                    {onSaleProducts.map((item) => (
                        <div key={item.id} className="content-items-container">
                            <Link to={`/product-detail/${item.id}`}
                                  className={"d-flex align-items-center justify-content-center text-decoration-none text-dark w-100"}>
                                <div className="content-items">
                                    <img src={item.image} alt="item"/>
                                    <div className="items-details">
                                        <h1 className="items-title">{item.title}</h1>
                                        <p className={"items-price"}>
                                            <del className={"on-sale"}>${item.priceOnSale}</del>
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default ItemsList;