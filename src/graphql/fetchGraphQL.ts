/**
 * This is a wrapper method around the fetch api which helps facilitate GraphQL requests
 * to the SpaceX server. This will then try to parse the json response and return the
 * data in a promise.
 */
export const fetchGraphQL = (query: string) =>
  fetch('https://api.spacex.land/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then(response => response.json())
    .then(json => json.data)
