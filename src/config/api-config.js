let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'christianhackers.com') {
  backendHost = 'https://christian-hackers-api.herokuapp.com';
} else if (hostname === 'christianhackers-staging.herokuapp.com') {
  backendHost = 'https://christian-hackers-api-staging.herokuapp.com';
} else {
  backendHost = 'http://localhost:3002';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;
