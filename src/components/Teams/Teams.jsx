import React, { useState } from "react"
import {
  Users,
  Stethoscope,
  Mail,
  PhoneCall,
  UserPlus,
  CircleDot,
  CircleDashed,
  X,
} from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Priya Nair",
    role: "Cardiologist",
    email: "priya.nair@hospital.com",
    phone: "+91-9876543210",
    status: "Online",
    bio: "15+ years of experience in interventional cardiology.",
  },
  {
    id: 2,
    name: "Dr. Ravi Kumar",
    role: "General Physician",
    email: "ravi.kumar@hospital.com",
    phone: "+91-9123456780",
    status: "Offline",
    bio: "Handles outpatient care and chronic illness management.",
  },
  {
    id: 3,
    name: "Sarah Ali",
    role: "Nurse",
    email: "sarah.ali@hospital.com",
    phone: "+91-9988776655",
    status: "Online",
    bio: "Expert in surgical assistance and critical care monitoring.",
  },
  {
    id: 4,
    name: "Akash Verma",
    role: "Physiotherapist",
    email: "akash.verma@hospital.com",
    phone: "+91-9871234567",
    status: "Offline",
    bio: "Specializes in post-operative rehabilitation.",
  },
]

const statusStyles = {
  Online: "text-green-500",
  Offline: "text-gray-400",
}

const Teams = () => {
  const [filter, setFilter] = useState("All")
  const [selectedMember, setSelectedMember] = useState(null)

  const uniqueRoles = ["All", ...new Set(teamMembers.map((m) => m.role))]

  const filteredTeam =
    filter === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.role === filter)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Medical Team
        </h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border rounded-md text-sm bg-white text-black"
        >
          {uniqueRoles.map((role, idx) => (
            <option key={idx} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      {/* Team Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTeam.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-md transition cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-green-600" />
                {member.name}
              </div>
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  statusStyles[member.status]
                }`}
              >
                {member.status === "Online" ? (
                  <CircleDot className="w-4 h-4" />
                ) : (
                  <CircleDashed className="w-4 h-4" />
                )}
                {member.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
            <div className="text-sm text-gray-600 flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-gray-500" />
              {member.email}
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-gray-500" />
              {member.phone}
            </div>
          </div>
        ))}
      </div>

      {/* Invite CTA */}
      <div className="mt-8 text-center">
        <button className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition">
          <UserPlus className="w-4 h-4" />
          Invite Team Member
        </button>
      </div>

      {/* Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {selectedMember.name}
            </h2>
            <p className="text-sm text-gray-500 mb-1">{selectedMember.role}</p>
            <p className="text-sm text-gray-700 mb-2">{selectedMember.bio}</p>
            <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4" />
              {selectedMember.email}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              {selectedMember.phone}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Teams
