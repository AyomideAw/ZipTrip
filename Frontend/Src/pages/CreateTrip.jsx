import { useState } from 'react'
import { addTrip } from '../api/firestore'

export default function CreateTrip() {
  const [destination, setDestination] = useState('')
  const [purpose, setPurpose] = useState('Leisure')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!destination || !startDate || !endDate) {
      setMessage('Please fill all fields.')
      return
    }

    try {
      const dateRange = `${startDate} to ${endDate}`
      const id = await addTrip({ destination, purpose, dateRange })
      setMessage(`✅ Trip saved with ID: ${id}`)
    } catch (err) {
      console.error(err)
      setMessage('❌ Failed to save trip.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded space-y-4 shadow">
      <h2 className="text-2xl font-bold">Create a New Trip</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g. Paris"
          />
        </div>

        <div>
          <label className="block font-medium">Purpose</label>
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option>Leisure</option>
            <option>Business</option>
            <option>Adventure</option>
            <option>Family</option>
          </select>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block font-medium">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Save Trip
        </button>
      </form>

      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  )
}
