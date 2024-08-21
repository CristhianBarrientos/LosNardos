// Función para agregar productos al carrito
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aquí puedes agregar la lógica para agregar el producto al carrito
            alert('Producto agregado al carrito');
        });
    });
});
function mostrarProducto(arrayIds) {
    var productos = document.querySelectorAll('.card-product');
    productos.forEach(function (producto) {
        producto.style.display = 'none';
    });
    arrayIds.forEach(function (id) {
        var productoAMostrar = document.getElementById(id);
        if (productoAMostrar) {
            productoAMostrar.style.display = 'block';
        }
    });
}
