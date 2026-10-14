import { Router } from 'express'
import { randomUUID } from 'node:crypto'
import { supabase, supabaseConfigured } from '../lib/supabase.js'
import { foods } from '../data/menuData.js'

const router = Router()
router.post('/', async (req, res, next) => {
  try {
    const { customer, items } = req.body || {}
    if (!customer || typeof customer.name !== 'string' || customer.name.trim().length < 2) {
      return res.status(400).json({ message: 'Please enter your full name.' })
    }
    const phone = String(customer.phone || '').trim()
    if (!/^[0-9+\\-\\s]{10,15}$/.test(phone)) return res.status(400).json({ message: 'Please enter a valid phone number.' })
    if (typeof customer.address !== 'string' || customer.address.trim().length < 8) {
      return res.status(400).json({ message: 'Please enter a complete delivery address.' })
    }
    if (!Array.isArray(items) || items.length === 0 || items.length > 30) {
      return res.status(400).json({ message: 'Your order must contain between 1 and 30 items.' })
    }

    // Prices are always calculated from server-owned menu data, never from client-submitted prices.
    const orderItems = []
    for (const requested of items) {
      const food = foods.find(item => item.id === requested.foodId)
      const quantity = Number(requested.quantity)
      if (!food || !Number.isInteger(quantity) || quantity < 1 || quantity > 50) {
        return res.status(400).json({ message: 'One of the items or quantities is invalid. Please refresh your cart.' })
      }
      orderItems.push({ foodId: food.id, name: food.name, unitPrice: food.price, quantity, lineTotal: food.price * quantity })
    }
    const subtotal = orderItems.reduce((sum, item) => sum + item.lineTotal, 0)
    const deliveryFee = 25
    const total = subtotal + deliveryFee
    const orderId = randomUUID()

    if (!supabaseConfigured) {
      return res.status(503).json({ message: 'The order database is not configured yet. Add your Supabase settings to backend/.env.' })
    }

    const { data: order, error: orderError } = await supabase.from('orders').insert({
      id: orderId,
      customer_name: customer.name.trim(),
      customer_phone: phone,
      delivery_address: customer.address.trim(),
      delivery_notes: String(customer.notes || '').trim().slice(0, 500),
      subtotal,
      delivery_fee: deliveryFee,
      total,
      status: 'received'
    }).select('id,status,total,created_at').single()
    if (orderError) throw orderError

    const rows = orderItems.map(item => ({
      order_id: orderId,
      food_id: item.foodId,
      food_name: item.name,
      unit_price: item.unitPrice,
      quantity: item.quantity,
      line_total: item.lineTotal
    }))
    const { error: itemsError } = await supabase.from('order_items').insert(rows)
    if (itemsError) {
      await supabase.from('orders').delete().eq('id', orderId)
      throw itemsError
    }

    res.status(201).json({ message: 'Order placed successfully.', order })
  } catch (error) {
    next(error)
  }
})
export default router
