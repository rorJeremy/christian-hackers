let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'christianhackers.com') {
  backendHost = 'https://christian-hackers-api.herokuapp.com';
} else if (new RegExp('christian-hackers').test(hostname)) {
  backendHost = 'https://christian-hackers-api.herokuapp.com';
} else {
  backendHost = 'http://localhost:3002';
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;
