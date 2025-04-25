import express from 'express';
import dotenv from 'dotenv';
import ParticipantRoutes from './routes/Participant/index.js';
import AdministratorRoutes from './routes/Administrator/index.js';
import cors from 'cors';
// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json({limit: '250mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));//app.use(cors());
//app.use(cors('*'));

const apiVersion = '/api/v1';

// Routes
app.use(`${apiVersion}/participants`, ParticipantRoutes);
app.use(`${apiVersion}/administrators`, AdministratorRoutes);

app.get('/',async (req, res) => {
  res.json({ message: 'Backend Simposio API running successfully!' });
});



const server = app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

process.on('SIGINT', () => {
  console.log('Apagando servidor (SIGINT)...');
  server.close(() => {
    console.log('Servidor cerrado');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('Apagando servidor (SIGTERM)...');
  server.close(() => {
    console.log('Servidor cerrado');
    process.exit(0);
  });
});


export default app;
