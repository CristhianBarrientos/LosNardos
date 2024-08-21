// Función para desplazarse hacia arriba cuando se hace clic en el botón flotante

// Carrusel de imágenes
var currentImageIndex = 0;
var images = document.querySelectorAll('.gallery-image');
var totalImages = images.length;

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].style.display = 'block';
}

// Mostrar la primera imagen y comenzar el carrusel
images[currentImageIndex].style.display = 'block';
setInterval(showNextImage, 3000); // Cambiar la imagen cada 3 segundos

// Función para desplazarse hacia arriba cuando se hace clic en el botón flotante
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



// esconder y mostrar el footer
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let footer = document.getElementById('footer');
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        footer.classList.add('hidden-footer');
    } else if (scrollTop < 100) {
        footer.classList.remove('hidden-footer');
    } else {
        footer.classList.remove('hidden-footer');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);

