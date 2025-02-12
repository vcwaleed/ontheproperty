require('dotenv').config();
const express =require('express');
const cookieParser = require('cookie-parser'); 
const app = express();
const mongoose =require('./conn/db');
const loginrouter =require('./routes/loginrouter');
const profilerouter = require('./routes/profilerouter');
const port=process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use('/auth',loginrouter)
app.use('/user',profilerouter)
app.listen(port, () => console.log(`Server running on port ${port}!`));