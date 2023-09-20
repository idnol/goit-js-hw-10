// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = galleryItems.map(item => {
  return `<li class="gallery__item">
               <a class="gallery__link" href="${item.original}">
                  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
               </a>
            </li>`;
}).join('');

document.querySelector('.gallery').insertAdjacentHTML('beforeend', gallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

console.log(galleryItems);
