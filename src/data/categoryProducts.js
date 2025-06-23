const electronicsProducts = [
  'Smartphone', 'Laptop', 'Tablet', 'Smartwatch', 'Headphones', 'Speaker', 'Camera', 'Gaming Console',
  'Monitor', 'Keyboard', 'Mouse', 'Webcam', 'Microphone', 'Router', 'Power Bank', 'Charger',
  'Smart TV', 'Soundbar', 'Earbuds', 'Fitness Tracker', 'Drone', 'VR Headset', 'Smart Home Hub',
  'Security Camera', 'Smart Doorbell', 'Smart Light', 'Smart Plug', 'Bluetooth Speaker', 'Portable Projector',
  'Gaming Keyboard', 'Gaming Mouse', 'Graphics Card', 'Processor', 'RAM', 'SSD', 'Hard Drive',
  'Motherboard', 'Power Supply', 'Cooling Fan', 'USB Cable', 'HDMI Cable', 'Wireless Charger',
  'Smart Ring', 'Action Camera', 'Dash Cam', 'Electric Toothbrush', 'Hair Dryer', 'Electric Shaver', 'Air Purifier',
  'Robot Vacuum', 'Smart Scale', 'Digital Photo Frame', 'Portable Speaker', 'Wireless Mouse', 'Mechanical Keyboard',
  'Gaming Headset', 'Webcam HD', 'USB Hub', 'External Battery', 'Car Charger', 'Wireless Earphones',
  'Smart Thermostat', 'Security System', 'Smart Lock', 'Video Doorbell', 'Smart Bulb', 'Smart Switch',
  'Tablet Stand', 'Phone Case', 'Screen Protector', 'Laptop Bag', 'Phone Holder', 'Cable Organizer'
];

const fashionProducts = [
  'T-Shirt', 'Jeans', 'Dress', 'Jacket', 'Sweater', 'Shoes', 'Sneakers', 'Boots', 'Sandals',
  'Handbag', 'Backpack', 'Wallet', 'Belt', 'Watch', 'Sunglasses', 'Hat', 'Scarf', 'Gloves',
  'Shirt', 'Blouse', 'Skirt', 'Pants', 'Shorts', 'Hoodie', 'Cardigan', 'Blazer', 'Coat',
  'Lingerie', 'Socks', 'Tie', 'Jewelry', 'Ring', 'Necklace', 'Earrings', 'Bracelet',
  'Polo Shirt', 'Tank Top', 'Leggings', 'Joggers', 'Sweatshirt', 'Vest', 'Kimono', 'Jumpsuit',
  'High Heels', 'Flats', 'Loafers', 'Slippers', 'Clutch', 'Tote Bag', 'Crossbody Bag', 'Fanny Pack',
  'Denim Jacket', 'Leather Jacket', 'Windbreaker', 'Puffer Jacket', 'Trench Coat', 'Peacoat',
  'Maxi Dress', 'Mini Dress', 'Cocktail Dress', 'Evening Gown', 'Casual Dress', 'Work Dress',
  'Running Shoes', 'Dress Shoes', 'Casual Shoes', 'Hiking Boots', 'Rain Boots', 'Snow Boots'
];

const homeGardenProducts = [
  'Sofa', 'Chair', 'Table', 'Bed', 'Mattress', 'Pillow', 'Blanket', 'Curtains', 'Rug',
  'Lamp', 'Mirror', 'Picture Frame', 'Vase', 'Plant Pot', 'Garden Tools', 'Watering Can',
  'Outdoor Furniture', 'BBQ Grill', 'Garden Hose', 'Fertilizer', 'Seeds', 'Planters',
  'Kitchen Utensils', 'Cookware', 'Dinnerware', 'Storage Boxes', 'Organizers', 'Cleaning Supplies',
  'Coffee Table', 'Bookshelf', 'Wardrobe', 'Nightstand', 'Dining Set', 'Bar Stool', 'Ottoman',
  'Ceiling Fan', 'Wall Clock', 'Candles', 'Throw Pillows', 'Garden Bench', 'Patio Umbrella',
  'Flower Seeds', 'Lawn Mower', 'Hedge Trimmer', 'Sprinkler', 'Garden Gloves', 'Compost Bin', 'Bird Feeder',
  'Kitchen Island', 'Pantry Cabinet', 'Spice Rack', 'Cutting Board', 'Knife Set', 'Blender',
  'Coffee Maker', 'Toaster', 'Microwave', 'Refrigerator', 'Dishwasher', 'Washing Machine',
  'Dryer', 'Vacuum Cleaner', 'Iron', 'Ironing Board', 'Laundry Basket', 'Hangers'
];

