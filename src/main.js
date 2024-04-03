import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { imagesTemplate } from './js/render-functions';

// ============================================
const refs = {
  formEl: document.querySelector('.search-form'),
  imgListEl: document.querySelector('.container'),
};
// =======================================// =============================================
refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  refs.imgListEl.innerHTML = '';
  const search = event.target.elements.query.value;
  if (search) {
    getImages(search).then(data => {
      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      const markup = imagesTemplate(data.hits);
      refs.imgListEl.insertAdjacentHTML('beforeend', markup);
    });
  } else {
    iziToast.error({
      title: 'Error',
      message: 'The search field is empty. Please try again!',
    });
  }
  refs.formEl.reset();
});
// ========================================
