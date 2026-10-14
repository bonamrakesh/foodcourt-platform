import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'

export default function OrderSuccess() {
  let order = null
  try { order = JSON.parse(localStorage.getItem('gather-last-order') || 'null') } catch {}
  return <section className="container success-page"><div className="success-card"><span className="success-icon"><Check size={32} /></span><span className="eyebrow">THAT'S A WRAP</span><h1>Order placed.<br /><span>Good things ahead.</span></h1><p>Your order has been sent to the kitchen. Thanks for choosing Gather & Go.</p>{order?.id && <div className="order-reference">Order reference <strong>{order.id}</strong></div>}<Link to="/restaurants" className="button-dark">Find your next favourite <ArrowRight size={16} /></Link></div></section>
}
