import React, { useState } from "react";
import {
  FileText,
  User,
  CalendarDays,
  Stethoscope,
  Download,
} from "lucide-react";

const mockPrescriptions = [
  {
    id: 1,
    patient: "John Doe",
    date: "2025-06-18",
    doctor: "Dr. Priya Nair",
    medicines: ["Metformin 500mg - 2x/day", "Atorvastatin 10mg - 1x/day"],
    notes: "Type 2 Diabetes - regular checkup",
    status: "Active",
  },
  {
    id: 2,
    patient: "Priya Singh",
    date: "2025-06-16",
    doctor: "Dr. Ravi Kumar",
    medicines: ["Amlodipine 5mg - 1x/day"],
    notes: "Hypertension - mild",
    status: "Completed",
  },
  {
    id: 3,
    patient: "Meera Nair",
    date: "2025-06-14",
    doctor: "Dr. Sarah Ali",
    medicines: ["Salbutamol Inhaler - as needed"],
    notes: "Asthma management",
    status: "Active",
  },
];

const statusStyle = {
  Active: "bg-green-100 text-green-700",
  Completed: "bg-gray-200 text-gray-600",
};

const Prescriptions = () => {
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (prescription) => {
    setSelectedPrescription(prescription);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPrescription(null);
    setIsModalOpen(false);
  };

  const exportToCSV = () => {
    const headers = [
      "Patient",
      "Date",
      "Doctor",
      "Medicines",
      "Notes",
      "Status",
    ];
    const rows = mockPrescriptions.map((p) => [
      p.patient,
      p.date,
      p.doctor,
      p.medicines.join("; "),
      p.notes,
      p.status,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `prescriptions-${Date.now()}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Prescriptions
        </h1>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockPrescriptions.map((prescription) => (
          <div
            key={prescription.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer"
            onClick={() => openModal(prescription)}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <User className="w-4 h-4 text-green-600" />
                {prescription.patient}
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full font-medium ${statusStyle[prescription.status]}`}
              >
                {prescription.status}
              </span>
            </div>

            <div className="text-sm text-gray-600 mb-2 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-gray-500" />
              {prescription.date}
            </div>

            <div className="text-sm text-gray-600 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-gray-500" />
              {prescription.doctor}
            </div>

            <div className="mt-3 mb-2">
              <p className="text-xs font-medium text-gray-500 mb-1">
                Medicines:
              </p>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {prescription.medicines.map((med, idx) => (
                  <li key={idx}>{med}</li>
                ))}
              </ul>
            </div>

            <p className="mt-2 text-xs italic text-gray-500">
              Notes: {prescription.notes}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedPrescription && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-green-700">
              Prescription Details
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Patient:</strong> {selectedPrescription.patient}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Date:</strong> {selectedPrescription.date}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Doctor:</strong> {selectedPrescription.doctor}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Status:</strong>{" "}
              <span
                className={`inline-block px-2 py-1 rounded-full text-sm font-medium mt-1 ${statusStyle[selectedPrescription.status]}`}
              >
                {selectedPrescription.status}
              </span>
            </p>
            <div className="mt-3">
              <p className="font-semibold text-sm">Medicines:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {selectedPrescription.medicines.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-sm italic text-gray-600">
              {selectedPrescription.notes}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prescriptions;
