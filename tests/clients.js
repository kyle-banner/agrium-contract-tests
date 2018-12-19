import axios from 'axios';

function cxhApiClient() {
  var instance = axios.create({
    baseURL: 'https://cxh-api.dev.cps-core.com/',
    timeout: 30000,
    headers: {
              'x-api-key': 'oVCBxonYQ9aVmWZBdJ1nu6ysvkNwhMEO65S4gZUP',
              'Authorization': 'allow',
              'Content-Type': 'application/json'
             }
  });
  return instance;
}

async function authenticatedCxhApiClient() {
  const instance = cxhApiClient();
  const response = await instance.post('/v1/user/login', {
    "username":"cadwkoyssf@fwdthemsg.com",
    "password":"Password12345!"
  })
  .then((response) => {
    return response;
  })
  .catch((error) => {
    throw error;
  });
  const session = response.data.session;

  var authenticatedInstance = axios.create({
    baseURL: 'https://cxh-api.dev.cps-core.com/',
    timeout: 30000,
    headers: {
              'user-token': session.identityToken,
              'auth-token': session.authorizationToken,
              'authorizer': 'c83DA6bC99B161aA4c249c301Bf67Cd85FEfDaf2a9FEE2F39096491FF8cC978F4b268181C344ffb47ae41a1cFC2fC6f56eeAEfDa6Fd4Ca4BbDfe2bFe5f8Dc61B3FDC32D0e788C02710EF58EB0A4B80db097AEc7e111DDD4efB89f3B29f8445e84292c0DbEdd2f7fA',
              'x-api-key': 'oVCBxonYQ9aVmWZBdJ1nu6ysvkNwhMEO65S4gZUP',
              'Authorization': 'allow',
              'Content-Type': 'application/json'
             }
  });
  return authenticatedInstance;
}

module.exports = {
  cxhApi: cxhApiClient(),
  authenticatedCxhApiClient,
};
