import React, { useState } from 'react'
import PatientCard from './PatientCard'
import PatientModal from './PatientModal'

const mockPatients = [
  {
    id: 1,
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    condition: 'Diabetes',
    lastVisit: '2025-06-17',
    status: 'Stable',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    history: 'Diagnosed in 2020. On Metformin. Regular diet monitoring.',
  },
  {
    id: 2,
    name: 'Priya Singh',
    age: 32,
    gender: 'Female',
    condition: 'Hypertension',
    lastVisit: '2025-06-19',
    status: 'Under Review',
    email: 'priya.singh@example.com',
    phone: '+91 98456 32109',
    history: 'BP fluctuating. Prescribed Losartan. Next review in 1 week.',
  },
  {
    id: 3,
    name: 'Ravi Patel',
    age: 60,
    gender: 'Male',
    condition: 'Post Surgery',
    lastVisit: '2025-06-10',
    status: 'Critical',
    email: 'ravi.patel@example.com',
    phone: '+91 97345 11223',
    history: 'Bypass surgery in June 2025. Close ICU monitoring.',
  },
  {
    id: 4,
    name: 'Meera Nair',
    age: 28,
    gender: 'Female',
    condition: 'Asthma',
    lastVisit: '2025-06-15',
    status: 'Stable',
    email: 'meera.nair@example.com',
    phone: '+91 95567 77889',
    history: 'Chronic asthma since childhood. Uses inhaler daily.',
  },
  {
    id: 5,
    name: 'Akash Verma',
    age: 38,
    gender: 'Male',
    condition: 'Fracture (Left Leg)',
    lastVisit: '2025-06-12',
    status: 'Under Review',
    email: 'akash.verma@example.com',
    phone: '+91 99887 76543',
    history: 'Surgery done in May 2025. Weekly physiotherapy ongoing.',
  },
  {
    id: 6,
    name: 'Sarah Ali',
    age: 51,
    gender: 'Female',
    condition: 'Thyroid Disorder',
    lastVisit: '2025-06-18',
    status: 'Stable',
    email: 'sarah.ali@example.com',
    phone: '+91 96677 33221',
    history: 'Hypothyroidism diagnosed in 2023. Thyronorm prescribed.',
  },
]

const Patients = () => {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [selectedPatient, setSelectedPatient] = useState(null)

  const filteredPatients = mockPatients.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.condition.toLowerCase().includes(search.toLowerCase())
    const matchStatus = filterStatus === 'All' || p.status === filterStatus
    return matchSearch && matchStatus
  })

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Patient Records</h1>

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search patients or conditions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white sm:w-1/2 px-4 py-2 border border-grey-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="All">All Statuses</option>
          <option value="Stable">Stable</option>
          <option value="Under Review">Under Review</option>
          <option value="Critical">Critical</option>
        </select>
      </div>

      {/* 🧑‍⚕️ Patient Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onView={() => setSelectedPatient(patient)}
          />
        ))}
      </div>

      {/* 👁️ Modal */}
      <PatientModal
        patient={selectedPatient}
        onClose={() => setSelectedPatient(null)}
      />
    </div>
  )
}

export default Patients
