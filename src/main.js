import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const container = document.querySelector('.container');
const gallery = document.querySelector('.gallery');

container.style.display = 'none';

form.addEventListener('submit', event => {
  event.preventDefault();
  container.style.display = 'block';
  gallery.innerHTML = '';
  const userInput = input.value.trim();
  if (userInput === '') {
    iziToast.show({
      title: 'Error',
      color: 'yellow',
      message: 'Please search for something',
    });
    container.style.display = 'none';
    return;
  }

  getImages(userInput)
    .then(images => {
      gallery.innerHTML = createMarkup(images);
      lightbox.refresh();
      form.reset();
    })
    .catch(error => console.log('Error:', error));
});
