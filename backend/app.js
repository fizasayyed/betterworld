import express, {
    json
} from 'express';
import cors from 'cors';
import { connectDatabase } from './config/database.js';
import routes from './src/routes/api.js';
const app = express();

// Middleware setup
app.use(json());
app.use(cors());

// Connect to MongoDB
connectDatabase().catch(console.dir);

// Routes setup
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;