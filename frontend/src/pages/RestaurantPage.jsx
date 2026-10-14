import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock3, Star, MapPin } from 'lucide-react'
import { restaurants, foods } from '../data/seedData.js'
import FoodCard from '../components/FoodCard.jsx'
import NotFound from './NotFound.jsx'

export default function RestaurantPage() {
  const { restaurantId } = useParams()
  const restaurant = restaurants.find(r => r.id === restaurantId)
  if (!restaurant) return <NotFound />
  const menu = foods.filter(f => f.restaurantId === restaurant.id)
  return <section className="restaurant-page container">
    <Link to="/restaurants" className="back-link"><ArrowLeft size={16} /> All kitchens</Link>
    <div className="restaurant-hero">
      <img src={restaurant.image} alt={restaurant.name} />
      <div className="restaurant-hero-overlay" />
      <div className="restaurant-hero-content"><span className="eyebrow">{restaurant.badge}</span><h1>{restaurant.name}</h1><p>{restaurant.description}</p><div className="restaurant-hero-meta"><span><Star size={15} fill="currentColor" /> {restaurant.rating} ({restaurant.reviews}+ reviews)</span><span><Clock3 size={15} /> {restaurant.time}</span><span><MapPin size={15} /> Food court favourite</span></div></div>
    </div>
    <div className="menu-heading"><div><span className="eyebrow">MADE FRESH, ORDERED WITH LOVE</span><h2>What's on the menu?</h2></div><span className="menu-count">{menu.length} dishes</span></div>
    {menu.length ? <div className="food-grid">{menu.map(food => <FoodCard key={food.id} food={food} />)}</div> : <p>Menu coming soon.</p>}
  </section>
}
