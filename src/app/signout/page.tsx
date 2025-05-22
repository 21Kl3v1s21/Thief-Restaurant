'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function SignOutPage() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut()
      router.push('/login') // redirect to login page
    }

    logout()
  }, [router, supabase])

  return <div className="text-center p-8 text-white">Signing out...</div>
}
