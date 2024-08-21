document.addEventListener('DOMContentLoaded', () => {
    
    fetchProducts('/api/products', 'products-container');

    fetchProducts('/api/flores', 'flores-container');

    fetchProducts('/api/funebres', 'funebres-container');

    fetchProducts('/api/globos', 'globos-container');
});

function fetchProducts(apiEndpoint, containerId) {
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById(containerId);

            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');

                // Verificar si product.price es un número antes de llamar a toFixed
                const price = typeof product.price === 'number' ? product.price.toFixed(2) : 'Precio no disponible';

                productElement.innerHTML = `
                    <div class="product-info">
                        <div class = "contenedor-imagen">
                            <img class="imagen" src="${product.img}" alt="${product.title}">
                        </div>  
                        <div class="text-info">
                            <h3>${product.title}</h3>
                            <p class="descripcion">${product.description}</p>
                            <p class="price">Q.${price}</p>
                        </div>
                    </div>
                    <button class="btn-add-to-cart">
                        <div class="btn-img-container">
                            <img src="Imagenes/floristeria.png" alt="Agregar al carrito" class="btn-img">
                        </div>
                        <span class="btn-text">Agregar</span>
                    </button>
                `;

                productsContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error:', error));
}
