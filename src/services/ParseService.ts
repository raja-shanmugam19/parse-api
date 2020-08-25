import { Environment } from '../env/Environment';

export class ParseService {
  static async parseRequest(data: any, url: string) {
    try {
      let response;
      const resObj = {
        firstName: data.slice(0, 8),
        lastName: data.slice(8, 18),
        clientId: data.slice(18, 24),
      };
      if (url === Environment.v1Url) {
        response = this.parseFirstResponse(resObj);
      }
      if (url === Environment.v2Url) {
        response = this.parseSecondResponse(resObj);
      }
      return response;
    } catch (err) {
      console.log(`Error while doing the request data parsing: ${err.message}`);
    }
  }

  static parseFirstResponse(resObj: any) {
    const responseObject = {
      statusCode: 200,
      data: {
        firstName: resObj.firstName,
        lastName: resObj.lastName,
        clientId: resObj.clientId,
      },
    };
    return responseObject;
  }

  static parseSecondResponse(resObj: any) {
    const filterFirstName = resObj.firstName.slice(0, 4);
    const filterLastName = resObj.lastName.slice(0, 7);
    const responseObject = {
      statusCode: 200,
      data: {
        firstName: filterFirstName,
        lastName: filterLastName,
        clientId: resObj.clientId,
      },
    };
    return responseObject;
  }
}
export default ParseService;
