import axios from 'axios';
import { cxhApi } from '../../clients';

describe('CXH-API', () => {
  it('v1/user/login contract check', async () => {
    const response = await cxhApi.post('/v1/user/login', {
      "username":"cadwkoyssf@fwdthemsg.com",
      "password":"Password12345!"
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
    const keys = Object.keys(response.data.session);

    expect(keys.includes('authorizationToken')).toBe(true);
    expect(keys.includes('refreshToken')).toBe(true);
    expect(keys.includes('identityToken')).toBe(true);
  });
});
