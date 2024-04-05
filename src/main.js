import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

// ============================================
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const refs = {
  formEl: document.querySelector('.search-form'),
  imgListEl: document.querySelector('.gallery'),
  loaderEl: document.querySelector('.loader'),
};


// ====================================================================================
refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  refs.imgListEl.innerHTML = '';
  const search = event.target.elements.query.value.trim();
  if (search) {
    refs.loaderEl.classList.remove('is-hidden');
    getImages(search)
      .then(data => {
        if (!data.hits.length) {
          iziToast.error({
            position: 'topRight',
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }

        const markup = imagesTemplate(data.hits);
        refs.imgListEl.insertAdjacentHTML('beforeend', markup);
        refs.loaderEl.classList.add('is-hidden');
        lightbox.refresh();
      })
      .catch(error => console.log(error));
  } else {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'The search field is empty. Please try again!',
    });
  }

  refs.formEl.reset();
});

// ========================================
