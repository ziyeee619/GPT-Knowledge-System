import { NavLink } from "react-router-dom";
import "../assets/css/Sidebar.css"; // 確保有引入樣式

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            首頁
          </NavLink>
        </li>
        <li>
          <NavLink to="/knowledge" activeClassName="active">
            知識庫
          </NavLink>
        </li>
        <li>
          <NavLink to="/documents" activeClassName="active">
            文檔管理
          </NavLink>
        </li>
        <li>
          <NavLink to="/collaboration" activeClassName="active">
            協作
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" activeClassName="active">
            數據分析
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
