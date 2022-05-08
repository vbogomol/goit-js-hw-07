import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = galleryItems.map(image => `<a class="gallery__link" href="${image.original}" onclick = "event.preventDefault()"><img class="gallery__image" src = "${image.preview}" data-source="${image.original}" alt = "${image.description}"/></a>`)
    .join("");

const divGallery = document.querySelector(".gallery");

divGallery.setAttribute("class", "gallery gallery__item");
divGallery.insertAdjacentHTML("afterbegin", gallery);

console.log(galleryItems);

divGallery.addEventListener("click", openModal);

function openModal(e) {
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }

    const dataSource = e.target.getAttribute("data-source")
    console.log(dataSource);

    const instance = basicLightbox.create(`
        <img src="${dataSource}"/> `)
    instance.show();
    console.log(instance);
    document.addEventListener("keydown", closeModal);

    function closeModal(e) {
        if (e.code === "Escape") {
            instance.close();
            window.removeEventListener('keydown', closeModal);
        }
    }
}