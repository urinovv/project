import React from 'react';
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import BestSellingItems from "../components/BestSellingItems";
import Sales from "../components/Sales";
import ItemsList from "../components/ItemsList";
import Reviews from "../components/Reviews";
import LatestPosts from "../components/LatestPosts";
import Brands from "../components/Brands";
import InstaShoplite from "../components/InstaShoplite";
import Footer from "../components/Footer";

function HomeScreen(props) {
    return (
        <section className={"Home"}>
            <Hero/>
            <Categories/>
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