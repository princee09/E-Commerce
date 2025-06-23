import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import FeaturedCategories from '../components/FeaturedCategories';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedCategories />
      <ProductGrid />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;