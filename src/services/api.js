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
export function FetchCharacterDetails(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/${id}`,
  );
}

// export function FetchLoadMore(page) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/?page=${page}`,
//   );
// }

export function FetchFiltered(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/?name=${query}`,
  );
}