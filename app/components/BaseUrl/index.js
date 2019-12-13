const headers = new Headers();

headers.append('Authorization', `Basic ${btoa(`${'demo'}:${'demo'}`)}`);
module.exports = {
  BaseUrl: 'https://opensky-network.org/api',
  // BaseUrl: `https://demo:demo@opensky-network.org/api, {headers: ${headers}}`,
};