const sportsProducts = [
  'Running Shoes', 'Yoga Mat', 'Dumbbells', 'Resistance Bands', 'Tennis Racket', 'Basketball',
  'Football', 'Soccer Ball', 'Baseball Glove', 'Golf Clubs', 'Bicycle', 'Helmet', 'Skateboard',
  'Swimming Goggles', 'Workout Clothes', 'Sports Bag', 'Water Bottle', 'Protein Shaker',
  'Fitness Tracker', 'Jump Rope', 'Exercise Bike', 'Treadmill', 'Weight Bench', 'Kettlebell',
  'Boxing Gloves', 'Martial Arts Gear', 'Camping Gear', 'Hiking Boots', 'Backpack', 'Tent',
  'Sleeping Bag', 'Fishing Rod', 'Badminton Racket', 'Volleyball', 'Ping Pong Paddle', 'Roller Skates',
  'Snowboard', 'Ski Equipment', 'Climbing Gear', 'Cycling Shorts', 'Sports Bra', 'Compression Wear',
  'Athletic Socks', 'Sweatband', 'Gym Towel', 'Foam Roller', 'Medicine Ball', 'Pull-up Bar', 'Ab Wheel', 'Agility Ladder',
  'Punching Bag', 'Speed Bag', 'Wrestling Mat', 'Gymnastics Equipment', 'Track Spikes', 'Cleats',
  'Shin Guards', 'Knee Pads', 'Elbow Pads', 'Wrist Guards', 'Mouth Guard', 'Athletic Tape',
  'Ice Pack', 'Heating Pad', 'Massage Ball', 'Stretching Strap', 'Balance Board', 'Stability Ball'
];

const brands = {
  Electronics: ['Apple', 'Samsung', 'Sony', 'LG', 'HP', 'Dell', 'Asus', 'Lenovo', 'Canon', 'Nikon'],
  Fashion: ['Nike', 'Adidas', 'Zara', 'H&M', 'Levis', 'Puma', 'Reebok', 'Forever21', 'Gap', 'Uniqlo'],
  'Home & Garden': ['IKEA', 'HomeDepot', 'Wayfair', 'Target', 'Walmart', 'Lowes', 'Ashley', 'West Elm'],
  Sports: ['Nike', 'Adidas', 'Under Armour', 'Puma', 'Reebok', 'New Balance', 'ASICS', 'Wilson', 'Spalding']
};

