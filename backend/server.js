import express from 'express';
import dotenv from 'dotenv';
const app = express();

import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});