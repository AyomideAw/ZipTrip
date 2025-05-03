const express = require('express');
const cors = require('cors');
require('dotenv').config();

const geminiRoute = require('./routes/geminiservice');

const app = express();

// ✅ Allow frontend (adjust origin if deployed)
app.use(cors({ origin: 'http://localhost:5174' }));

app.use(express.json());
app.use('/api/gemini', geminiRoute);

const PORT = process.env.PORT || 8989;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
