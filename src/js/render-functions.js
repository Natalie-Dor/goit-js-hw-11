// =======================================
function imgTemplate(data) {
  const {
    id,
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = data;
  return `<li class="gallery-item data-id="${id}">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            width="360"
            height="200"
            src="${webformatURL}"
            data-source="${largeImageURL}"
            alt="${tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${likes}</p>
          </li>
          <li><h3>Views</h3><p>${views}</p>
            </li>
            <li><h3>Comments</h3><p>${comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${downloads}</p>
                </li>
          </ul>
        </a>
      </li>`;
}
// =+++++++++++++++++++++++++++++++++++
export function imagesTemplate(arr) {
  return arr.map(imgTemplate).join('');
}
