import auth0 from 'auth0-js';

const CLIENT_DOMAIN = 'dev-3zbnrgaa.auth0.com';
const CLIENT_ID = 'eiPqzml6PJqN7HMf3ipycCNe2tUJfgc7';
const SCOPE = 'openid';
const REDIRECT = 'http://localhost:3000/callback';

const auth = new auth0.WebAuth({
  domain: CLIENT_DOMAIN,
  clientID: CLIENT_ID,
});

export function login() {
  auth.authorize({
    responseType: 'token',
    redirectUri: REDIRECT,
    scope: SCOPE,
  });
}