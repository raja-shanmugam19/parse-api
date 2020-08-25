/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { ParseService } from '../services/ParseService';

export class ParseController {
  static async getParseRequest(req: Request, res: Response) {
    const { data } = req.body;
    const { url } = req;
    try {
      if (data) {
        const response = await ParseService.parseRequest(data, url);
        res.send(response);
      }
    } catch (err) {
      console.log(`There is a an while parsing the request data: ${err.message}`);
    }
  }
}
export default ParseController;
