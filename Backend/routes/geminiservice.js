const express = require('express');
const axios = require('axios');
const router = express.Router();
const API_KEY = process.env.GEMINI_API_KEY;
console.log("Gemini API Key:", API_KEY);


router.post('/', async (req, res) => {
  const { destination, dateRange, purpose, weather } = req.body;

  const prompt = `
    Create a categorized travel packing checklist for a ${purpose} trip to ${destination} from ${dateRange}.
    Weather: ${weather}.
    Categories: Clothing, Essentials, Toiletries, Tech.
    Return as plain text.
  `;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] }
    );

    const text = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    res.json({ checklist: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gemini API error" });
  }
});

module.exports = router;
