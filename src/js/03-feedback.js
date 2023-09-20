import _ from 'lodash';

const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const data = {};
const email = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('input', _.throttle(e => {
  data.email = email.value;
  data.message = textarea.value;
  localStorage.setItem(KEY, JSON.stringify(data));
}, 500));

if (localStorage[KEY]) {
  setInputValues(form, data);
}

form.addEventListener('submit', handleSubmit);

function setInputValues(form, data) {
  data = JSON.parse(localStorage.getItem(KEY));
  form.querySelector('input').value = data.email;
  form.querySelector('textarea').value = data.message;
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY)));
  localStorage.clear();
  form.reset();
}