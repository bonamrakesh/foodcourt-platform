// Server-owned menu prices are used to validate totals at checkout.
// Keep these entries in sync with frontend/src/data/seedData.js.
export const restaurants = [
  { id: 'spice-route', name: 'The Spice Route', cuisine: 'Indian · North & South Indian', rating: 4.8, time: '20–30 min', category: 'indian' },
  { id: 'woodfire-pizza', name: 'Woodfire & Co.', cuisine: 'Italian · Pizza & Pasta', rating: 4.7, time: '25–35 min', category: 'pizza' },
  { id: 'smash-club', name: 'Smash Club', cuisine: 'American · Burgers & Fries', rating: 4.6, time: '15–25 min', category: 'burgers' },
  { id: 'wok-story', name: 'Wok Story', cuisine: 'Asian · Noodles & Rice', rating: 4.7, time: '20–30 min', category: 'asian' },
  { id: 'sugar-cloud', name: 'Sugar Cloud', cuisine: 'Desserts · Cakes & Shakes', rating: 4.9, time: '15–25 min', category: 'desserts' },
  { id: 'green-bowl', name: 'Green Bowl Kitchen', cuisine: 'Healthy · Bowls & Wraps', rating: 4.5, time: '15–25 min', category: 'indian' }
]
export const foods = [
  { id: 'f1', restaurantId: 'spice-route', name: 'Butter Paneer Bowl', price: 229 },
  { id: 'f2', restaurantId: 'spice-route', name: 'Hyderabadi Chicken Biryani', price: 269 },
  { id: 'f3', restaurantId: 'spice-route', name: 'Masala Dosa', price: 139 },
  { id: 'f4', restaurantId: 'woodfire-pizza', name: 'Margherita Pizza', price: 249 },
  { id: 'f5', restaurantId: 'woodfire-pizza', name: 'Farmhouse Pizza', price: 329 },
  { id: 'f6', restaurantId: 'smash-club', name: 'Classic Smash Burger', price: 249 },
  { id: 'f7', restaurantId: 'smash-club', name: 'Crispy Veg Burger', price: 179 },
  { id: 'f8', restaurantId: 'wok-story', name: 'Chilli Garlic Noodles', price: 189 },
  { id: 'f9', restaurantId: 'wok-story', name: 'Chicken Teriyaki Bowl', price: 259 },
  { id: 'f10', restaurantId: 'sugar-cloud', name: 'Chocolate Fudge Cake', price: 169 },
  { id: 'f11', restaurantId: 'sugar-cloud', name: 'Strawberry Cheesecake', price: 199 },
  { id: 'f12', restaurantId: 'green-bowl', name: 'Rainbow Power Bowl', price: 219 }
]
