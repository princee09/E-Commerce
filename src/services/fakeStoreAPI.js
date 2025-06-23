import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

class FakeStoreAPI {
  // Get all products
  static async getAllProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  // Get products by category
  static async getProductsByCategory(category) {
    try {
      const response = await axios.get(`${BASE_URL}/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${category} products:`, error);
      return [];
    }
  }

  // Get all categories
  static async getCategories() {
    try {
      const response = await axios.get(`${BASE_URL}/products/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Get single product
  static async getProduct(id) {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }
  }

  // Transform API data to match your current structure
  static transformProduct(apiProduct, targetCategory = null) {
    return {
      id: apiProduct.id,
      name: apiProduct.title,
      price: apiProduct.price,
      originalPrice: apiProduct.price * 1.2, // Add 20% as original price
      image: apiProduct.image,
      category: targetCategory || apiProduct.category,
      description: apiProduct.description,
      rating: apiProduct.rating?.rate || 4.0,
      reviews: apiProduct.rating?.count || 0,
      brand: this.getBrandFromTitle(apiProduct.title),
      inStock: true,
      isFeatured: Math.random() > 0.7, // Randomly mark some as featured
      isNew: Math.random() > 0.8 // Randomly mark some as new
    };
  }

  // Extract brand from product title
  static getBrandFromTitle(title) {
    const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG', 'Generic', 'Premium', 'Elite', 'Pro'];
    return brands[Math.floor(Math.random() * brands.length)];
  }

  // Get transformed products
  static async getTransformedProducts() {
    const products = await this.getAllProducts();
    return products.map(product => this.transformProduct(product));
  }

  // Get transformed products by category
  static async getTransformedProductsByCategory(category) {
    const products = await this.getProductsByCategory(category);
    return products.map(product => this.transformProduct(product));
  }

  // Category mapping from your app categories to API categories
  static getCategoryMapping() {
    return {
      'Electronics': 'electronics',
      'Fashion': ['men\'s clothing', 'women\'s clothing'],
      'Jewelery': 'jewelery', // Replace Home & Garden with accurate category
      'Men\'s Clothing': 'men\'s clothing' // Replace Sports with accurate category
    };
  }

  // Get products for your app categories with expansion to reach target count
  static async getCategoryProducts(appCategory, targetCount = 400) { // Increased to 400
    try {
      const mapping = this.getCategoryMapping();
      let allProducts = [];

      if (appCategory === 'Electronics') {
        const products = await this.getTransformedProductsByCategory('electronics');
        allProducts = products;
      } else if (appCategory === 'Fashion') {
        const menProducts = await this.getTransformedProductsByCategory('men\'s clothing');
        const womenProducts = await this.getTransformedProductsByCategory('women\'s clothing');
        allProducts = [...menProducts, ...womenProducts];
      } else if (appCategory === 'Jewelery') { // Updated from Home & Garden
        const products = await this.getTransformedProductsByCategory('jewelery');
        allProducts = products.map(product => ({
          ...product,
          category: 'Jewelery'
        }));
      } else if (appCategory === 'Men\'s Clothing') { // Updated from Sports
        const products = await this.getTransformedProductsByCategory('men\'s clothing');
        allProducts = products.map(product => ({
          ...product,
          category: 'Men\'s Clothing'
        }));
      }

      // Expand products to reach target count by creating variations
      while (allProducts.length < targetCount && allProducts.length > 0) {
        const originalLength = allProducts.length;
        const needed = Math.min(originalLength, targetCount - allProducts.length);
        
        const variations = allProducts.slice(0, needed).map((product, index) => ({
          ...product,
          id: `${product.id}_var_${Math.floor(allProducts.length / originalLength)}_${index}`,
          name: `${product.name} - ${this.getVariationSuffix()}`,
          price: product.price * (0.8 + Math.random() * 0.4), // Vary price by ±20%
          rating: Math.max(1, Math.min(5, product.rating + (Math.random() - 0.5))), // Vary rating slightly
        }));
        
        allProducts.push(...variations);
      }

      return allProducts.slice(0, targetCount);
    } catch (error) {
      console.error(`Error getting ${appCategory} products:`, error);
      return [];
    }
  }

  // Remove the adaptProductNameForCategory method since we're using accurate categories now
  static getVariationSuffix() {
    const suffixes = ['Pro', 'Plus', 'Deluxe', 'Premium', 'Elite', 'Advanced', 'Standard', 'Classic', 'Modern', 'Compact'];
    return suffixes[Math.floor(Math.random() * suffixes.length)];
  }
}

export default FakeStoreAPI;