import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search';
const API = 'live_mhzmIH5gmgzz0XQOxK5AqGSKnUt7uUSz1OQBRZoktGqFNS2Uv0PejFzDmgZsmkgN';

fetchBreeds (BASE_URL, API);

document.querySelector('select.breed-select').addEventListener('change', function() {
  document.querySelector('.loader').classList.remove('display-none');
  // document.querySelector('.error').classList.add('display-none');
  fetchCatByBreed(this.value, BASE_URL, SEARCH_URL, API);
})