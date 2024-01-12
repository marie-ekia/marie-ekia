// Sample data for demonstration
const products = [
    { name: 'Handmade Basket', category: 'Home Decor', price: 25, age: 3 },
    { name: 'Recycled Paper Journal', category: 'Stationery', price: 15, age: 1 },
    { name: 'Wooden Coasters Set', category: 'Home Decor', price: 20, age: 2 },
    // Add more products
];

// Function to generate HTML for gallery items
function generateGalleryItem(product) {
    return `<div class="gallery-item">
                <h3>${product.name}</h3>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <p><strong>Age:</strong> ${product.age} years</p>
            </div>`;
}

// Function to initialize the gallery
function initGallery() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = products.map(generateGalleryItem).join('');
}

// Function to filter products based on category
function filterProducts(category) {
    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);
    updateGallery(filteredProducts);
}

// Function to sort products based on age
function sortProducts() {
    const sortedProducts = [...products].sort((a, b) => a.age - b.age);
    updateGallery(sortedProducts);
}

// Function to update the gallery content
function updateGallery(products) {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = products.map(generateGalleryItem).join('');
}

// Event listeners for filter buttons
document.getElementById('filterAll').addEventListener('click', () => filterProducts('All'));
document.getElementById('filterHomeDecor').addEventListener('click', () => filterProducts('Home Decor'));
document.getElementById('filterStationery').addEventListener('click', () => filterProducts('Stationery'));

// Event listener for sort button
document.getElementById('sortAge').addEventListener('click', sortProducts);

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', initGallery);
