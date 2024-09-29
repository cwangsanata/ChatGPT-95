import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path: 'config/.env'
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const authCheckMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    if (req.headers.authorization !== process.env.AUTH_KEY) {
        return res.status(401).send('Unauthorized');
    }
    next();
};

app.use(express.json(), authCheckMiddleware);

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});