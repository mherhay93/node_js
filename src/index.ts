import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

const port = 5000;

app.listen(port, () => console.log('`app started in port: ${port}`--------->', `app started in port: ${port}`));
