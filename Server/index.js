import express from 'express';
import connectDB from './config/db.js';
import subjectRoutes from './routes/subjectRoutes.js';
import topicRoutes from './routes/topicRotes.js';
import questionRoutes from './routes/questionRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/subjects', subjectRoutes);
app.use('/api/topics',topicRoutes);
app.use('/api/questions',questionRoutes);

const PORT= process.env.PORT|| 5000;

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));

