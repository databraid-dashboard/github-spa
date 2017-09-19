const GRAPHQL_ENDPOINT = '/graphql';
export default class GITHUB_API {
  static fetchData(request) {
    return fetch(`${process.env.REACT_APP_GITHUB_API_URL}${GRAPHQL_ENDPOINT}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then(response => response.json())
      .catch((err) => {
        throw err;
      });
  }
}