// Category-specific Unsplash image collections for accurate product images
const getCategoryImage = (category, productName, index) => {
  const imageQueries = {
    Electronics: {
      'Smartphone': 'smartphone-mobile-phone',
      'Laptop': 'laptop-computer',
      'Tablet': 'tablet-ipad',
      'Smartwatch': 'smartwatch-apple-watch',
      'Headphones': 'headphones-audio',
      'Speaker': 'bluetooth-speaker',
      'Camera': 'camera-photography',
      'Gaming Console': 'gaming-console-playstation',
      'Monitor': 'computer-monitor-screen',
      'Keyboard': 'computer-keyboard',
      'Mouse': 'computer-mouse',
      'Webcam': 'webcam-camera',
      'Microphone': 'microphone-audio',
      'Router': 'wifi-router',
      'Power Bank': 'power-bank-battery',
      'Charger': 'phone-charger',
      'Smart TV': 'smart-tv-television',
      'Soundbar': 'soundbar-speaker',
      'Earbuds': 'wireless-earbuds',
      'Fitness Tracker': 'fitness-tracker-band',
      'Drone': 'drone-quadcopter',
      'VR Headset': 'vr-headset-virtual-reality'
    },
    Fashion: {
      'T-Shirt': 'tshirt-clothing',
      'Jeans': 'jeans-denim',
      'Dress': 'dress-fashion',
      'Jacket': 'jacket-coat',
      'Sweater': 'sweater-knitwear',
      'Shoes': 'shoes-footwear',
      'Sneakers': 'sneakers-athletic-shoes',
      'Boots': 'boots-footwear',
      'Sandals': 'sandals-summer-shoes',
      'Handbag': 'handbag-purse',
      'Backpack': 'backpack-bag',
      'Wallet': 'wallet-leather',
      'Belt': 'leather-belt',
      'Watch': 'wristwatch-timepiece',
      'Sunglasses': 'sunglasses-eyewear',
      'Hat': 'hat-cap',
      'Scarf': 'scarf-winter-accessory',
      'Gloves': 'gloves-winter'
    },
    'Home & Garden': {
      'Sofa': 'sofa-couch-furniture',
      'Chair': 'chair-furniture',
      'Table': 'table-furniture',
      'Bed': 'bed-bedroom-furniture',
      'Mattress': 'mattress-bed',
      'Pillow': 'pillow-bedding',
      'Blanket': 'blanket-bedding',
      'Curtains': 'curtains-window-treatment',
      'Rug': 'rug-carpet',
      'Lamp': 'lamp-lighting',
      'Mirror': 'mirror-home-decor',
      'Picture Frame': 'picture-frame',
      'Vase': 'vase-home-decor',
      'Plant Pot': 'plant-pot-planter',
      'Garden Tools': 'garden-tools-gardening',
      'Watering Can': 'watering-can-garden',
      'Outdoor Furniture': 'outdoor-patio-furniture',
      'BBQ Grill': 'bbq-grill-barbecue'
    },
    Sports: {
      'Running Shoes': 'running-shoes-athletic',
      'Yoga Mat': 'yoga-mat-exercise',
      'Dumbbells': 'dumbbells-weights',
      'Resistance Bands': 'resistance-bands-fitness',
      'Tennis Racket': 'tennis-racket-sport',
      'Basketball': 'basketball-sport',
      'Football': 'american-football',
      'Soccer Ball': 'soccer-ball-football',
      'Baseball Glove': 'baseball-glove',
      'Golf Clubs': 'golf-clubs-sport',
      'Bicycle': 'bicycle-bike',
      'Helmet': 'sports-helmet-safety',
      'Skateboard': 'skateboard-sport',
      'Swimming Goggles': 'swimming-goggles',
      'Workout Clothes': 'athletic-wear-sportswear',
      'Sports Bag': 'sports-bag-gym-bag',
      'Water Bottle': 'water-bottle-hydration',
      'Protein Shaker': 'protein-shaker-bottle'
    }
  };

  const categoryQueries = imageQueries[category];
  if (categoryQueries && categoryQueries[productName]) {
    return `https://images.unsplash.com/photo-${1500000000 + index}?w=500&h=500&fit=crop&q=80&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  }
  
  // Fallback to category-specific images
  const fallbackImages = {
    Electronics: `https://images.unsplash.com/photo-${1500000000 + index}?w=500&h=500&fit=crop&q=80&auto=format&ixlib=rb-4.0.3`,
    Fashion: `https://images.unsplash.com/photo-${1600000000 + index}?w=500&h=500&fit=crop&q=80&auto=format&ixlib=rb-4.0.3`,
    'Home & Garden': `https://images.unsplash.com/photo-${1700000000 + index}?w=500&h=500&fit=crop&q=80&auto=format&ixlib=rb-4.0.3`,
    Sports: `https://images.unsplash.com/photo-${1800000000 + index}?w=500&h=500&fit=crop&q=80&auto=format&ixlib=rb-4.0.3`
  };
  
  return fallbackImages[category] || fallbackImages.Electronics;
};

import FakeStoreAPI from '../services/fakeStoreAPI.js';

// Generate products for a specific category using Fake Store API
export const generateCategoryProducts = async (category, count = 200) => {
  try {
    return await FakeStoreAPI.getCategoryProducts(category, count);
  } catch (error) {
    console.error(`Error generating ${category} products:`, error);
    return [];
  }
};

// Get all available categories
export const getCategories = async () => {
  try {
    return ['Electronics', 'Fashion', 'Home & Garden', 'Sports'];
  } catch (error) {
    console.error('Error getting categories:', error);
    return ['Electronics', 'Fashion', 'Home & Garden', 'Sports'];
  }
};

// Remove the duplicate getCategoryImage function at line 186
// Keep only the one at line 51