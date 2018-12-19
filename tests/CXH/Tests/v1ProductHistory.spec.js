import { authenticatedCxhApiClient } from '../../clients';

describe('CXH-API', () => {
  it('v1/user/login contract check', async () => {
    const authedClient = await authenticatedCxhApiClient();
    const response = await authedClient.get('/v1/accounts/1225971/product-history?start_date=20111001&end_date=20201001&period=custom&shelves=chemical')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
    const keys = Object.keys(response.data[0]);

    expect(keys.includes('productNumber')).toBe(true);
    expect(keys.includes('description')).toBe(true);
    expect(keys.includes('sdsAndLabels')).toBe(true);
    expect(keys.includes('shelf')).toBe(true);
    expect(keys.includes('quantity')).toBe(true);
    expect(keys.includes('cost')).toBe(true);
    expect(keys.includes('uom')).toBe(true);
  });
});
