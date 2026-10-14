import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, SlidersHorizontal, ArrowUpRight } from 'lucide-react'
import RestaurantCard from '../components/RestaurantCard.jsx'
import FoodCard from '../components/FoodCard.jsx'
import { categories, foods, restaurants } from '../data/seedData.js'

export default function Restaurants() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState(params.get('search') || '')
  const [category, setCategory] = useState(params.get('category') || 'all')
  const [showFood, setShowFood] = useState(false)
  const q = search.trim().toLowerCase()
  const filteredRestaurants = useMemo(() => restaurants.filter(r =>
    (category === 'all' || r.category === category) &&
    (!q || `${r.name} ${r.cuisine} ${r.description}`.toLowerCase().includes(q))
  ), [category, q])
  const filteredFoods = useMemo(() => foods.filter(f =>
    (category === 'all' || f.category === category) &&
    (!q || `${f.name} ${f.description}`.toLowerCase().includes(q))
  ), [category, q])

  return <section className="listing-page container">
    <div className="listing-heading"><span className="eyebrow">THE FOOD COURT, REIMAGINED</span><h1>Find your <span>kind of delicious.</span></h1><p>Explore local favourites, try something new, and follow your appetite.</p></div>
    <div className="listing-tools">
      <label className="listing-search"><Search size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search restaurants or dishes..." /></label>
      <button className={`filter-toggle ${showFood ? 'active' : ''}`} onClick={() => setShowFood(!showFood)}><SlidersHorizontal size={17} /> {showFood ? 'Show restaurants' : 'Show dishes'}</button>
    </div>
    <div className="category-pills listing-categories">{categories.map(c => <button key={c.id} onClick={() => setCategory(c.id)} className={`category-pill ${category === c.id ? 'selected' : ''}`}><span>{c.icon}</span>{c.label}</button>)}</div>
    {showFood ? <>
      <div className="listing-subhead"><div><h2>Dishes to fall for</h2><p>{filteredFoods.length} delicious finds</p></div></div>
      {filteredFoods.length ? <div className="food-grid">{filteredFoods.map(f => <FoodCard key={f.id} food={f} />)}</div> : <EmptyState />}
    </> : <>
      <div className="listing-subhead"><div><h2>All kitchens</h2><p>{filteredRestaurants.length} places worth a visit</p></div><span className="sort-note">Curated for good taste <ArrowUpRight size={14} /></span></div>
      {filteredRestaurants.length ? <div className="restaurant-grid">{filteredRestaurants.map(r => <RestaurantCard key={r.id} restaurant={r} />)}</div> : <EmptyState />}
    </>}
  </section>
}

function EmptyState() {
  return <div className="empty-state"><span>🍽️</span><h3>No matches just yet</h3><p>Try another search or choose a different category.</p><Link to="/restaurants">Clear your search <ArrowUpRight size={15} /></Link></div>
}
