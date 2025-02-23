import { refs } from '../main';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
  return `<li class="gallery-item">
  <a class="gallery-link" href="${img.largeImageURL}">
    <img
      class="gallery-image"
      src="${img.webformatURL}"
      alt="${img.tags}"
    />
  </a>
  <div class="image-info">
        <p>Likes: <span class="likes">${img.likes}</span></p>
        <p>Views: <span class="views">${img.views}</span></p>
        <p>Comments: <span class="comments">${img.comments}</span></p>
        <p>Downloads: <span class="downloads">${img.downloads}</span></p>
      </div>
</li>`;
}
export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');

  //   lightbox.refresh();
}
