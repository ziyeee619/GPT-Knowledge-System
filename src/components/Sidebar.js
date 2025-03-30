import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/leaderboard">排行榜</Link>
        </li>
        <li>
          <Link to="/knowledge">知識庫</Link>
        </li>
        <li>
          <Link to="/documents">文檔管理</Link>
        </li>
        <li>
          <Link to="/collaboration">協作</Link>
        </li>
        <li>
          <Link to="/analytics">數據分析</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
