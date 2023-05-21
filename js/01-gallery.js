import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const newArray = galleryItems.map(({preview, original, description}) =>  {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`    
}).join('')
const galleryImageEl = document.querySelector('.gallery__image');
galleryEl.innerHTML = newArray;


galleryEl.addEventListener('click', onPreviewImageClick);

function onPreviewImageClick(event) {
    if (!event.target.classList.contains('gallery__image')) {   
        return;
    }
  event.preventDefault();

  const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);
  
  instance.show();

  document.addEventListener("keydown", onKeyEvent);
  function onKeyEvent(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onKeyEvent); 
  };
  }
}
     
//instead string 33 <img width="1400" height="900" src="${event.target.getAttribute('data-source') }"></img>


