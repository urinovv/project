import React, { useState } from 'react';
import '../styles/Favourites.css';
import { NavLink, Link } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import useShopStore from "../services/store/UseShopStore";

function Favourites() {
    const favourites = useShopStore(state => state.favourites);
    const removeFromFavourites = useShopStore(state => state.removeFromFavourites);
    const clearAllFavourites = useShopStore(state => state.clearAllFavourites);

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="favourites d-flex flex-column align-items-center justify-content-center">
            <div className="favourites-container d-flex flex-column align-items-center justify-content-start">
                <div className="d-flex flex-column align-items-center justify-content-center w-100 h-auto p-5">
                    <h1>Favourites</h1>
                    <div className="d-flex flex-row align-items-start justify-content-center w-100 gap-3">
                        <NavLink to={`/`} className="text-decoration-none text-dark">Home</NavLink>
                        <p> > </p>
                        <NavLink to={`/favourites`} className="text-decoration-underline text-dark">Favourites</NavLink>
                    </div>
                </div>

                {favourites.length === 0 ? (
                    <p className="empty-text fs-4 fw-light mt-5">No Favourites yet</p>
                ) : (
                    <>
                        <div className="w-100 d-flex justify-content-end pe-5">
                            <button
                                className="clear-all-btn btn btn-outline-danger mb-4"
                                onClick={() => setShowModal(true)}
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="fav-items-wrapper d-flex flex-row flex-wrap align-items-start justify-content-center gap-5">
                            {favourites.map((item) => (
                                <div key={item.id} className="fav-items d-flex flex-column align-items-center justify-content-center">
                                    <Link to={`/product-detail/${item.id}`} className="text-decoration-none text-dark">
                                        <div className="fav-items-container d-flex flex-column align-items-center justify-content-center gap-1">
                                            <img src={item.image} alt={item.title} />
                                            <div className="fav-items-text d-flex flex-column align-items-center justify-content-center">
                                                <h1 className="d-flex fs-5 m-0 fw-light">{item.title}</h1>
                                                <p className="d-flex text-warning m-0 fs-6 fw-light">${item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="d-flex gap-2">
                                        <button className="m-2 bg-transparent">
                                            <FaHeart className="fav-heart text-danger fs-4" />
                                        </button>
                                        <button
                                            className="m-2 bg-transparent text-danger"
                                            onClick={() => removeFromFavourites(item.id)}
                                        >
                                            <FaTrash className="fs-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h4 className={"text-white"}>Clear all favourites?</h4>
                        <p>This action cannot be undone.</p>
                        <div className="modal-actions">
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    clearAllFavourites();
                                    setShowModal(false);
                                }}
                            >
                                Yes, clear all
                            </button>
                            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Favourites;
