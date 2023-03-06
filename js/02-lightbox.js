import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('ul.gallery');
function galleryCardsMarkup(items) {
  return items.map(({preview, original, description}) => {
    return `<li class="gallery_list_item">
    <a class="gallery__item" 
    href="${original}">
    <img class="gallery__image" 
    src="${preview}"
     alt="${description}"
     style="display: block" />
  </a>
  </li>`;
  }).join('');
  
};

const cardsMarkupEl = galleryCardsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', cardsMarkupEl);

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
