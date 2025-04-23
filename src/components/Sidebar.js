import { NavLink } from "react-router-dom";
import "../assets/css/Layout.css";

function Sidebar({ isOpen, onLinkClick }) {
  return (
    <nav className={`sidebar ${isOpen ? "active" : ""}`}>
      <ul>
        <li>
          <NavLink to="/" onClick={onLinkClick}>
            首頁
          </NavLink>
        </li>
        <li>
          <NavLink to="/knowledge" onClick={onLinkClick}>
            知識庫
          </NavLink>
        </li>
        <li>
          <NavLink to="/documents" onClick={onLinkClick}>
            文檔管理
          </NavLink>
        </li>
        <li>
          <NavLink to="/collaboration" onClick={onLinkClick}>
            協作
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" onClick={onLinkClick}>
            數據分析
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
