'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";

const Homepage = () => {

    const { email, firstName } = useSelector(state => state.user)

    return (
        <div className="min-h-screen bg-gray-50">
            {email}
            {firstName}
            <Header />
            <Hero />
            <ProductCategories />
            <FeaturedProducts />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Homepage;
