import React, { useState, useEffect } from "react";
import "../assets/css/KnowledgeBase.css"; // 引入CSS

function KnowledgeBase() {
  // 狀態管理區塊
  const [questions, setQuestions] = useState([]); // 所有問題
  const [filteredQuestions, setFilteredQuestions] = useState([]); // 篩選後的結果
  const [searchQuery, setSearchQuery] = useState(""); // 搜尋關鍵字
  const [sortBy, setSortBy] = useState("likes"); // 排序方式
  const [categoryFilter, setCategoryFilter] = useState("all"); // 分類篩選
  const [selectedQuestion, setSelectedQuestion] = useState(null); // 被點選查看詳情的問題
  const [showModal, setShowModal] = useState(false); // 是否顯示 modal 詳情視窗

  // 模擬從後端取得資料（可改為 fetch）
  useEffect(() => {
    const fetchedQuestions = [
      {
        id: 1,
        text: "What is AI?",
        likes: 10,
        created_at: "2024-02-21",
        category: "科技",
        answer: "AI is the simulation of human intelligence in machines.",
      },
      {
        id: 2,
        text: "How does GPT work?",
        likes: 20,
        created_at: "2024-02-22",
        category: "AI",
        answer: "GPT uses transformers to predict the next word in a sequence.",
      },
      {
        id: 3,
        text: "What is React?",
        likes: 5,
        created_at: "2024-02-23",
        category: "網頁開發",
        answer: "React is a JavaScript library for building user interfaces.",
      },
      {
        id: 4,
        text: "How to manage a project?",
        likes: 12,
        created_at: "2024-03-01",
        category: "管理",
        answer:
          "Use tools like Gantt charts, agile boards, and regular reviews.",
      },
    ];

    setQuestions(fetchedQuestions);
    updateFilteredQuestions(
      fetchedQuestions,
      searchQuery,
      sortBy,
      categoryFilter
    );
  }, [searchQuery, sortBy, categoryFilter]);

  // 根據搜尋、分類與排序更新列表
  const updateFilteredQuestions = (questions, query, sort, category) => {
    let filtered = questions.filter((q) =>
      q.text.toLowerCase().includes(query.toLowerCase())
    );

    if (category !== "all") {
      filtered = filtered.filter((q) => q.category === category);
    }

    if (sort === "likes") {
      filtered.sort((a, b) => b.likes - a.likes);
    } else if (sort === "newest") {
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    setFilteredQuestions(filtered);
  };

  // 點擊查看詳情
  const handleShowDetail = (question) => {
    setSelectedQuestion(question);
    setShowModal(true);
  };

  return (
    <div className="knowledge-base">
      <h1>知識庫</h1>

      {/* 控制區塊（搜尋、分類、排序） */}
      <div className="knowledge-controls">
        <input
          type="text"
          placeholder="搜尋問題...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-box"
        />

        <select
          className="category-dropdown"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">全部問題</option>
          <option value="科技">科技</option>
          <option value="AI">AI</option>
          <option value="網頁開發">網頁開發</option>
          <option value="管理">管理</option>
        </select>

        <select
          className="sort-dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="likes">熱門</option>
          <option value="newest">最新</option>
        </select>
      </div>

      {/* 顯示問題表格 */}
      <table className="knowledge-table">
        <thead>
          <tr>
            <th>#</th>
            <th>問題</th>
            <th>分類</th>
            <th>讚</th>
            <th>日期</th>
            <th>回答</th>
          </tr>
        </thead>
        <tbody>
          {filteredQuestions.map((q, index) => (
            <tr key={q.id}>
              <td>{index + 1}</td>
              <td>{q.text}</td>
              <td>{q.category}</td>
              <td>👍 {q.likes}</td>
              <td>{q.created_at}</td>
              <td>
                <button
                  className="detail-btn"
                  onClick={() => handleShowDetail(q)}
                >
                  💬 查看詳情
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal 彈出視窗 */}
      {showModal && selectedQuestion && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedQuestion.text}</h2>
            <p>{selectedQuestion.answer}</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              關閉
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeBase;
