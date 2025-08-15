import React from 'react';
import Hero from "../components/Hero.js";
import BestSellingItems from "../components/BestSellingItems.js";
import Sales from "../components/Sales.js";
import ItemsList from "../components/ItemsList.js";
import Reviews from "../components/Reviews.js";
import LatestPosts from "../components/LatestPosts.js";
import Brands from "../components/Brands.js";
import InstaShoplite from "../components/InstaShoplite.js";
import Footer from "../components/Footer.js";

function HomeScreen(props) {
    return (
        <section className={"Home"}>
            <Hero/>
            <BestSellingItems/>
            <Sales/>
            <ItemsList/>
            <Reviews/>
            <LatestPosts/>
            <Brands/>
            <InstaShoplite/>
            <Footer/>
        </section>
    );
}

export default HomeScreen;