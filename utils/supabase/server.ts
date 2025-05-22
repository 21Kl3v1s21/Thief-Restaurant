// utils/supabase/server.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/app/data/data'

export const createClient = () => {
  return createServerComponentClient<Database>({
    cookies, // ✅ correct way
  })
}
