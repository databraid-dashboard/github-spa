export default class GITHUB_API {
  static fetchData(request) {
    return fetch(`${process.env.REACT_APP_GRAPHQL_URL}`, {
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
