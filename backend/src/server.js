import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


//middleware
app.use(cors({
    origin: 'http://localhost:5173' //allow requests from this origin (frontend)
}))
app.use(express.json());  // simple middleware to parse JSON request bodies: req.body
app.use(rateLimiter) // Apply rate limiter middleware to all routes

app.use("/api/notes", notesRoutes);



connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  })
});

