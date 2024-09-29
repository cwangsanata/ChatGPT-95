import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({
    path: 'config/.env'
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const authCheckMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    // TODO: Add real auth here
    if (req.headers.authorization !== process.env.AUTH_KEY) {
        return res.status(401).send('Unauthorized');
    }
    next();
};

app.use(cors());
app.use(express.json(), authCheckMiddleware);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.send('Hello World');
});

app.post('/send', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    return res.json({ 
        role: 'assistant',
        message: 'reply-message' });
    }
);

app.listen(PORT, () => {
  console.log(`Access on http://localhost:${PORT}`);
});