/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlwares/glovalErrorHandler';
import notFound from './app/middlwares/notFound';
import router from './app/routes';
const app: Application = express();

//Parsers
app.use(express.json());
app.use(cors());

// Application Routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  res.send('Hello First Project ');
};

app.get('/', test);

app.use(globalErrorHandler);

// NotFound API Handel
app.use(notFound);

export default app;
