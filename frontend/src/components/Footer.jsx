import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer" id="story">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand brand-light"><span className="brand-mark"><MapPin size={20} /></span><span>gather<span className="brand-amp">&</span>go<small>FOOD, TOGETHER.</small></span></Link>
          <p>Good food tastes even better when it brings people together.</p>
        </div>
        <div className="footer-column"><h4>Explore</h4><Link to="/restaurants">All restaurants</Link><Link to="/cart">Your cart</Link><Link to="/checkout">Checkout</Link></div>
        <div className="footer-column"><h4>Made for food lovers</h4><span>Fresh finds, local favourites</span><span>One happy place to order</span><a href="https://instagram.com" target="_blank" rel="noreferrer">
  Follow along <ArrowUpRight size={14} />
</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Gather & Go. Made with appetite.</span><span>Good food. Good mood. <ArrowUpRight size={14} /></span></div>
    </footer>
  )
}
