const express = require('express');
const cors = require('cors');
require('dotenv').config();

const geminiRoute = require('./geminiService');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/gemini', geminiRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
