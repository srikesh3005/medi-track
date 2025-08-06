import React from 'react'
import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom' // Make sure you are using react-router-dom

const Navbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-white border-b flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search patients, appointments..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-700 placeholder-gray-400"
        />
      </div>

     
      {/* Right side: Notification + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/image.png"
            alt="Doctor Avatar"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">Dr. Michael</div>
            <div className="text-gray-500">michael@hospital.com</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
