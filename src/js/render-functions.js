import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './pixabay-api';

function imageTemplate(img) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = img;
  const markup = `<li class="photo-card">
  <a class="gallery-link" href="${img.largeImageURL}">
    <img
      class="gallery-image"
      src="${img.webformatURL}"
      alt="${img.tags}"
    />
  </a>
  <div class="info">
        <p>Likes: <span class="likes">${img.likes}</span></p>
        <p>Views: <span class="views">${img.views}</span></p>
        <p>Comments: <span class="comments">${img.comments}</span></p>
        <p>Downloads: <span class="downloads">${img.downloads}</span></p>
      </div>
</li>`;
  return markup;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function showLoader() {
  refs.gallery.classList.add('hidden');
  refs.loader.classList.remove('hidden');
}
export function hideLoader() {
  refs.loader.classList.add('hidden');
  refs.gallery.classList.remove('hidden');
}

export function imagesTemplate(arr) {
  lightbox.refresh();
  hideLoader();
  return arr.map(imageTemplate).join('');
}
