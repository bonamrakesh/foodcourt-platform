import { ArrowRight, ArrowUpRight, BadgeCheck, ChefHat, Clock3, Search, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import RestaurantCard from '../components/RestaurantCard.jsx'
import FoodCard from '../components/FoodCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { categories, foods, restaurants } from '../data/seedData.js'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const popularFoods = [foods[1], foods[3], foods[5], foods[9]]
  const submitSearch = (e) => { e.preventDefault(); navigate(`/restaurants?search=${encodeURIComponent(query)}`) }

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker"><Sparkles size={15} /> YOUR NEW FOOD HAPPY PLACE</div>
            <h1>Good food.<br /><span>Great company.</span></h1>
            <p className="hero-description">All your cravings, all in one place. Discover brilliant local kitchens and get the good stuff delivered to your table.</p>
            <form className="hero-search" onSubmit={submitSearch}>
              <Search size={19} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Pizza, biryani, burgers..." aria-label="Search restaurants and food" />
              <button type="submit">Find food <ArrowRight size={16} /></button>
            </form>
            <div className="hero-trust"><span><BadgeCheck size={16} /> Handpicked kitchens</span><span><Clock3 size={16} /> Easy ordering</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-main"><img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90" alt="Colourful fresh food spread" /></div>
            <div className="floating-note"><span className="note-icon">✦</span><div><strong>Made for your mood</strong><small>Find your next favourite</small></div></div>
            <div className="hero-stamp"><span>GOOD</span><span>FOOD</span><span>ONLY ↗</span></div>
          </div>
        </div>
        <div className="hero-bottom-shape" />
      </section>

      <section className="container category-strip">
        <div className="category-intro"><span className="eyebrow">WHAT ARE YOU CRAVING?</span><h2>Pick your mood.</h2></div>
        <div className="category-pills">{categories.filter(c => c.id !== 'all').map(category => <Link key={category.id} to={`/restaurants?category=${category.id}`} className="category-pill"><span>{category.icon}</span>{category.label}<ArrowUpRight size={14} /></Link>)}</div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="THE NEIGHBOURHOOD FAVOURITES" title="Good places. Great plates." description="Meet the kitchens everyone keeps coming back to." action={<Link className="text-link" to="/restaurants">Explore all <ArrowRight size={16} /></Link>} />
        <div className="restaurant-grid">{restaurants.slice(0, 3).map(r => <RestaurantCard key={r.id} restaurant={r} />)}</div>
      </section>

      <section className="popular-section">
        <div className="container section">
          <SectionHeading eyebrow="A LITTLE SOMETHING DELICIOUS" title="The current cravings." description="The dishes making it very hard to choose just one." action={<Link className="text-link" to="/restaurants">See the menu <ArrowRight size={16} /></Link>} />
          <div className="food-grid">{popularFoods.map(food => <FoodCard key={food.id} food={food} />)}</div>
        </div>
      </section>

      <section className="container promise-section">
        <div className="promise-copy"><span className="eyebrow">A BETTER WAY TO EAT TOGETHER</span><h2>Your cravings called.<br /><span>We made it easy.</span></h2><p>Skip the endless searching. Discover different kitchens, find the dish that hits the spot, and make mealtime the best part of your day.</p><Link className="button-dark" to="/restaurants">Let's find your food <ArrowRight size={17} /></Link></div>
        <div className="promise-cards"><div className="promise-card"><span className="promise-icon orange"><ChefHat /></span><h3>Good kitchens</h3><p>Thoughtfully picked spots with something worth sharing.</p></div><div className="promise-card"><span className="promise-icon green"><Clock3 /></span><h3>Less fuss</h3><p>A clear menu and a smoother way to order.</p></div></div>
      </section>
      <section className="bottom-cta"><div className="container bottom-cta-inner"><div><span className="eyebrow">YOUR NEXT FAVOURITE IS HERE</span><h2>Come hungry. Leave happy.</h2></div><Link to="/restaurants" className="button-light">Explore the food court <ArrowUpRight size={17} /></Link></div></section>
    </>
  )
}
