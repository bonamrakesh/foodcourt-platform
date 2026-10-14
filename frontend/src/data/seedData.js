export const categories = [
  { id: 'all', label: 'All favourites', icon: '✨' },
  { id: 'indian', label: 'Indian', icon: '🍛' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'burgers', label: 'Burgers', icon: '🍔' },
  { id: 'asian', label: 'Asian', icon: '🍜' },
  { id: 'desserts', label: 'Desserts', icon: '🍰' },
]

export const restaurants = [
  {
    id: 'spice-route', name: 'The Spice Route', cuisine: 'Indian · North & South Indian',
    rating: 4.8, reviews: 320, time: '20–30 min', priceForTwo: 350, category: 'indian',
    badge: 'Customer favourite', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
    description: 'Comforting classics, bold spices, and recipes made with a little extra love.'
  },
  {
    id: 'woodfire-pizza', name: 'Woodfire & Co.', cuisine: 'Italian · Pizza & Pasta',
    rating: 4.7, reviews: 218, time: '25–35 min', priceForTwo: 500, category: 'pizza',
    badge: 'Fresh from the oven', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85',
    description: 'Hand-stretched dough, bubbling cheese, and a crisp wood-fired finish.'
  },
  {
    id: 'smash-club', name: 'Smash Club', cuisine: 'American · Burgers & Fries',
    rating: 4.6, reviews: 184, time: '15–25 min', priceForTwo: 400, category: 'burgers',
    badge: 'Big flavour', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    description: 'Juicy smashed patties, golden fries, and sauces worth talking about.'
  },
  {
    id: 'wok-story', name: 'Wok Story', cuisine: 'Asian · Noodles & Rice',
    rating: 4.7, reviews: 146, time: '20–30 min', priceForTwo: 320, category: 'asian',
    badge: 'Wok-tossed daily', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85',
    description: 'A delicious mix of wok-tossed noodles, rice bowls, and Asian-inspired bites.'
  },
  {
    id: 'sugar-cloud', name: 'Sugar Cloud', cuisine: 'Desserts · Cakes & Shakes',
    rating: 4.9, reviews: 201, time: '15–25 min', priceForTwo: 250, category: 'desserts',
    badge: 'Sweet escape', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    description: 'Little celebrations every day, from creamy cheesecakes to thick shakes.'
  },
  {
    id: 'green-bowl', name: 'Green Bowl Kitchen', cuisine: 'Healthy · Bowls & Wraps',
    rating: 4.5, reviews: 98, time: '15–25 min', priceForTwo: 300, category: 'indian',
    badge: 'Feel-good food', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85',
    description: 'Fresh, colourful bowls and wraps for a bright and balanced meal.'
  }
]

export const foods = [
  { id: 'f1', restaurantId: 'spice-route', name: 'Butter Paneer Bowl', description: 'Soft paneer in a creamy tomato gravy, served with fragrant basmati rice.', price: 229, category: 'indian', tag: 'Bestseller', vegetarian: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=85' },
  { id: 'f2', restaurantId: 'spice-route', name: 'Hyderabadi Chicken Biryani', description: 'Aromatic basmati rice layered with spiced chicken and fresh herbs.', price: 269, category: 'indian', tag: 'Popular', vegetarian: false, image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=85' },
  { id: 'f3', restaurantId: 'spice-route', name: 'Masala Dosa', description: 'Crispy golden dosa with spiced potato, coconut chutney and sambar.', price: 139, category: 'indian', tag: 'Classic', vegetarian: true, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=85' },
  { id: 'f4', restaurantId: 'woodfire-pizza', name: 'Margherita Pizza', description: 'Tomato, mozzarella, basil and a beautifully blistered crust.', price: 249, category: 'pizza', tag: 'Vegetarian', vegetarian: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85' },
  { id: 'f5', restaurantId: 'woodfire-pizza', name: 'Farmhouse Pizza', description: 'A generous mix of peppers, onions, mushrooms and mozzarella.', price: 329, category: 'pizza', tag: 'Fan favourite', vegetarian: true, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85' },
  { id: 'f6', restaurantId: 'smash-club', name: 'Classic Smash Burger', description: 'Double smashed patty, cheddar, pickles and house burger sauce.', price: 249, category: 'burgers', tag: 'Bestseller', vegetarian: false, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85' },
  { id: 'f7', restaurantId: 'smash-club', name: 'Crispy Veg Burger', description: 'Crunchy veggie patty, lettuce and tangy signature sauce.', price: 179, category: 'burgers', tag: 'Vegetarian', vegetarian: true, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=85' },
  { id: 'f8', restaurantId: 'wok-story', name: 'Chilli Garlic Noodles', description: 'Wok-tossed noodles with crunchy vegetables and chilli garlic sauce.', price: 189, category: 'asian', tag: 'Spicy favourite', vegetarian: true, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=85' },
  { id: 'f9', restaurantId: 'wok-story', name: 'Chicken Teriyaki Bowl', description: 'Grilled chicken, steamed rice, sesame and a glossy teriyaki glaze.', price: 259, category: 'asian', tag: 'Popular', vegetarian: false, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=85' },
  { id: 'f10', restaurantId: 'sugar-cloud', name: 'Chocolate Fudge Cake', description: 'Rich chocolate layers with silky ganache and chocolate curls.', price: 169, category: 'desserts', tag: 'Sweet favourite', vegetarian: true, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85' },
  { id: 'f11', restaurantId: 'sugar-cloud', name: 'Strawberry Cheesecake', description: 'Creamy baked cheesecake with a bright strawberry topping.', price: 199, category: 'desserts', tag: 'New', vegetarian: true, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85' },
  { id: 'f12', restaurantId: 'green-bowl', name: 'Rainbow Power Bowl', description: 'Seasonal greens, grains, avocado, crunchy seeds and house dressing.', price: 219, category: 'indian', tag: 'Fresh pick', vegetarian: true, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85' }
]
