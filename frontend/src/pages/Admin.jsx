import { useState, useEffect, useCallback } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
const STATUSES = ['received', 'preparing', 'ready', 'delivered', 'cancelled']

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem('admin-token') || '')
  const [form, setForm] = useState({ username: '', password: '' })
  const [orders, setOrders] = useState([])
  const [error, setError] = useState('')
  const auth = { Authorization: `Bearer ${token}` }

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/admin/orders`, { headers: { Authorization: `Bearer ${token}` } })
      const data = await res.json()
      if (res.status === 401) { sessionStorage.removeItem('admin-token'); setToken(''); return }
      if (!res.ok) throw new Error(data.message)
      setOrders(data.orders)
    } catch (e) { setError(e.message) }
  }, [token])

  useEffect(() => { if (token) load() }, [token, load])

  const login = async (e) => {
    e.preventDefault(); setError('')
    try {
      const res = await fetch(`${API_URL}/admin/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      sessionStorage.setItem('admin-token', data.token); setToken(data.token)
    } catch (e) { setError(e.message) }
  }

  const setStatus = async (id, status) => {
    await fetch(`${API_URL}/admin/orders/${id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json', ...auth }, body: JSON.stringify({ status })
    })
    load()
  }

  if (!token) return (
    <section className="container" style={{ maxWidth: 380, padding: '80px 0' }}>
      <h1>Admin login</h1>
      <form onSubmit={login} style={{ display: 'grid', gap: 12 }}>
        <input required placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
        <input required type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="button-dark" type="submit">Log in</button>
        {error && <p style={{ color: '#b3261e' }}>{error}</p>}
      </form>
    </section>
  )

  return (
    <section className="container" style={{ padding: '40px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Orders ({orders.length})</h1>
        <span>
          <button onClick={load}>Refresh</button>{' '}
          <button onClick={() => { sessionStorage.removeItem('admin-token'); setToken('') }}>Log out</button>
        </span>
      </div>
      {error && <p style={{ color: '#b3261e' }}>{error}</p>}
      {orders.map(o => (
        <div key={o.id} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, margin: '12px 0' }}>
          <strong>{o.customer_name}</strong> · {o.customer_phone} · ₹{o.total}
          <div>{o.delivery_address}{o.delivery_notes ? ` (${o.delivery_notes})` : ''}</div>
          <div style={{ fontSize: 13, opacity: 0.7 }}>{new Date(o.created_at).toLocaleString()}</div>
          <ul>{o.order_items.map(i => <li key={i.id}>{i.quantity} × {i.food_name} — ₹{i.line_total}</li>)}</ul>
          <select value={o.status} onChange={e => setStatus(o.id, e.target.value)}>
            {STATUSES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      ))}
    </section>
  )
}