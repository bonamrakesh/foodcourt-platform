import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const { count } = useCart()
  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <Link to="/" className="brand" aria-label="Gather and Go home">
          <span className="brand-mark"><UtensilsCrossed size={20} /></span>
          <span>gather<span className="brand-amp">&</span>go<small>FOOD, TOGETHER.</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/restaurants">Explore food</NavLink>
          <a href="/#story">Our story</a>
        </nav>
        <div className="nav-actions">
          <Link className="cart-link" to="/cart"><ShoppingBag size={19} /><span>Cart</span>{count > 0 && <b>{count}</b>}</Link>
          <Link className="nav-cta" to="/restaurants">Order now <ArrowUpRight size={16} /></Link>
        </div>
      </div>
    </header>
  )
}
