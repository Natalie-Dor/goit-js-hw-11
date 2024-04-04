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

// refs.loaderEl.classList.add('is-hidden');

// refs.loaderEl.classList.remove('is-hidden');

// =======================================// =============================================
refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  refs.imgListEl.innerHTML = '';
  const search = event.target.elements.query.value.trim();
  refs.loaderEl.classList.remove('is-hidden');
  if (search) {
    getImages(search).then(data => {
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
      lightbox.refresh();
    });
  } else {
    iziToast.error({
      position: 'topRight',
      title: 'Error',
      message: 'The search field is empty. Please try again!',
    });
  }
  //   refs.loaderEl.classList.add('is-hidden');
  refs.formEl.reset();
});
// ========================================
