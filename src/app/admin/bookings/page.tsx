// app/admin/bookings/page.tsx
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { createClient } from '../../../../utils/supabase/server'
import { format } from 'date-fns'
import './bookings.css'
import { DeleteButton } from '@/app/components/DeleteButton'

export default async function BookingsPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/login?redirect=/admin/bookings')
  }

  const supabase = createClient()
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase error:', error)
    return <div className="error-state">Error loading bookings. Please try again later.</div>
  }

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy')
    } catch {
      return 'N/A'
    }
  }

  return (
    <div className="bookings-container">
      <div className="bookings-content">
        {bookings && bookings.length > 0 ? (
          <table className="bookings-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name || 'N/A'}</td>
                  <td>{booking.email || 'N/A'}</td>
                  <td>{formatDate(booking.date)}</td>
                  <td>{booking.time || 'N/A'}</td>
                  <td>{booking.people || 'N/A'}</td>
                  <td>
                    <DeleteButton bookingId={booking.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">No reservations found.</div>
        )}
      </div>
    </div>
  )
}