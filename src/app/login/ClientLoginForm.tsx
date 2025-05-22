'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function ClientLoginForm() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check if user is logged in on component mount
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)
    }
    checkSession()
  }, [supabase.auth])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)

    if (error) {
      setErrorMsg(error.message)
    } else {
      setIsLoggedIn(true)
      router.push('/admin/bookings')
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsLoggedIn(false)
    router.refresh()
  }

  if (isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#152328] px-5 py-5 mt-5">
        <div className="w-full max-w-md bg-[#1f333d] rounded-xl shadow-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#d8b4a0] mb-6">You are already logged in</h2>
          <div className="space-y-4">
            <button
              onClick={() => router.push('/admin/bookings')}
              className="w-full bg-[#d77a61] hover:bg-[#c96c56] text-white font-semibold py-2 rounded transition"
            >
              Go to Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-[#6d6d6d] hover:bg-[#5a5a5a] text-white font-semibold py-2 rounded transition"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#152328] px-5 py-5 mt-5">
      <div className="w-full max-w-md bg-[#1f333d] rounded-xl shadow-2xl p-8">
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm  font-medium text-[#d8b4a0] mb-2 mt-3">Email:</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full text-black px-4 py-2 rounded bg-[#152328] border border-[#d77a61] placeholder-[#d8b4a0] "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#d8b4a0] mt-3 mb-1">Password:</label>
            <input
              type="password"
              placeholder="********"
              className="w-full text-black px-4 py-2 rounded bg-[#152328] border border-[#d77a61] placeholder-[#d8b4a0] "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
          <button
            type="submit"
            className="w-full bg-[#d77a61] hover:bg-[#c96c56] text-white font-semibold py-2 rounded transition"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}