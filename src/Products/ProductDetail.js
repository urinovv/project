// import React, {useState} from 'react';
// import '../styles/PruductPage.css';
// import StarIcon from '@mui/icons-material/Star';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Reviews from '../components/Reviews.js';
// import LatestPosts from "../components/LatestPosts.js";
// import Brands from "../components/Brands.js";
// import InstaShoplite from "../components/InstaShoplite.js";
// import Footer from "../components/Footer.js";
// import useShopStore from "../services/store/UseShopStore.js";
// import {useParams} from "react-router-dom";
// import products from "./mockProducts.js";
// import { toast } from 'react-toastify';
// import ReviewsContainerSection from '../components/ReviewsContainerSection.js';
//
// function ProductPage(props) {
//     const {id} = useParams();
//     const product = products.find(prod =>prod.id.toString() === id);
//     const { addToCart, addToFavourites } = useShopStore();
//
//     console.log(product)
//
//     const [count, setCount] = useState(1);
//     const inc = () => setCount((prevCount) => prevCount + 1);
//     const dec = () => setCount((prevCount) => prevCount >= 1 && prevCount - 1);
//
//     return (
//         <section className={"pruduct-page d-flex flex-column align-items-center justify-content-center"}>
//             <div className="pruduct-page-container d-flex flex-column align-items-center justify-content-center">
//                 <div className="pruducts-container d-flex flex-row align-items-start justify-content-center gap-5">
//                     <div
//                         className="pruduct-image-container d-flex flex-row align-items-start justify-content-center w-50 gap-4">
//                         <div className="image-right d-flex align-items-center justify-content-center p-5">
//                             <img src={product.image} alt="Product image" width={"250px"}/>
//                         </div>
//                     </div>
//                     <div
//                         className="pruduct-description-container d-flex flex-column align-items-center justify-content-center w-50">
//                         <div
//                             className="pruduct-header d-flex flex-column align-items-start justify-content-center gap-2">
//                             <h1 className="pruducts-title fw-light m-0">{product.title}</h1>
//                             <p className="pruducts-prices text-warning fw-light fs-3 m-0">${product.price}</p>
//                             <div
//                                 className="stars-container d-flex flex-row align-items-center justify-content-start gap-2">
//                                 <StarIcon className={"text-warning"}/>
//                                 <StarIcon className={"text-warning"}/>
//                                 <StarIcon className={"text-warning"}/>
//                                 <StarIcon className={"text-warning"}/>
//                                 <StarIcon className={"text-warning"}/>
//                             </div>
//                             <p className="pruducts-description m-0">Justo, cum feugiat imperdiet nulla molestie ac
//                                 vulputate scelerisque amet.
//                                 Bibendum adipiscing platea blandit sit sed quam semper rhoncus.</p>
//                         </div>
//                         <hr className="pruducts-divider w-100"/>
//                         <div
//                             className="pruduct-options d-flex flex-column align-items-start justify-content-center w-100 gap-3">
//                             <div
//                                 className="pruduct-quantity d-flex flex-column align-items-start justify-content-center w-100 gap-2">
//                                 <div
//                                     className="pruduct-counter d-flex flex-row align-items-center justify-content-start w-50 gap-3 position-relative">
//                                     <button onClick={dec} className={"counter-btn"}>-</button>
//                                     <button className={"counter-btn w-25"}>{count}</button>
//                                     <button onClick={inc} className={"counter-btn"}>+</button>
//                                 </div>
//                                 <div
//                                     className="pruduct-btns d-flex flex-row align-items-center justify-content-center w-100 gap-3">
//                                     <button
//                                         className={"d-flex align-items-center justify-content-center btn btn-warning text-white text-center p-2 w-75"}>ORDER
//                                         NOW
//                                     </button>
//                                     <button
//                                         onClick={() => {
//                                             addToCart({
//                                                 id: id,
//                                                 title: product.title,
//                                                 image: product.image,
//                                                 price: product.price,
//                                                 qty: count,
//                                             });
//                                             toast.success("🛒 Added to cart successfully!", {
//                                                 position: "bottom-right",
//                                                 autoClose: 4000,
//                                                 hideProgressBar: false,
//                                                 closeOnClick: true,
//                                                 pauseOnHover: true,
//                                                 draggable: true,
//                                                 progress: undefined,
//                                             });
//                                         }}
//                                         className={"d-flex align-items-center justify-content-center btn btn-dark text-white text-center p-2 w-75"}>
//                                         ADD TO CART
//                                     </button>
//
//                                     <button
//                                         onClick={() => {
//                                             addToFavourites(product);
//                                             toast.success("❤️ Added to favourites successfully!", {
//                                             position: "bottom-right",
//                                             autoClose: 4000,
//                                             hideProgressBar: false,
//                                             closeOnClick: true,
//                                             pauseOnHover: true,
//                                             draggable: true,
//                                             progress: undefined,
//                                         });
//                                         }}
//                                         className={" d-flex align-items-center justify-content-center btn btn-dark text-white text-center p-2 w-25 "}>
//                                         <FavoriteBorderIcon/>
//                                     </button>
//                                 </div>
//                             </div>
//                             <hr className="pruducts-divider w-100"/>
//                             <div
//                                 className="pruduct-desc d-flex flex-column align-items-start justify-content-start w-100 gap-2">
//                                 <div
//                                     className="num-of-p d-flex flex-row align-items-center justify-content-start w-100 gap-2">
//                                     <h1 className="p-num fs-4 m-0 fw-bold">SKU:</h1>
//                                     <p className="pr-nums fs-5 m-0 fw-light">1223</p>
//                                 </div>
//                                 <div
//                                     className="category-of-p d-flex flex-row align-items-center justify-content-start w-100 gap-2">
//                                     <h1 className="p-category fs-4 m-0 fw-bold">Category:</h1>
//                                     <p className="pr-categories fs-5 m-0 fw-light">Phone, Screen Touch</p>
//                                 </div>
//                                 <div
//                                     className="tags-of-p d-flex flex-row align-items-center justify-content-start w-100 gap-2">
//                                     <h1 className="p-tags fs-4 m-0 fw-bold">Tags:</h1>
//                                     <p className="pr-tags fs-5 m-0 fw-light">Classic, Modern</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <hr className="pruducts-divider w-90 m-5"/>
//                 <div
//                     className="pruducts-description-container d-flex flex-column align-items-center justify-content-center w-100">
//                     <div
//                         className="pruducts-page-description d-flex flex-column align-items-center justify-content-center w-75">
//                         <h1 className="pruduct-description-header d-flex fs-3 w-100 justify-content-start align-items-center">Pruduct
//                             Description</h1>
//                         <p className="pruduct-description-text">
//                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
//                             Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
//                             Suspendisse urna viverra non, semper suscipit, posuere a, pede.
//                             Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
//                             Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a
//                             lectus.
//                             Donec consectetuer ligula vulputate sem tristique cursus.
//                             {/*<ul>*/}
//                             {/*    <li>*/}
//                             {/*        Donec nec justo eget felis facilisis fermentum.*/}
//                             {/*    </li>*/}
//                             {/*    <li>*/}
//                             {/*        Suspendisse urna viverra non, semper suscipit pede.*/}
//                             {/*    </li>*/}
//                             {/*</ul>*/}
//                             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
//                             Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
//                             Suspendisse urna viverra non, semper suscipit, posuere a, pede.
//                             Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
//                             Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a
//                             lectus.
//                             Donec consectetuer ligula vulputate sem tristique cursus.
//                         </p>
//                     </div>
//
//                     <hr className="pruducts-divider w-90 m-5"/>
//
//                     <ReviewsContainerSection/>
//                     <hr/>
//                 </div>
//             </div>
//             <Reviews/>
//             <LatestPosts/>
//             <Brands/>
//             <InstaShoplite/>
//             <Footer/>
//         </section>
//     );
// }
//
// export default ProductPage;


