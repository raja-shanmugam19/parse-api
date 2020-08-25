import {
  describe, it, beforeEach, afterEach,
} from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { ParseService } from './ParseService';

describe('parseService', () => {
  beforeEach(() => {
    sinon.restore();
  });

  afterEach(() => {
    sinon.restore();
  });
  const reqObj = {
    status: 200,
    data: {
      firstName: 'JOHN0000',
      lastName: 'MICHEAL000',
      clientId: '937328'
      }
    };
    const data = 'JOHN0000MICHAEL0009994567';
    const url = '/api/v1/parse';

    it('should correct map', async () => {
      sinon.stub(ParseService, 'parseFirstResponse').returns({reqObj});
      sinon.stub(ParseService, 'parseSecondResponse').returns({reqObj});
      const response = await ParseService.parseRequest(data,url);
      console.log('test1', response);
      expect(response.reqObj.status).to.equal(200);
    });
});