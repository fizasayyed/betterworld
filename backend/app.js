import express, {
    json
} from 'express';
import cors from 'cors';
import mongoose from 'mongodb';
import routes from './src/routes/api.js';
// const config = require('./config');
const app = express();

// Connect to MongoDB with the database name
mongoose.connect('mongodb://localhost:27017/donateForCause', {});

// Middleware setup
app.use(json());
app.use(cors());

// Routes setup
app.use('/api', routes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;