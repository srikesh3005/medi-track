import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DashboardHeader from "./components/Dashboard/DashboardHeader";
import ProjectMetrics from "./components/Dashboard/ProjectMetrics";
import ProjectAnalytics from "./components/Dashboard/ProjectAnalytics";
import Reminders from "./components/Dashboard/Reminders";
import ProjectList from "./components/Dashboard/ProjectList";
import TeamCollaboration from "./components/Dashboard/TeamCollaboration";
import ProjectProgress from "./components/Dashboard/ProjectProgress";
import TimeTracker from "./components/Dashboard/TimeTracker";
import PatientDemographics from "./components/Dashboard/PatientDemographics";
import Patients from "./components/Patients/Patients";
import Appointments from "./components/Appointments/Appointments";
import Prescriptions from "./components/Prescriptions/Prescriptions";
import Analytics from "./components/Analytics/Analytics";
import Teams from "./components/Teams/Teams";

function DashboardContent() {
  return (
    <>
      <DashboardHeader />
      <ProjectMetrics />
      <ProjectAnalytics />
      <Reminders />
      <ProjectList />
      <TeamCollaboration />
      <ProjectProgress />
      <TimeTracker />
      <PatientDemographics />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardContent />} />
          <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="team" element={<Teams />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
