import { Link, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css"; // 確保你有引入這份 CSS

function Sidebar() {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="sidebar">
      <ul>
        <li className={getActiveClass("/")}>
          <Link to="/">首頁</Link>
        </li>
        <li className={getActiveClass("/knowledge")}>
          <Link to="/knowledge">知識庫</Link>
        </li>
        <li className={getActiveClass("/documents")}>
          <Link to="/documents">文檔管理</Link>
        </li>
        <li className={getActiveClass("/collaboration")}>
          <Link to="/collaboration">協作</Link>
        </li>
        <li className={getActiveClass("/analytics")}>
          <Link to="/analytics">數據分析</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
