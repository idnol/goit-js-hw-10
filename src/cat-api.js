import axios from 'axios';

function fetchBreeds(url, api) {
  return axios.get(`${url}?x-api-key=${api}`);
}

function fetchCatByBreed(id, url) {
  return axios.get(`${url}?breed_ids=${id}`);
}

export { fetchBreeds, fetchCatByBreed }