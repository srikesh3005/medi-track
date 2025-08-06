import React from 'react'

const messages = [
  {
    name: 'Nurse Anita',
    role: 'Nursing',
    avatar: '/assets/image.png',
    message: 'Patient #104 needs a prescription update.',
    time: '5 min ago',
  },
  {
    name: 'Lab Technician Raj',
    role: 'Lab',
    avatar: '/assets/react.svg',
    message: 'Blood reports for John are ready for review.',
    time: '20 min ago',
  },
  {
    name: 'Reception - Asha',
    role: 'Front Desk',
    avatar: '/assets/image.png',
    message: 'Priya Singh has rescheduled to 12:30 PM.',
    time: '45 min ago',
  },
]

const TeamCollaboration = () => {
  return (
    <div className="px-6 pb-6">
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Team Collaboration</h3>

        <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <img
                src={msg.avatar}
                alt={msg.name}
                className="w-10 h-10 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold text-gray-800">{msg.name} <span className="text-sm text-gray-500">({msg.role})</span></p>
                <p className="text-gray-600 text-sm">{msg.message}</p>
                <p className="text-xs text-gray-400">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamCollaboration
