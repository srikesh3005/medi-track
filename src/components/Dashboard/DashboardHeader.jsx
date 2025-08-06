import React, { useState, useEffect } from 'react'

// Typing animation component
const TypingText = ({ text, speed = 50 }) => {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <span>{displayed}</span>
}

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 pt-6 pb-4">
      {/* Greeting with typing animation */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          <TypingText text="Welcome back, Dr. Michael 👋" />
        </h2>
        <p className="text-gray-500">Here's what's happening with your practice today.</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          + Add Patient
        </button>
        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
          Import Records
        </button>
      </div>
    </div>
  )
}

export default DashboardHeader
