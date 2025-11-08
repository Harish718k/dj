import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bookings");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-6 relative">
      {/* Header */}
      <div className="max-w-6xl w-full bg-zinc-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-6">
          Admin Dashboard
        </h1>
        <p className="text-center text-gray-400 mb-10">
          View and manage all your DJ BEATZ bookings.
        </p>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600 border-opacity-80"></div>
          </div>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-zinc-800 text-left rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800 text-red-500 uppercase text-sm">
                  <th className="p-4 border-b border-zinc-700">Name</th>
                  <th className="p-4 border-b border-zinc-700">Email</th>
                  <th className="p-4 border-b border-zinc-700">Phone</th>
                  <th className="p-4 border-b border-zinc-700">Location</th>
                  <th className="p-4 border-b border-zinc-700">Date</th>
                  <th className="p-4 border-b border-zinc-700">Event Type</th>
                  <th className="p-4 border-b border-zinc-700">Message</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <tr
                    key={b._id}
                    className={`hover:bg-zinc-800/70 transition duration-200 ${
                      index % 2 === 0 ? "bg-zinc-900/60" : "bg-zinc-900"
                    }`}
                  >
                    <td className="p-4 text-gray-200">{b.name}</td>
                    <td className="p-4 text-gray-400">{b.email}</td>
                    <td className="p-4 text-gray-400">{b.phone}</td>
                    <td className="p-4 text-gray-400">{b.location}</td>
                    <td className="p-4 text-gray-400">{b.date}</td>
                    <td className="p-4 text-red-400 font-medium">{b.eventType}</td>
                    <td className="p-4 text-gray-400">{b.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-red-950/30 via-black to-black"></div>
    </section>
  );
}

export default AdminDashboard;
