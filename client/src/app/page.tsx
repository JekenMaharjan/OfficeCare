import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SpecialOffers from '@/components/SpecialOffers';
import TrustIndicators from '@/components/TrustIndicators';
import React from 'react';

const Index = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <HeroSection />
            <CategoriesSection />
            <FeaturedProducts />
            <SpecialOffers />
            <TrustIndicators />
            <Footer />
        </div>
    );
};

export default Index;
