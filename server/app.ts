import cors from 'cors';
import helmet from "helmet";
import express from 'express';

const app = express();
// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;