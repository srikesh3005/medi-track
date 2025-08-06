const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {patient.name}
        </h2>

        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Condition:</strong> {patient.condition}</p>
          <p><strong>Status:</strong> {patient.status}</p>
          <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
          <p><strong>Contact:</strong> {patient.email}</p>
          <p><strong>Phone:</strong> {patient.phone}</p>
          <p><strong>History:</strong> {patient.history}</p>
        </div>
      </div>
    </div>
  )
}

export default PatientModal
