import axios from 'axios';

function fetchBreeds(url, api) {
  return axios.get(`${url}?x-api-key=${api}`);
}

function fetchCatByBreed(id, url, api) {
  return axios.get(`${url}?api_key=${api}&breed_ids=${id}`);
}

export { fetchBreeds, fetchCatByBreed }