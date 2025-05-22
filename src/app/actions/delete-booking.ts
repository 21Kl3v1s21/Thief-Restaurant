'use server'

import { auth } from '@clerk/nextjs/server'
import { createClient } from '../../../utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function deleteBooking(bookingId: string) {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('Unauthorized')
  }

  const supabase = createClient()

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId) // Only this condition needed for admin

  if (error) {
    console.error('Delete error:', error)
    throw new Error('Failed to delete booking')
  }

  revalidatePath('/admin/bookings')

  return { success: true }
}
