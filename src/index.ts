import express from 'express';
import dotenv from 'dotenv';
import ParticipantRoutes from './routes/Participant';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiVersion = '/api/v1';

// Routes
app.use(`${apiVersion}/participants`, ParticipantRoutes);

app.get('/',async (req, res) => {
  res.json({ message: 'Backend Simposio API running successfully!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
