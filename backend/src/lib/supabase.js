import { createClient } from '@supabase/supabase-js'

const url = process.env.SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabaseConfigured = Boolean(url && key && !url.includes('YOUR_PROJECT') && !key.includes('YOUR_SERVICE'))
export const supabase = supabaseConfigured
  ? createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
  : null
