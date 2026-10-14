import { ArrowUpRight, Clock3, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function RestaurantCard({ restaurant, featured = false }) {
  return (
    <Link className={`restaurant-card ${featured ? 'restaurant-card-featured' : ''}`} to={`/restaurants/${restaurant.id}`}>
      <div className="restaurant-image-wrap">
        <img src={restaurant.image} alt={restaurant.name} loading="lazy" />
        <span className="image-badge">{restaurant.badge}</span>
        <span className="image-arrow"><ArrowUpRight size={18} /></span>
      </div>
      <div className="restaurant-card-body">
        <div className="restaurant-title-row"><h3>{restaurant.name}</h3><span className="rating"><Star size={14} fill="currentColor" /> {restaurant.rating}</span></div>
        <p className="cuisine">{restaurant.cuisine}</p>
        <div className="restaurant-meta"><span><Clock3 size={14} /> {restaurant.time}</span><span>₹{restaurant.priceForTwo} for two</span></div>
      </div>
    </Link>
  )
}
