document.addEventListener('DOMContentLoaded', function() {
    setupAddToCartButtons();
    setupPagination();
});

const productsPerPage = 5;
let currentPage = 1;

function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    const button = event.target;
    const product = button.closest('.product');
    const productId = product.getAttribute('data-id');
    alert(`Producto ${productId} agregado al carrito`);
}

function setupPagination() {
    const products = document.querySelectorAll('.product');
    const totalPages = Math.ceil(products.length / productsPerPage);
    
    // Create page buttons
    const pageNumbers = document.querySelector('.page-numbers');
    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.textContent = i;
        pageNumber.classList.add('page-number');
        pageNumber.addEventListener('click', () => goToPage(i));
        pageNumbers.appendChild(pageNumber);
    }

    // Add event listeners for prev and next buttons
    document.querySelector('.prev-page').addEventListener('click', prevPage);
    document.querySelector('.next-page').addEventListener('click', nextPage);

    // Show the first page initially
    goToPage(1);
}

function goToPage(page) {
    const products = document.querySelectorAll('.product');
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;

    const start = (currentPage - 1) * productsPerPage;
    const end = currentPage * productsPerPage;

    products.forEach((product, index) => {
        product.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    updatePageButtons();
}

function prevPage() {
    goToPage(currentPage - 1);
}

function nextPage() {
    goToPage(currentPage + 1);
}

function updatePageButtons() {
    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach(button => {
        button.classList.remove('active');
    });
    pageNumbers[currentPage - 1].classList.add('active');
}
