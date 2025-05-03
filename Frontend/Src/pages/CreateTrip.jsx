// import { useState } from 'react'
// import { addTrip } from '../api/firestore'

// export default function CreateTrip() {
//   const [destination, setDestination] = useState('')
//   const [purpose, setPurpose] = useState('Leisure')
//   const [startDate, setStartDate] = useState('')
//   const [endDate, setEndDate] = useState('')
//   const [message, setMessage] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!destination || !startDate || !endDate) {
//       setMessage('Please fill all fields.')
//       return
//     }

//     try {
//       const dateRange = `${startDate} to ${endDate}`
//       const id = await addTrip({ destination, purpose, dateRange })
//       setMessage(`✅ Trip saved with ID: ${id}`)
//     } catch (err) {
//       console.error(err)
//       setMessage('❌ Failed to save trip.')
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded space-y-4 shadow">
//       <h2 className="text-2xl font-bold">Create a New Trip</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block font-medium">Destination</label>
//           <input
//             type="text"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//             className="w-full p-2 border rounded"
//             placeholder="e.g. Paris"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Purpose</label>
//           <select
//             value={purpose}
//             onChange={(e) => setPurpose(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option>Leisure</option>
//             <option>Business</option>
//             <option>Adventure</option>
//             <option>Family</option>
//           </select>
//         </div>

//         <div className="flex gap-2">
//           <div className="flex-1">
//             <label className="block font-medium">Start Date</label>
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block font-medium">End Date</label>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-full p-2 border rounded"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
//         >
//           Save Trip
//         </button>
//       </form>

//       {message && <p className="text-sm mt-2">{message}</p>}
//     </div>
//   )
// }



// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// //import { auth } from '../firebase';
// import { addTrip } from '../api/firestore';

// const CreateTrip = () => {
//   const { user } = useAuth();
//   const [form, setForm] = useState({
//     destination: '',
//     startDate: '',
//     endDate: '',
//     purpose: 'Leisure',
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { destination, startDate, endDate, purpose } = form;

//     if (!user) {
//       setMessage('❌ Please log in to create a trip.');
//       return;
//     }

//     if (!destination || !startDate || !endDate) {
//       setMessage('❌ Please fill in all required fields.');
//       return;
//     }

//     try {
//       const dateRange = `${startDate} to ${endDate}`;
//       const id = await addTrip({
//         destination,
//         purpose,
//         dateRange
//       });
//       setMessage(`✅ Trip saved with ID: ${id}`);
//     } catch (err) {
//       console.error(err);
//       setMessage('❌ Failed to save trip.');
//     }
//   };

//   if (!user) return <p className="text-center mt-10">Please log in to create a trip.</p>;

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border rounded space-y-4 shadow">
//       <h2 className="text-2xl font-bold">Create a New Trip</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="destination"
//           placeholder="Destination"
//           value={form.destination}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         />

//         <div className="flex gap-2">
//           <input
//             type="date"
//             name="startDate"
//             value={form.startDate}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="date"
//             name="endDate"
//             value={form.endDate}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <select
//           name="purpose"
//           value={form.purpose}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="Leisure">Leisure</option>
//           <option value="Business">Business</option>
//           <option value="Adventure">Adventure</option>
//           <option value="Family">Family</option>
//         </select>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
//         >
//           Save Trip
//         </button>
//       </form>

//       {message && <p className="text-sm mt-2">{message}</p>}
//     </div>
//   );
// };

// export default CreateTrip;

import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Adjust the path to your Firebase configuration
import { addTrip } from '../api/firestore';

export default function CreateTrip() {
  const [user, loading, error] = useAuthState(auth);
  const [form, setForm] = useState({
    destination: '',
    purpose: 'Leisure',
    startDate: '',
    endDate: '',
  });
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  useEffect(() => {
    if (!window.google || !window.google.maps) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['(cities)'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      const destination = place.formatted_address || place.name;
      setForm((prevForm) => ({ ...prevForm, destination }));
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { destination, startDate, endDate, purpose } = form;

    if (!destination || !startDate || !endDate) {
      setMessage('Please fill all fields.');
      return;
    }

    try {
      const dateRange = `${startDate} to ${endDate}`;
      const id = await addTrip({ destination, purpose, dateRange });
      setMessage(`✅ Trip saved with ID: ${id}`);
    } catch (err) {
      console.error(err);
      setMessage('❌ Failed to save trip.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Please log in to create a trip.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded space-y-4 shadow">
      <h2 className="text-xl font-bold">Create New Trip</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <div className="flex gap-2">
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <select
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Leisure">Leisure</option>
          <option value="Business">Business</option>
          <option value="Adventure">Adventure</option>
          <option value="Family">Family</option>
        </select>

        <button type="submit" className="mt-3 bg-blue-500 text-white p-2 rounded">
          Save Trip
        </button>
      </form>
      {message && <p className="text-sm">{message}</p>}
    </div>
  );
}




