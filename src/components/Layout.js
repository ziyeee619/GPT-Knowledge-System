import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../assets/css/Layout.css"; // 加一個新的 CSS 用於 layout

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <Sidebar isOpen={sidebarOpen} />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
