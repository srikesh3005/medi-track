import React from "react";
import {
  Users,
  CalendarDays,
  FileText,
  Activity,
  TrendingUp,
} from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const summaryStats = [
  {
    icon: <Users className="text-blue-600 w-5 h-5" />,
    title: "Total Patients",
    value: 238,
  },
  {
    icon: <CalendarDays className="text-green-600 w-5 h-5" />,
    title: "Appointments",
    value: 142,
  },
  {
    icon: <FileText className="text-purple-600 w-5 h-5" />,
    title: "Prescriptions",
    value: 96,
  },
];

const appointmentsTrend = [
  { date: "Jun 01", count: 5 },
  { date: "Jun 05", count: 8 },
  { date: "Jun 10", count: 12 },
  { date: "Jun 15", count: 7 },
  { date: "Jun 20", count: 9 },
];

const patientDemographics = [
  { name: "Male", value: 120 },
  { name: "Female", value: 98 },
  { name: "Other", value: 20 },
];

const COLORS = ["#34D399", "#60A5FA", "#F472B6"];

const recentActivity = [
  "John Doe booked an appointment",
  "Priya Singh received a prescription",
  "Meera Nair's record updated",
  "New patient Akash Verma added",
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6" />
        Analytics Dashboard
      </h1>

      {/* 🔢 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {summaryStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow flex items-center gap-4 hover:shadow-md transition"
          >
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 📊 Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Appointments Over Time
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={appointmentsTrend}>
              <Line
                type="monotone"
                dataKey="count"
                stroke="#34D399"
                strokeWidth={2}
              />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Patient Demographics
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={patientDemographics}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {patientDemographics.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 📝 Activity Log */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold text-gray-800 flex gap-2 items-center mb-3">
          <Activity className="w-5 h-5 text-blue-500" />
          Recent Activity
        </h2>
        <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
          {recentActivity.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
