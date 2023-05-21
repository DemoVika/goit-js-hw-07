import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const newArray = galleryItems.map(({preview, original, description}) =>  {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`    
}).join('')
const galleryImageEl = document.querySelector('.gallery__image');
galleryEl.innerHTML = newArray;
//console.log(newArray);

const lightbox = new SimpleLightbox('.gallery__link', { captionsData: "alt", captionDelay: 250 });
console.log(lightbox);