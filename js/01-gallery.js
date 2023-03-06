import { galleryItems } from './gallery-items.js';

const galleryContainerEl = document.querySelector('div.gallery');

function galleryCardsMarkup(items) {
  return items.map(({preview, original, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}">
            </a>
   </div>`;
  }).join('');

};
const cardsMarkupEl = galleryCardsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', cardsMarkupEl);

galleryContainerEl.addEventListener('click', clickCardsGallery);
function clickCardsGallery(e) {
  e.preventDefault();
  
  if(e.target.nodeName !== "IMG") {
    return
  }
  const descriotionModalImage = e.target.alt;
  console.log(descriotionModalImage);
  const modalWidowEl = e.target.dataset.source;
const instance = basicLightbox.create(`<img src="${modalWidowEl}" alt="${descriotionModalImage}" width="800" heigth="600">`, {
  onShow: (instance) => window.addEventListener("keydown", onEscape),
  onClose: () => window.removeEventListener("keydown", onEscape),
});
  function onEscape(e) {
    if(e.code === "Escape") {
      instance.close()
    }
  }
instance.show();
}
;
