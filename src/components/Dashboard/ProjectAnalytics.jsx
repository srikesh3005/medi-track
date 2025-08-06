import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { day: 'Mon', patients: 30 },
  { day: 'Tue', patients: 45 },
  { day: 'Wed', patients: 50 },
  { day: 'Thu', patients: 38 },
  { day: 'Fri', patients: 60 },
  { day: 'Sat', patients: 25 },
  { day: 'Sun', patients: 15 },
]

const ProjectAnalytics = () => {
  return (
    <div className="px-6 pb-6">
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Weekly Patient Visits
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="patients" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProjectAnalytics
