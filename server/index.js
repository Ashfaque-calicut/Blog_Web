import express from 'express';
import dotenv from 'dotenv'

import Connection from './database/db.js';
import Router from './routes/route.js'
 dotenv.config();
const app=express();

app.use('/',Router)

const PORT=4000;
app.listen(PORT,()=> console.log(`server is running Successfully on PORT  ${PORT}`));

const PASSWORD= process.env.DB_PASSWORD;
Connection(PASSWORD);