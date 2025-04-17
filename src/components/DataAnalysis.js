import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "../assets/css/DataAnalysis.css";

function DataAnalysis() {
  const [questionTrends, setQuestionTrends] = useState([]);
  const [categoryLikes, setCategoryLikes] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [timeRange, setTimeRange] = useState("monthly"); // 時間篩選

  useEffect(() => {
    // 模擬資料，可依照 timeRange 切換不同資料
    if (timeRange === "weekly") {
      setQuestionTrends([
        { date: "Mon", count: 5 },
        { date: "Tue", count: 7 },
        { date: "Wed", count: 6 },
        { date: "Thu", count: 10 },
        { date: "Fri", count: 8 },
        { date: "Sat", count: 4 },
        { date: "Sun", count: 9 },
      ]);
    } else {
      setQuestionTrends([
        { date: "Jan", count: 10 },
        { date: "Feb", count: 18 },
        { date: "Mar", count: 25 },
        { date: "Apr", count: 32 },
      ]);
    }

    setCategoryLikes([
      { category: "AI", likes: 120 },
      { category: "Web Dev", likes: 90 },
      { category: "Management", likes: 50 },
      { category: "Technology", likes: 60 },
    ]);

    setPopularCategories([
      { name: "AI", value: 40 },
      { name: "Web Dev", value: 30 },
      { name: "Management", value: 20 },
      { name: "Technology", value: 10 },
    ]);

    setActiveUsers([
      { username: "alice", count: 34 },
      { username: "bob", count: 27 },
      { username: "charlie", count: 18 },
    ]);
  }, [timeRange]);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="data-analysis">
      <h1>📊 數據分析</h1>

      {/* 時間篩選 */}
      <div className="time-filter">
        <label>時間範圍：</label>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="weekly">近一週</option>
          <option value="monthly">近一月</option>
        </select>
      </div>

      <section>
        <div className="analysis-section">
          <h2>🟢 問答量趨勢</h2>
          <LineChart width={600} height={300} data={questionTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#007bff"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </section>

      <section>
        <div className="analysis-section">
          <h2>🟡 各分類點讚數</h2>
          <BarChart width={600} height={300} data={categoryLikes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="likes" fill="#ff8042" />
          </BarChart>
        </div>
      </section>

      <section>
        <div className="analysis-section">
          <h2>🔵 最受歡迎分類</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={popularCategories}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {popularCategories.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </section>

      <section>
        <div className="analysis-section">
          <h2>👤 使用者活躍排行榜</h2>
          <table className="active-users-table">
            <thead>
              <tr>
                <th>#</th>
                <th>使用者</th>
                <th>問答數</th>
              </tr>
            </thead>
            <tbody>
              {activeUsers.map((user, index) => (
                <tr key={user.username}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default DataAnalysis;
