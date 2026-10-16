import { Router } from 'express'
import jwt from 'jsonwebtoken'
import rateLimit from 'express-rate-limit'
import { timingSafeEqual } from 'node:crypto'
import { supabase, supabaseConfigured } from '../lib/supabase.js'

const router = Router()
const STATUSES = ['received', 'preparing', 'ready', 'delivered', 'cancelled']

const safeEqual = (a, b) => {
  const x = Buffer.from(String(a ?? '')), y = Buffer.from(String(b ?? ''))
  return x.length === y.length && timingSafeEqual(x, y)
}

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10 })

router.post('/login', loginLimiter, (req, res) => {
  const { username, password } = req.body || {}
  const ok = process.env.JWT_SECRET && process.env.ADMIN_PASSWORD &&
    safeEqual(username, process.env.ADMIN_USERNAME) && safeEqual(password, process.env.ADMIN_PASSWORD)
  if (!ok) return res.status(401).json({ message: 'Invalid username or password.' })
  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '8h' })
  res.json({ token })
})

const requireAdmin = (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace('Bearer ', '')
    if (jwt.verify(token, process.env.JWT_SECRET).role !== 'admin') throw new Error()
    next()
  } catch {
    res.status(401).json({ message: 'Please log in again.' })
  }
}

router.get('/orders', requireAdmin, async (_req, res, next) => {
  try {
    if (!supabaseConfigured) return res.status(503).json({ message: 'Database not configured.' })
    const { data, error } = await supabase
      .from('orders').select('*, order_items(*)')
      .order('created_at', { ascending: false }).limit(200)
    if (error) throw error
    res.json({ orders: data })
  } catch (err) { next(err) }
})

router.patch('/orders/:id', requireAdmin, async (req, res, next) => {
  try {
    const { status } = req.body || {}
    if (!STATUSES.includes(status)) return res.status(400).json({ message: 'Invalid status.' })
    const { error } = await supabase.from('orders').update({ status }).eq('id', req.params.id)
    if (error) throw error
    res.json({ message: 'Updated.' })
  } catch (err) { next(err) }
})

export default router