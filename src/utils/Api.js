export default class Api {
  const apiUrl = process.env.GITHUB_API_URL;
  static fetchData(request) {
    return fetch(`${apiUrl}/graphql`, {
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
