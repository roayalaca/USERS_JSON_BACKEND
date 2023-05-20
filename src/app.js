import express from "express";
import userRoutes from './routes/users.js'
import getBalanceRoute from './routes/balance.js'
import cors from "cors";


const app = express();

app.use(cors())
app.use(express.json())

app.use(userRoutes);
app.use(getBalanceRoute);

export default app;
