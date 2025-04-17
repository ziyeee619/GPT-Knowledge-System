import React, { useState, useEffect } from "react";
import axios from "axios"; // 確保安裝了 axios: npm install axios

function Project() {
  // 定義狀態
  const [question, setQuestion] = useState(""); // 使用者輸入的問題
  const [answer, setAnswer] = useState(""); // GPT 回答
  const [likes, setLikes] = useState(0); // 點讚數量
  const [loading, setLoading] = useState(false); // 請求狀態
  const [hasLiked, setHasLiked] = useState(false); // 是否已點讚

  // 檢查是否已經點讚
  useEffect(() => {
    const likedStatus = localStorage.getItem("liked_" + question);
    if (likedStatus === "true") {
      setHasLiked(true);
    }
  }, [question]);

  // 發送問題並獲取回答的函數
  const handleAskQuestion = async () => {
    if (!question) return; // 如果問題是空的，則什麼也不做

    setLoading(true); // 顯示加載狀態

    try {
      // 向後端發送請求（這裡假設後端運行在 http://localhost:5000/ask）
      const response = await axios.post("http://localhost:5000/ask", {
        question: question,
      });

      // 設定從 GPT 獲得的回答
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("獲取回答錯誤:", error);
      setAnswer("抱歉，處理您的請求時出現錯誤。");
    }

    setLoading(false); // 隱藏加載狀態
  };

  // 點讚功能
  useEffect(() => {
    const likedStatus = localStorage.getItem("liked_" + question);
    setHasLiked(likedStatus === "true");
  }, [question]);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("liked_" + question, "true"); // 记录已点赞
      localStorage.setItem("likes_" + question, newLikes); // 存储点赞数
    }
  };

  return (
    <div className="App">
      <h1>GPT 知識系統</h1>

      <div className="question-box">
        <input
          type="text"
          placeholder="請向 GPT 提問..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)} // 當用戶輸入問題時更新狀態
        />
        <button onClick={handleAskQuestion} disabled={loading || !question}>
          {loading ? "加載中..." : "提問"} {/* 顯示加載狀態 */}
        </button>
      </div>

      {answer && (
        <div className="answer-box">
          <h2>✨ AI 回答：</h2>
          <p>{answer}</p>
          <button onClick={handleLike} disabled={hasLiked}>
            👍 {likes} 點讚
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
