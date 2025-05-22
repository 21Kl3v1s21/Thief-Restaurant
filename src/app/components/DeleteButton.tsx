'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { deleteBooking } from '../actions/delete-booking'

export function DeleteButton({ bookingId }: { bookingId: string }) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this booking?')) {
      startTransition(async () => {
        try {
          const result = await deleteBooking(bookingId)
          if (result.success) {
            router.refresh() // 💡 This revalidates client-side routing cache
          } else {
            alert('Failed to delete booking')
          }
        } catch (error) {
          console.error('Delete failed:', error)
          alert('Failed to delete booking')
        }
      })
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="delete-button"
      aria-label="Delete booking"
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  )
}
