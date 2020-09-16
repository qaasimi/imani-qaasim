import express from 'express';
import connectDatabase from './config/db';

// Initialize express application
const app = express();

// Connect database
connectDatabase();

// API endpoints
app.get('/', (_req, res) =>
res.send('http get request sent to root api endpoint')
);

// Connection listner
app.listen(3000, () => console.log('Express server running on port 3000'));
