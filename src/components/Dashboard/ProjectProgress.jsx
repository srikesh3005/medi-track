import React from 'react'

const totalAppointments = 10
const completedAppointments = 6
const progressPercent = (completedAppointments / totalAppointments) * 100

const ProjectProgress = () => {
  return (
    <div className="px-6 pb-6">
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Daily Appointment Progress</h3>
          <span className="text-sm text-gray-500">
            {completedAppointments}/{totalAppointments} completed
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>0</span>
          <span>{progressPercent.toFixed(0)}%</span>
          <span>{totalAppointments}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectProgress
