import React, { useState } from "react";
import "../assets/css/Collaboration.css"; // 引入樣式
import TaskBoard from "./TaskBoard"; // 拖拉式任務面板元件

function Collaboration() {
  // 留言列表
  const [comments, setComments] = useState([
    { id: 1, user: "Alice", text: "這段 API 文件需要補充說明" },
    { id: 2, user: "Bob", text: "我已完成首頁部分，請大家確認" },
  ]);

  // 新留言輸入狀態
  const [newComment, setNewComment] = useState("");

  // 留言提交處理
  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      const newEntry = {
        id: comments.length + 1,
        user: "你", // 這裡可改為登入使用者名
        text: newComment,
      };
      setComments([...comments, newEntry]);
      setNewComment("");
    }
  };

  return (
    <div className="collaboration-container">
      <div className="content-wrapper">
        {/* 頁面標題 */}
        <h1 className="collaboration-title">🟣 協作中心</h1>

        {/* ✅ 拖拉式 Trello 任務面板 */}
        <h2 className="section-title">📋 任務指派</h2>
        <TaskBoard />

        {/* ✅ 聊天室區塊（可接 socket.io 實現即時聊天） */}
        <h2 className="section-title">💬 聊天室</h2>
        <div className="chat-room">
          <p className="chat-msg">
            🚀 建議這部分功能可以用 <strong>socket.io</strong> 增強即時性
          </p>
        </div>

        {/* ✅ 知識庫 / 文檔留言討論區 */}
        <h2 className="section-title">📝 留言討論區</h2>
        <div className="comment-section">
          {/* 顯示留言列表 */}
          <div className="comment-list">
            {comments.map((c) => (
              <div key={c.id} className="comment">
                <strong>{c.user}：</strong> {c.text}
              </div>
            ))}
          </div>

          {/* 新留言輸入區 */}
          <div className="comment-input">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="留下你的討論留言..."
            />
            <button onClick={handleCommentSubmit}>送出</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
