const express = require('express');
const cors = require('cors');
require('dotenv').config(); // ✅ Needed to use GEMINI_API_KEY from .env

const geminiRoute = require('./routes/geminiservice'); // ✅ Organized routing

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/gemini', geminiRoute); // e.g. POST to http://localhost:5000/api/gemini

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
