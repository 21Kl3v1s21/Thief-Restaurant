// app/actions/booking.ts
'use server'

import { createClient } from '../../../utils/supabase/server'

type BookingData = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  people: number
  message: string
}

export async function submitBooking(data: BookingData) {
  const supabase = createClient()

  const { error } = await supabase.from('bookings').insert([data])

  if (error) {
    console.error('Booking error:', error)
    throw new Error('Failed to submit booking')
  }

  return { success: true }
}
