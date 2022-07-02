import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRouter from './routes/authRouter.js';
import transactionRouter from './routes/transactionRouter.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(authRouter);
server.use(transactionRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log('Servidor no ar!');
});