import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const money = (n) => `₹${n.toLocaleString('en-IN')}`

export default function Cart() {
  const { items, subtotal, changeQuantity, removeItem } = useCart()
  const delivery = subtotal > 0 ? 25 : 0
  return <section className="container cart-page">
    <Link to="/restaurants" className="back-link"><ArrowLeft size={16} /> Keep exploring</Link>
    <div className="cart-heading"><span className="eyebrow">YOUR GOOD STUFF</span><h1>Your bag, <span>your call.</span></h1><p>Everything you're craving, all in one place.</p></div>
    {!items.length ? <div className="empty-cart"><span className="empty-cart-icon"><ShoppingBag size={30} /></span><h2>Your bag is taking a little break.</h2><p>Let's fix that with something delicious.</p><Link to="/restaurants" className="button-dark">Explore food <ArrowRight size={16} /></Link></div> :
      <div className="cart-layout"><div className="cart-items">{items.map(item => <article className="cart-item" key={item.id}><img src={item.image} alt={item.name} /><div className="cart-item-info"><h3>{item.name}</h3><p>{item.description}</p><strong>{money(item.price)}</strong><button className="remove-link" onClick={() => removeItem(item.id)}><Trash2 size={14} /> Remove</button></div><div className="quantity-control"><button onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity"><Plus size={14} /></button></div></article>)}</div>
      <aside className="order-summary"><span className="eyebrow">THE BREAKDOWN</span><h2>Order summary</h2><div className="summary-line"><span>Subtotal</span><span>{money(subtotal)}</span></div><div className="summary-line"><span>Delivery fee</span><span>{money(delivery)}</span></div><div className="summary-line total"><span>Total</span><strong>{money(subtotal + delivery)}</strong></div><p className="summary-note">Taxes, if applicable, will be shown before payment.</p><Link to="/checkout" className="button-dark full-width">Continue to checkout <ArrowRight size={16} /></Link><Link to="/restaurants" className="summary-back">Add more goodness</Link></aside></div>}
  </section>
}
