import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
//import { auth } from '../firebase';
import { getUserTrips } from '../api/firestore';

const Dashboard = () => {
  const { user } = useAuth();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetch = async () => user && setTrips(await getUserTrips());
    fetch();
  }, [user]);

  if (!user) return <p>Please log in to view your trips.</p>;

  return (
    <div className="max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">Your Trips</h2>
      {trips.map(trip => (
  <div key={trip.id} className="border p-3 rounded mb-3">
    <strong>{trip.destination}</strong> • {trip.purpose}<br />
    <span>{trip.dateRange}</span>

    <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
      <li>👜 Pack luggage</li>
      <li>✈️ Book flights</li>
      <li>📄 Print documents</li>
    </ul>
  </div>
))}

    </div>
  );
};

export default Dashboard;
