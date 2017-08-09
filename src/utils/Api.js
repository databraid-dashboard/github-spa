// const request = { query: '{orgs(userName: "michaelmurray6298") {orgs {id login url avatarUrl } } }' };

export default class Api {
  static fetchData(request) {
    return fetch('http://localhost:8000/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then(response => response.json())
      .then(console.log)

      .catch((err) => {
        throw err;
      });
  }
}