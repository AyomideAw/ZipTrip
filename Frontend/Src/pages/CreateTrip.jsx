// import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase';
// import { addTrip } from '../api/firestore';

// const CreateTrip = () => {
//   const [user] = useAuthState(auth);
//   const [form, setForm] = useState({
//     destination: '',
//     startDate: '',
//     endDate: '',
//     purpose: 'Leisure',
//   });
//   const [message, setMessage] = useState('');
//   const [checklist, setChecklist] = useState('');

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
//       const id = await addTrip({ destination, purpose, dateRange });
//       setMessage(`✅ Trip saved with ID: ${id}`);
//     } catch (err) {
//       console.error(err);
//       setMessage('❌ Failed to save trip.');
//     }
//   };

//   const handleGeminiTest = async () => {
//     try {
//       const { destination, startDate, endDate, purpose } = form;
//       const dateRange = `${startDate} to ${endDate}`;

//       const response = await fetch('http://localhost:8989/api/gemini', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           destination,
//           dateRange,
//           purpose,
//           weather: 'Mild', // You can later make this dynamic
//         }),
//       });

//       const data = await response.json();
//       if (data.checklist) {
//         setChecklist(data.checklist);
//         setMessage('✅ Checklist generated!');
//       } else {
//         setMessage('❌ No checklist returned.');
//       }
//     } catch (err) {
//       console.error('Gemini error:', err);
//       setMessage('❌ Failed to fetch checklist from Gemini.');
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

//       <button
//         type="button"
//         onClick={handleGeminiTest}
//         className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
//       >
//         Generate Gemini Checklist
//       </button>

//       {message && <p className="text-sm mt-2 text-center">{message}</p>}

//       {checklist && (
//         <div className="mt-4 p-4 bg-gray-100 border rounded">
//           <h3 className="font-semibold mb-2">Suggested Checklist:</h3>
//           <pre className="whitespace-pre-wrap text-sm">{checklist}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateTrip;



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
  const [checklist, setChecklist] = useState([]);
  const [tripId, setTripId] = useState(null);

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

  const handleGeminiChecklist = async () => {
    const { destination, startDate, endDate, purpose } = form;
    const dateRange = `${startDate} to ${endDate}`;

    try {
      const response = await fetch('http://localhost:8989/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ destination, dateRange, purpose, weather: 'Mild' }),
      });

      const data = await response.json();

      if (data.checklist) {
        const lines = data.checklist.split('\n').filter(line => line.trim() !== '');
        const parsed = lines.map(item => ({
          label: item.replace(/^[-*•\d.]+/, '').trim(),
          checked: false,
        }));
        setChecklist(parsed);
        setMessage('✅ Checklist generated!');

        // Update Firestore if trip already saved
        if (tripId) await updateChecklist(tripId, parsed);
      } else {
        setMessage('❌ No checklist returned.');
      }
    } catch (err) {
      console.error('Gemini error:', err);
      setMessage('❌ Failed to fetch checklist.');
    }
  };

  if (!user) return <p className="text-center mt-10">Please log in to create a trip.</p>;

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
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Save Trip
        </button>
      </form>

      <button
        type="button"
        onClick={handleGeminiChecklist}
        className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
      >
        Generate Checklist
      </button>

      {message && <p className="text-sm mt-2 text-center">{message}</p>}

      {checklist.length > 0 && (
        <div className="mt-4 p-4 bg-gray-100 border rounded">
          <h3 className="font-semibold mb-2">Checklist</h3>
          <ul className="list-disc list-inside">
            {checklist.map((item, i) => (
              <li key={i}>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                      const updated = [...checklist];
                      updated[i].checked = !updated[i].checked;
                      setChecklist(updated);
                    }}
                  />
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}