import React, {useState} from 'react';
import '../styles/PruductPage.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Reviews from '../components/Reviews.js';
import LatestPosts from "../components/LatestPosts.js";
import Brands from "../components/Brands.js";
import InstaShoplite from "../components/InstaShoplite.js";
import Footer from "../components/Footer.js";
import useShopStore from "../services/store/UseShopStore.js";
import {useParams, useNavigate} from "react-router-dom";
import products from "./mockProducts.js";
import { toast } from 'react-toastify';
import ReviewsContainerSection from '../components/ReviewsContainerSection.js';

function ProductPage({ user }) {  // 👈 user prop qo'shildi
    const {id} = useParams();
    const navigate = useNavigate(); // 👈 navigate hook
    const product = products.find(prod =>prod.id.toString() === id);
    const { addToCart, addToFavourites } = useShopStore();

    const [count, setCount] = useState(1);
    const inc = () => setCount((prevCount) => prevCount + 1);
    const dec = () => setCount((prevCount) => prevCount >= 1 && prevCount - 1);

    const handleAddToCart = () => {
        if (!user) {
            navigate("/login"); // Login bo'lmagan foydalanuvchi login sahifasiga yo'naltiriladi
            return;
        }
        addToCart({
            id: id,
            title: product.title,
            image: product.image,
            price: product.price,
            qty: count,
        });
        toast.success("🛒 Added to cart successfully!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleAddToFavourites = () => {
        if (!user) {
            navigate("/login");
            return;
        }
        addToFavourites(product);
        toast.success("❤️ Added to favourites successfully!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <section className={"pruduct-page d-flex flex-column align-items-center justify-content-center"}>
            <div className="pruduct-page-container d-flex flex-column align-items-center justify-content-center">
                <div className="pruducts-container d-flex flex-row align-items-start justify-content-center gap-5">
                    <div className="pruduct-image-container d-flex flex-row align-items-start justify-content-center w-50 gap-4">
                        <div className="image-right d-flex align-items-center justify-content-center p-5">
                            <img src={product.image} alt="Product image" width={"250px"}/>
                        </div>
                    </div>
                    <div className="pruduct-description-container d-flex flex-column align-items-center justify-content-center w-50">
                        <div className="pruduct-header d-flex flex-column align-items-start justify-content-center gap-2">
                            <h1 className="pruducts-title fw-light m-0">{product.title}</h1>
                            <p className="pruducts-prices text-warning fw-light fs-3 m-0">${product.price}</p>
                            <div className="stars-container d-flex flex-row align-items-center justify-content-start gap-2">
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                                <StarIcon className={"text-warning"}/>
                            </div>
                            <p className="pruducts-description m-0">Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus.</p>
                        </div>
                        <hr className="pruducts-divider w-100"/>
                        <div className="pruduct-options d-flex flex-column align-items-start justify-content-center w-100 gap-3">
                            <div className="pruduct-quantity d-flex flex-column align-items-start justify-content-center w-100 gap-2">
                                <div className="pruduct-counter d-flex flex-row align-items-center justify-content-start w-50 gap-3 position-relative">
                                    <button onClick={dec} className={"counter-btn"}>-</button>
                                    <button className={"counter-btn w-25"}>{count}</button>
                                    <button onClick={inc} className={"counter-btn"}>+</button>
                                </div>
                                <div className="pruduct-btns d-flex flex-row align-items-center justify-content-center w-100 gap-3">
                                    <button className={"d-flex align-items-center justify-content-center btn btn-warning text-white text-center p-2 w-75"}>ORDER NOW</button>

                                    <button
                                        onClick={handleAddToCart}  // 👈 yangi funksiyani ishlatish
                                        className={"d-flex align-items-center justify-content-center btn btn-dark text-white text-center p-2 w-75"}>
                                        ADD TO CART
                                    </button>

                                    <button
                                        onClick={handleAddToFavourites} // 👈 yangi funksiyani ishlatish
                                        className={"d-flex align-items-center justify-content-center btn btn-dark text-white text-center p-2 w-25"}>
                                        <FavoriteBorderIcon/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="pruducts-divider w-90 m-5"/>
                <div className="pruducts-description-container d-flex flex-column align-items-center justify-content-center w-100">
                    <div className="pruducts-page-description d-flex flex-column align-items-center justify-content-center w-75">
                        <h1 className="pruduct-description-header d-flex fs-3 w-100 justify-content-start align-items-center">Product Description</h1>
                        <p className="pruduct-description-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                    </div>

                    <hr className="pruducts-divider w-90 m-5"/>

                    <ReviewsContainerSection/>
                    <hr/>
                </div>
            </div>
            <Reviews/>
            <LatestPosts/>
            <Brands/>
            <InstaShoplite/>
            <Footer/>
        </section>
    );
}

export default ProductPage;
