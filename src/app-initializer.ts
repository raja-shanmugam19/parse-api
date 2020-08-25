import express from 'express';
import bodyParser from 'body-parser';
import { registerRouter } from './router';
import { Environment } from './env/Environment';

export const appRegister = () => {
  const app = express();
  app.use(bodyParser.json());
  registerRouter(app);
  app.listen(Environment.port, () => {
    console.log(`App listening on port ${Environment.port}`);
  });
};
export default appRegister;
