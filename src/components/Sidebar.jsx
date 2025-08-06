import React from "react";
import {
  LayoutDashboard,
  User,
  Calendar,
  FileText,
  BarChart,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Stethoscope,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: <LayoutDashboard />, path: "/" },
  { label: "Patients", icon: <User />, path: "/patients" },
  { label: "Appointments", icon: <Calendar />, path: "/appointments" },
  { label: "Prescriptions", icon: <FileText />, path: "/prescriptions" },
  { label: "Analytics", icon: <BarChart />, path: "/analytics" },
  { label: "Team", icon: <Users />, path: "/team" },
];

const generalItems = [
  { label: "Settings", icon: <Settings /> },
  { label: "Help", icon: <HelpCircle /> },
  { label: "Logout", icon: <LogOut /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      {/* Logo and Main Menu */}
      <div>
        <div className="flex items-center gap-2 px-6 py-6">
          <Stethoscope className="text-green-600" />
          <h1 className="text-2xl font-bold text-green-600">MediTrack</h1>
        </div>

        <nav className="mt-4">
          {menuItems.map((item, idx) => (
            <Link
              to={item.path}
              key={idx}
              className={`flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-green-50 ${
                location.pathname === item.path
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* General Section */}
      <div className="mb-6">
        <nav>
          {generalItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 cursor-pointer text-gray-600 hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
