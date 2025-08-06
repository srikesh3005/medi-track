import React, { useEffect, useState } from 'react'
import { TimerReset, PauseCircle, PlayCircle } from 'lucide-react'

const TimeTracker = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [secondsElapsed, setSecondsElapsed] = useState(0)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const toggleTimer = () => setIsRunning(prev => !prev)

  const formatTime = (secs) => {
    const hrs = String(Math.floor(secs / 3600)).padStart(2, '0')
    const mins = String(Math.floor((secs % 3600) / 60)).padStart(2, '0')
    const secsOnly = String(secs % 60).padStart(2, '0')
    return `${hrs}:${mins}:${secsOnly}`
  }

  return (
    <div className="px-6 pb-6">
      <div className="bg-white border rounded-xl p-4 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Consultation Time Tracker</h3>
          <p className="text-2xl font-mono text-green-600">{formatTime(secondsElapsed)}</p>
          <p className="text-sm text-gray-500 mt-1">Session active today</p>
        </div>
        <button
          onClick={toggleTimer}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition ${
            isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? <PauseCircle size={18} /> : <PlayCircle size={18} />}
          {isRunning ? 'Pause Timer' : 'Start Timer'}
        </button>
      </div>
    </div>
  )
}

export default TimeTracker
