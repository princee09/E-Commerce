import React from 'react';
import ProductGrid from '../components/ProductGrid';

const ProductsPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-lg text-gray-600">Discover our complete collection of premium products</p>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductsPage;