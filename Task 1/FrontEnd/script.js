// Static array of products
const products = [
    { _id: '1', name: 'Groceries', image: 'https://media.istockphoto.com/id/521813199/photo/close-up-of-full-shopping-cart-in-grocery-store.jpg?s=612x612&w=0&k=20&c=59SMFcliUADctt9cTeUebGLgfgu-HQzU-OW3zqHM7CM=', price: 10 },
    { _id: '2', name: 'Electronics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTyShbzexiy-RWSoTZQJHQF1j158RdGgbgQ&s', price: 20 },
    { _id: '3', name: 'Clothes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohtUyi57KPQQkC1gFgrfq_JvktMJ6h2fTqw&s', price: 30 },
];

// Display all products
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products'); // Make sure you have an HTML element with id 'products'
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.price} USD</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
});

// Cart functionality
const cart = [];

function addToCart(productId) {
    const product = products.find(p => p._id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    } else {
        console.error('Product not found');
    }
}

function updateCart() {
    const cartContainer = document.getElementById('cart'); // Make sure you have an HTML element with id 'cart'
    cartContainer.innerHTML = ''; // Clear existing cart display
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - ${item.price} USD`;
        cartContainer.appendChild(cartItem);
    });
}

function checkout() {
    // Implement your checkout logic here (e.g., connecting to a payment gateway)
    alert('Checkout not implemented yet!');
}
