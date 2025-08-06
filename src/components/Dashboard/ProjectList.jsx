import React from 'react'

const appointments = [
  {
    name: 'John Doe',
    reason: 'Routine Checkup',
    time: '10:00 AM',
    status: 'Confirmed',
  },
  {
    name: 'Priya Singh',
    reason: 'Teleconsultation',
    time: '11:30 AM',
    status: 'Pending',
  },
  {
    name: 'Rahul Mehta',
    reason: 'Surgery Follow-up',
    time: '2:00 PM',
    status: 'Completed',
  },
]

const statusColor = {
  Confirmed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Completed: 'bg-gray-100 text-gray-700',
}

const ProjectList = () => {
  return (
    <div className="px-6 pb-6">
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Appointments</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2 px-4">Patient</th>
                <th className="py-2 px-4">Reason</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, idx) => (
                <tr key={idx} className="hover:bg-gray-50 border-b">
                  <td className="py-2 px-4 font-medium text-gray-800">{appt.name}</td>
                  <td className="py-2 px-4">{appt.reason}</td>
                  <td className="py-2 px-4">{appt.time}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusColor[appt.status]}`}>
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
