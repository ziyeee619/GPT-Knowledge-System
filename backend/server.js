// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai'); // Correct import for OpenAI

const app = express();
app.use(cors());
app.use(express.json());

// Set up OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have your OpenAI API key in the .env file
});

// Define an endpoint to handle GPT requests
app.post('/ask', async (req, res) => {
  const { question } = req.body;
  
  if (!question) {
    return res.status(400).send({ error: "Please provide a question." });
  }
  
  try {
    // Request GPT-3.5-Turbo to answer the user's question
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    
    const answer = response.choices[0].message.content; // Extract the answer
    res.json({ answer });
  } catch (error) {
    console.error("Error interacting with OpenAI:", error);
    res.status(500).json({ error: "Failed to get answer from GPT" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
