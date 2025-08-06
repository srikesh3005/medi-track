import React from 'react'

const statusColor = {
  Stable: 'bg-green-100 text-green-800',
  'Under Review': 'bg-yellow-100 text-yellow-800',
  Critical: 'bg-red-100 text-red-800',
}

const PatientCard = ({ patient, onView }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-gray-700">
          {patient.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{patient.name}</h2>
          <p className="text-sm text-gray-500">{patient.gender}, {patient.age} yrs</p>
        </div>
      </div>

      <p className="text-gray-700 mb-1">Condition: <span className="font-medium">{patient.condition}</span></p>
      <p className="text-sm text-gray-500">Last Visit: {patient.lastVisit}</p>

      <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${statusColor[patient.status]}`}>
        {patient.status}
      </span>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onView}  // ✅ This must be set
          className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
        >
          View Profile
        </button>
        <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Message
        </button>
      </div>
    </div>
  )
}

export default PatientCard
