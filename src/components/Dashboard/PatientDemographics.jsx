import React from 'react'
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const data = [
  { name: 'Male', value: 55 },
  { name: 'Female', value: 40 },
  { name: 'Other', value: 5 },
]

const COLORS = ['#3b82f6', '#ec4899', '#facc15'] // blue, pink, yellow

const PatientDemographics = () => {
  return (
    <div className="px-6 pb-6">
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient Demographics</h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PatientDemographics
