import React, { useState, useEffect } from "react";

function Leaderboard() {
  const [questions, setQuestions] = useState([]); // 原始問題列表
  const [filteredQuestions, setFilteredQuestions] = useState([]); // 篩選後的問題
  const [searchQuery, setSearchQuery] = useState(""); // 搜索關鍵字
  const [sortBy, setSortBy] = useState("likes"); // 排序方式（默認按點讚數）

  useEffect(() => {
    // 模擬從後端獲取數據
    const fetchedQuestions = [
      { id: 1, text: "What is AI?", likes: 10, created_at: "2024-02-21" },
      {
        id: 2,
        text: "How does GPT work?",
        likes: 20,
        created_at: "2024-02-22",
      },
      { id: 3, text: "What is React?", likes: 5, created_at: "2024-02-23" },
    ];

    setQuestions(fetchedQuestions);
    updateFilteredQuestions(fetchedQuestions, searchQuery, sortBy);
  }, [searchQuery, sortBy]); // Add dependencies here

  // 更新篩選和排序後的問題列表
  const updateFilteredQuestions = (questions, query, sort) => {
    let filtered = questions.filter((q) =>
      q.text.toLowerCase().includes(query.toLowerCase())
    );

    if (sort === "likes") {
      filtered.sort((a, b) => b.likes - a.likes);
    } else if (sort === "newest") {
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    setFilteredQuestions(filtered);
  };

  // 處理搜索輸入
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  // 處理排序切換
  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    setSortBy(sortOption);
  };

  return (
    <div className="leaderboard">
      <h1>Question Leaderboard</h1>

      {/* 排序與搜索區塊 */}
      <div className="leaderboard-header">
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-box"
        />

        <select
          value={sortBy}
          onChange={handleSortChange}
          className="sort-dropdown"
        >
          <option value="likes">Sort by Likes</option>
          <option value="newest">Sort by Newest</option>
        </select>
      </div>

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Question</th>
            <th>Likes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.map((q, index) => (
            <tr key={q.id}>
              <td>{index + 1}</td>
              <td>{q.text}</td>
              <td>{q.likes}</td>
              <td>{q.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
