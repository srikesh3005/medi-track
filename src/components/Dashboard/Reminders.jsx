import React from 'react'
import { CalendarClock, Video, Stethoscope } from 'lucide-react'

const reminders = [
  {
    time: '10:00 AM',
    patient: 'John Doe',
    type: 'Follow-up Consultation',
    icon: <Stethoscope className="text-blue-600" />,
  },
  {
    time: '11:30 AM',
    patient: 'Priya Singh',
    type: 'Teleconsultation',
    icon: <Video className="text-green-600" />,
  },
  {
    time: '02:00 PM',
    patient: 'Rahul Mehta',
    type: 'Pre-surgery Briefing',
    icon: <CalendarClock className="text-yellow-600" />,
  },
]

const Reminders = () => {
  return (
    <div className="px-6 pb-6">
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Today's Reminders</h3>
          <button className="text-sm text-green-600 hover:underline">View all</button>
        </div>

        <div className="space-y-3">
          {reminders.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full border shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-700">{item.patient}</p>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-600">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reminders
