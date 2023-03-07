const BASE_URL = 'https://rickandmortyapi.com/api/character';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function FetchCharacters() {
  return fetchWithErrorHandling(
    `${BASE_URL}`,
  );
}