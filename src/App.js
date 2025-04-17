import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/Sidebar.css";
import "./assets/css/DocumentManagement.css";
import "./assets/css/KnowledgeBase.css";
import Sidebar from "./components/Sidebar";
import KnowledgeBase from "./components/KnowledgeBase";
import DocumentManagement from "./components/DocumentManagement";
import Collaboration from "./components/Collaboration";
import DataAnalysis from "./components/DataAnalysis";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Project />} />
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
