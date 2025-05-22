// app/admin/bookings/page.tsx
import { createClient } from "../../../../utils/supabase/server";

export default async function BookingsPage() {
  const supabase = createClient();
  const { data: bookings, error } = await supabase
    .from("Booking")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div>Error loading bookings</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Time</th>
              <th className="py-2 px-4 border">People</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="py-2 px-4 border">{booking.name}</td>
                <td className="py-2 px-4 border">{booking.email}</td>
                <td className="py-2 px-4 border">{booking.date}</td>
                <td className="py-2 px-4 border">{booking.time}</td>
                <td className="py-2 px-4 border">{booking.people}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}