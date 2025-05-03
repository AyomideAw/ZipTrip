// import { auth, provider } from './firebase';
// import { signInWithPopup } from 'firebase/auth';
// import { addTrip, getUserTrips } from './api/firestore';

// export default function App() {
//   const handleLogin = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//       console.log("✅ Logged in as:", auth.currentUser.email);
//     } catch (err) {
//       console.error("Login error:", err);
//     }
//   };

//   const handleTestTrip = async () => {
//     try {
//       const tripId = await addTrip({
//         destination: "Toronto",
//         purpose: "Leisure",
//         dateRange: "2025-06-01 to 2025-06-07"
//       });
//       console.log("🚀 Trip added with ID:", tripId);

//       const trips = await getUserTrips();
//       console.log("📦 User trips:", trips);
//     } catch (err) {
//       console.error("Error testing trip:", err);
//     }
//   };

//   return (
//     <div className="p-8 space-y-4">
//       <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
//         Sign in with Google
//       </button>

//       <button onClick={handleTestTrip} className="bg-green-600 text-white px-4 py-2 rounded">
//         Add + Fetch Test Trip
//       </button>
//     </div>
//   );
// }

import CreateTrip from './pages/CreateTrip'

export default function App() {
  return <CreateTrip />
}
