import { Router } from 'express'
import { restaurants, foods } from '../data/menuData.js'
const router = Router()
router.get('/', (_req, res) => res.json({ restaurants }))
router.get('/:id', (req, res) => {
  const restaurant = restaurants.find(item => item.id === req.params.id)
  if (!restaurant) return res.status(404).json({ message: 'Restaurant not found.' })
  res.json({ restaurant, foods: foods.filter(food => food.restaurantId === restaurant.id) })
})
export default router
