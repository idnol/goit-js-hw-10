import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = 'https://api.thecatapi.com/v1/images/search';
const API = 'live_mhzmIH5gmgzz0XQOxK5AqGSKnUt7uUSz1OQBRZoktGqFNS2Uv0PejFzDmgZsmkgN';
const select = document.querySelector('select.breed-select');
const loader = document.querySelector('.loader');
const errorText = document.querySelector('.error');
const info = document.querySelector('.cat-info');

fetchBreeds (BASE_URL, API)
  .then(response => {
    select.innerHTML = response.data.map(item => {
      return `<option value='${item['id']}'>${item['name']}</option>`
    }).join();
  })
  .catch(error => {
    errorText.classList.remove('display-none');
    console.error(error);
  });

select.addEventListener('change', handleChange);


function handleChange() {
  errorText.classList.add('display-none');
  info.classList.add('display-none');
  loader.classList.remove('display-none');
  fetchCatByBreed(this.value, SEARCH_URL, API)
    .then(result => {
      const img  = result.data[0].url;
      const {name, description, temperament} = result.data[0].breeds[0];
      info.innerHTML = `
            <img src='${img}' alt='${name}' width='200'>
            <div class='text'>
              <h2>${name}</h2>
              <p>${description}</p>
              <p><span>Temperament: </span>${temperament}</p>
            </div>
          `;
      loader.classList.add('display-none');
      info.classList.remove('display-none');
    })
    .catch(error => {
      loader.classList.add('display-none');
      errorText.classList.remove('display-none');
      console.error(error);
    });
}