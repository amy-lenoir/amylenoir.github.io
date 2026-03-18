import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import projectRoutes from './routes/projects.js';
import skillRoutes from './routes/skills.js';
import experienceRoutes from './routes/experience.js';
import aboutRoutes from './routes/about.js';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
const corsOrigin = (process.env.CORS_ORIGIN || 'http://localhost:5173').split(',').map(url => url.trim());
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-cms';

// Middleware
app.use(cors({ origin: corsOrigin }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Backend is running' });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/portfolio/projects', projectRoutes);
app.use('/api/portfolio/skills', skillRoutes);
app.use('/api/portfolio/experience', experienceRoutes);
app.use('/api/portfolio/about', aboutRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
  console.log(`CORS enabled for: ${corsOrigin}`);
});
