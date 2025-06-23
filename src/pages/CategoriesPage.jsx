import React from 'react';
import FeaturedCategories from '../components/FeaturedCategories';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Categories</h1>
          <p className="text-lg text-gray-600">Browse products by category</p>
        </div>
        <FeaturedCategories />
      </div>
    </div>
  );
};

export default CategoriesPage;