document.querySelector('a[href="#sobremi"]').addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  const sobreMiSection = document.querySelector('.sobre-mi');
  const yOffset = -80; // Ajusta esta cantidad para un desplazamiento más adecuado
  const y = sobreMiSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

  // Desplazarse a la sección con una animación suave
  window.scrollTo({ top: y, behavior: 'smooth' });

  // Agregar la clase para activar la animación al mostrar la sección
  sobreMiSection.classList.add('show-animation');
});

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);


// Hero Section
ScrollReveal().reveal(".hero-title", {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? "left" : "bottom",
  });
  ScrollReveal().reveal(".name", {
    ...defaultProps,
    distance: "0px",
    delay: 700,
    scale: 0,
  });
  ScrollReveal().reveal(".hero-cta", {
    ...defaultProps,
    delay: 1200,
    origin: window.innerWidth > 768 ? "left" : "bottom",
  });
  ScrollReveal().reveal(".scroll-down-link", {
    ...defaultProps,
    delay: 2000,
    origin: "top",
  });
  
  /* About Section */
  ScrollReveal().reveal(".section-title", {
    ...defaultProps,
    delay: 400,
    distance: "0px",
  });
  ScrollReveal().reveal(".about-wrapper__image", {
    ...defaultProps,
    delay: 600,
    scale: 0.5,
  });
  
  ScrollReveal().reveal(".about-wrapper__info", {
    ...defaultProps,
    delay: 700,
    distance: "100px",
    origin: window.innerWidth > 768 ? "left" : "top",
  });