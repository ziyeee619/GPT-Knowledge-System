import React, { useState, useEffect } from "react";

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

  // 模擬發送問題並接收回答（實際應該與後端連接 GPT API）
  const handleAskQuestion = async () => {
    setLoading(true);
    const simulatedAnswer = "This is a simulated GPT answer.";
    setTimeout(() => {
      setAnswer(simulatedAnswer);
      setLoading(false);
    }, 2000); // 模擬 API 延遲
  };

  // 點讚功能
  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      localStorage.setItem("liked_" + question, "true");
    }
  };

  return (
    <div className="App">
      <h1>GPT Knowledge System</h1>

      <div className="question-box">
        <input
          type="text"
          placeholder="Ask GPT a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleAskQuestion} disabled={loading || !question}>
          {loading ? "Loading..." : "Ask"}
        </button>
      </div>

      {answer && (
        <div className="answer-box">
          <h2>Answer:</h2>
          <p>{answer}</p>
          <button onClick={handleLike}>👍 {likes} Likes</button>
        </div>
      )}
    </div>
  );
}
export default Project;
