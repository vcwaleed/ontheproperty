require('dotenv').config();
const express =require('express');
const app = express();
const mongoose =require('./conn/db');
const loginrouter =require('./routes/loginrouter');
const port=process.env.PORT || 3000;
app.use(express.json());
app.use('/auth',loginrouter)
app.listen(port, () => console.log(`Server running on port ${port}!`));