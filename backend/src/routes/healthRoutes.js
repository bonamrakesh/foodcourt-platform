import { Router } from 'express'
import { supabaseConfigured } from '../lib/supabase.js'
const router = Router()
router.get('/', (_req, res) => res.json({ status: 'ok', databaseConfigured: supabaseConfigured }))
export default router
