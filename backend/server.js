// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const axios = require('axios'); // 新增 axios，給 Flask 用

const app = express();
app.use(cors());
app.use(express.json());

// Set up OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ GPT 問答 API
app.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).send({ error: "Please provide a question." });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    const answer = response.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error("❌ GPT Error:", error);
    res.status(500).json({ error: "Failed to get answer from GPT" });
  }
});

// ✅ 新增分類 API：呼叫 Flask
app.post('/api/classify', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "No question provided." });
    }

    const response = await axios.post('http://localhost:5001/classify', { question });
    res.json({ category: response.data.category });
  } catch (err) {
    console.error('❌ 分類服務錯誤:', err.message);
    res.status(500).json({ error: '分類失敗' });
  }
});

// 啟動 server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Node.js Server running on http://localhost:${PORT}`);
});
