import React, { useState } from "react";
import {
  CalendarDays,
  User,
  UserPlus,
  Stethoscope,
  ClipboardList,
  CheckCircle,
  XCircle,
  Download,
} from "lucide-react";

const initialAppointments = [
  {
    id: 1,
    patient: "John Doe",
    date: "2025-06-22",
    time: "10:00 AM",
    doctor: "Dr. Priya Nair",
    status: "Scheduled",
    notes: "Follow-up for diabetes checkup",
  },
  {
    id: 2,
    patient: "Priya Singh",
    date: "2025-06-19",
    time: "03:30 PM",
    doctor: "Dr. Ravi Kumar",
    status: "Completed",
    notes: "BP monitoring and medication adjustment",
  },
  {
    id: 3,
    patient: "Akash Verma",
    date: "2025-06-18",
    time: "01:00 PM",
    doctor: "Dr. Sarah Ali",
    status: "Missed",
    notes: "Post-op wound dressing",
  },
  {
    id: 4,
    patient: "Meera Nair",
    date: "2025-06-20",
    time: "11:15 AM",
    doctor: "Dr. Michael",
    status: "Scheduled",
    notes: "Asthma review and inhaler check.",
  },
  {
    id: 5,
    patient: "Ravi Patel",
    date: "2025-06-21",
    time: "09:45 AM",
    doctor: "Dr. Priya Nair",
    status: "Completed",
    notes: "Post-surgery follow-up.",
  },
  {
    id: 6,
    patient: "Sarah Ali",
    date: "2025-06-22",
    time: "02:00 PM",
    doctor: "Dr. Ravi Kumar",
    status: "Scheduled",
    notes: "Thyroid disorder consultation.",
  },
];

const statusMap = {
  Scheduled: {
    color: "bg-yellow-100 text-yellow-800",
    icon: <ClipboardList className="inline w-4 h-4 mr-1" />,
  },
  Completed: {
    color: "bg-green-100 text-green-800",
    icon: <CheckCircle className="inline w-4 h-4 mr-1" />,
  },
  Missed: {
    color: "bg-red-100 text-red-800",
    icon: <XCircle className="inline w-4 h-4 mr-1" />,
  },
};

function AppointmentCard({ appt }) {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-xl shadow p-4 border hover:shadow-lg transition">
      <div className="flex items-center gap-2">
        <User className="w-5 h-5 text-green-600" />
        <span className="font-semibold text-lg text-gray-900">
          {appt.patient}
        </span>
      </div>
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <CalendarDays className="w-4 h-4" />
        <span>{appt.date}</span>
        <span>@ {appt.time}</span>
      </div>
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <Stethoscope className="w-4 h-4" />
        <span>{appt.doctor}</span>
      </div>
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit ${
          statusMap[appt.status].color
        }`}
      >
        {statusMap[appt.status].icon}
        {appt.status}
      </span>
      {appt.notes && (
        <p className="text-xs italic text-gray-600 mt-1">{appt.notes}</p>
      )}
    </div>
  );
}

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [search, setSearch] = useState("");
  const [appointments, setAppointments] = useState(initialAppointments);
  const [formData, setFormData] = useState({
    patient: "",
    date: "",
    time: "",
    doctor: "",
    status: "Scheduled",
    notes: "",
  });

  const handleAddAppointment = () => {
    if (
      !formData.patient ||
      !formData.date ||
      !formData.time ||
      !formData.doctor
    )
      return;
    const newAppt = {
      ...formData,
      id: appointments.length + 1,
    };
    setAppointments([newAppt, ...appointments]);
    setFormData({
      patient: "",
      date: "",
      time: "",
      doctor: "",
      status: "Scheduled",
      notes: "",
    });
  };

  const handleExportCSV = () => {
    const header = "Patient,Date,Time,Doctor,Status,Notes\n";
    const rows = appointments
      .map(
        (a) =>
          `${a.patient},${a.date},${a.time},${a.doctor},${a.status},${a.notes}`
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "appointments.csv";
    link.click();
  };

  const filteredAppointments = appointments
    .filter((a) => a.patient.toLowerCase().includes(search.toLowerCase()))
    .filter((a) => (selectedDate ? a.date === selectedDate : true));

  const upcomingAppointments = [...appointments]
    .filter((a) => new Date(a.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Appointments</p>
            <h3 className="text-xl text-black font-bold">
              {appointments.length}
            </h3>
          </div>
          <ClipboardList className="w-6 h-6 text-green-600" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Scheduled Today</p>
            <h3 className="text-xl text-black font-bold">
              {
                appointments.filter(
                  (a) =>
                    a.date === new Date().toISOString().split("T")[0] &&
                    a.status === "Scheduled"
                ).length
              }
            </h3>
          </div>
          <CalendarDays className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Completed</p>
            <h3 className="text-xl text-black font-bold">
              {appointments.filter((a) => a.status === "Completed").length}
            </h3>
          </div>
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
          <CalendarDays className="w-6 h-6" />
          Appointments
        </h1>
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm bg-white text-black shadow"
          />
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border rounded-md text-sm bg-white text-black shadow pr-10"
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                position: "relative",
                zIndex: 2,
              }}
            />
            <CalendarDays
              className="w-5 h-5 text-blue-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
          </div>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      {/* Upcoming Section */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          Upcoming Appointments
        </h3>
        <ul className="divide-y divide-gray-200 text-sm text-gray-700">
          {upcomingAppointments.map((appt) => (
            <li key={appt.id} className="py-2 flex justify-between">
              <span>
                {appt.patient} - {appt.date} @ {appt.time}
              </span>
              <span className="text-xs px-2 py-1 rounded-full font-medium bg-green-100 text-green-700">
                {appt.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {filteredAppointments.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-10">
            No appointments found.
          </div>
        ) : (
          filteredAppointments.map((appt) => (
            <AppointmentCard key={appt.id} appt={appt} />
          ))
        )}
      </div>

      {/* Add Form */}
      <div className="bg-white p-6 mt-6 rounded-xl shadow space-y-4 max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-2 text-black flex items-center gap-2">
          <UserPlus className="w-5 h-5 text-green-600" />
          Add New Appointment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Patient Name"
            value={formData.patient}
            onChange={(e) =>
              setFormData({ ...formData, patient: e.target.value })
            }
            className="px-3 py-2 border rounded-md text-sm bg-white text-black"
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="px-3 py-2 border rounded-md text-sm bg-white text-black"
          />
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="px-3 py-2 border rounded-md text-sm bg-white text-black"
          />
          <input
            type="text"
            placeholder="Doctor"
            value={formData.doctor}
            onChange={(e) =>
              setFormData({ ...formData, doctor: e.target.value })
            }
            className="px-3 py-2 border rounded-md text-sm bg-white text-black"
          />
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="px-3 py-2 border rounded-md text-sm bg-white text-black"
          >
            <option>Scheduled</option>
            <option>Completed</option>
            <option>Missed</option>
          </select>
        </div>
        <textarea
          placeholder="Notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-3 py-2 border rounded-md text-sm bg-white text-black"
        />
        <button
          onClick={handleAddAppointment}
          className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition"
        >
          Add Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointments;
