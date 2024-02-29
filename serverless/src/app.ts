import serverlessExpress from '@codegenie/serverless-express';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  res.json({ hello: 'world' });
});

export const handler = serverlessExpress({ app });
