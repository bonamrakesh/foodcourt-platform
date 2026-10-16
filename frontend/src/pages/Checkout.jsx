import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, LockKeyhole } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const delivery = subtotal ? 25 : 0
  const total = subtotal + delivery
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!items.length) return setError('Your cart is empty. Add a dish before checking out.')
    setLoading(true); setError('')
    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer: form, items: items.map(({ id, quantity }) => ({ foodId: id, quantity })) })
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'We could not place your order.')
      localStorage.setItem('gather-last-order', JSON.stringify({ ...data.order, customer: form, total }))
      clearCart()
      navigate('/order-success')
    } catch (err) {
      setError(`${err.message} (calling: ${API_URL}/orders)`)
    } finally { setLoading(false) }
  }

  if (!items.length) return <section className="container checkout-page"><Link to="/cart" className="back-link"><ArrowLeft size={16} /> Back to bag</Link><div className="empty-cart"><h2>Your cart is empty.</h2><Link className="button-dark" to="/restaurants">Explore food <ArrowRight size={16} /></Link></div></section>

  return <section className="container checkout-page">
    <Link to="/cart" className="back-link"><ArrowLeft size={16} /> Back to bag</Link>
    <div className="checkout-heading"><span className="eyebrow">ALMOST THE BEST PART</span><h1>Let's get it <span>to your table.</span></h1><p>Just a few details and your order is on its way.</p></div>
    <div className="checkout-layout"><form className="checkout-form" onSubmit={submit}><div className="form-card"><div className="form-card-title"><span>01</span><div><h2>Your details</h2><p>Where should we send the good stuff?</p></div></div>
      <label>Full name<input required name="name" value={form.name} onChange={update} placeholder="e.g. Rakesh Bonam" minLength="2" /></label>
      <label>Phone number<input required name="phone" value={form.phone} onChange={update} placeholder="10-digit mobile number" inputMode="tel" pattern="[0-9+\-\s]{10,15}" /></label>
      <label>Delivery address<textarea required name="address" value={form.address} onChange={update} placeholder="House / flat, street, area, city, PIN code" rows="3" minLength="8" /></label>
      <label>Delivery notes <span className="optional">(optional)</span><textarea name="notes" value={form.notes} onChange={update} placeholder="Landmark, gate code, or special instructions" rows="2" /></label>
    </div><div className="checkout-assurance"><LockKeyhole size={17} /><span>Your details are sent securely to the order service. No payment is collected on this demo checkout.</span></div>
      {error && <div className="form-error" role="alert">{error}</div>}
      <button className="button-dark full-width checkout-submit" disabled={loading}>{loading ? 'Placing your order…' : <>Place order <ArrowRight size={17} /></>}</button>
    </form>
    <aside className="order-summary checkout-summary"><span className="eyebrow">JUST THE GOOD STUFF</span><h2>Your order</h2><div className="checkout-order-items">{items.map(i => <div className="checkout-order-item" key={i.id}><img src={i.image} alt="" /><div><strong>{i.name}</strong><small>Qty {i.quantity}</small></div><span>₹{(i.price * i.quantity).toLocaleString('en-IN')}</span></div>)}</div><div className="summary-line"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div><div className="summary-line"><span>Delivery</span><span>₹{delivery}</span></div><div className="summary-line total"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div><p className="summary-note"><CheckCircle2 size={15} /> Review your details before placing the order.</p></aside></div>
  </section>
}
