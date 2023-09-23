function fetchBreeds(url, api) {
  return fetch(`${url}?x-api-key=${api}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      document.querySelector('select.breed-select').innerHTML = data.map(({id, name}) => {
        return `<option value='${id}'>${name}</option>`
      }).join();
    })
    .catch(error => {
      console.error('error');
    });
}

function fetchCatByBreed(id, url, search, api) {
  let catImg = '';
  fetch(`${search}?breed_ids=${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      catImg = data[0].url;
    })
    .catch(error => {
      console.error('error');
      document.querySelector('.error').classList.remove('display-none');
    });
  fetch(`${url}?x-api-key=${api}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      data = data.filter(item => item['id'] === id);
      document.querySelector('div.cat-info').innerHTML = `<img src='${catImg}' alt='${data[0].name}' width='200'><h2>${data[0].name}</h2><p>${data[0].temperament}</p>`;
      document.querySelector('.loader').classList.add('display-none');
    })
    .catch(error => {
      console.error('error');
      document.querySelector('.error').classList.remove('display-none');
    });
}

export { fetchBreeds, fetchCatByBreed }