import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/Sidebar.css";
import "./assets/css/DocumentManagement.css";
import Sidebar from "./components/Sidebar";
import KnowledgeBase from "./components/KnowledgeBase";
import DocumentManagement from "./components/DocumentManagement";
import Collaboration from "./components/Collaboration";
import DataAnalysis from "./components/DataAnalysis";
import Project from "./components/Project";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Project />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/knowledge" element={<KnowledgeBase />} />
            <Route path="/documents" element={<DocumentManagement />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/analytics" element={<DataAnalysis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
