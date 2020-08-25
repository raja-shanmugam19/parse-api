import { ParseController } from './controller/ParseController';

export const registerRouter = (app) => {
  app.post('/api/v1/parse', ParseController.getParseRequest);
  app.post('/api/v2/parse', ParseController.getParseRequest);
};
export default registerRouter;
