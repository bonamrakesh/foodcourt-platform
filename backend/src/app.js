import express from 'express'
import cors from 'cors'
import healthRoutes from './routes/healthRoutes.js'
import restaurantRoutes from './routes/restaurantRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express()
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '1mb' }))
app.get('/', (_req, res) => res.json({ name: 'Gather & Go API', status: 'ok' }))
app.use('/api/health', healthRoutes)
app.use('/api/restaurants', restaurantRoutes)
app.use('/api/orders', orderRoutes)
app.use((req, res) => res.status(404).json({ message: `Route not found: ${req.method} ${req.path}` }))
app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ message: 'Something went wrong on the server.' })
})
export default app
