// Product Data
const products = [
    // Men's Products
    {
        id: 1,
        name: "Men's Classic Fit Shirt",
        price: 2999,
        oldPrice: 4499,
        image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "men",
        isNew: false,
        description: "A comfortable classic fit shirt from our 2025 collection, perfect for any occasion."
    },
    {
        id: 2,
        name: "Men's Slim Jeans",
        price: 3499,
        oldPrice: 5299,
        image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "men",
        isNew: true,
        description: "Stylish 2025 slim fit jeans that provide comfort and durability."
    },
    {
        id: 3,
        name: "Men's Casual Jacket",
        price: 5999,
        oldPrice: 7499,
        image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "men",
        isNew: false,
        description: "A versatile casual jacket for everyday wear."
    },
    {
        id: 4,
        name: "Men's Polo Shirt",
        price: 1999,
        oldPrice: 2999,
        image: "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "men",
        isNew: true,
        description: "Classic polo shirt made from premium cotton."
    },
    {
        id: 5,
        name: "Men's Formal Suit",
        price: 14999,
        oldPrice: 18999,
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "men",
        isNew: false,
        description: "Elegant formal suit for special occasions."
    },
    {
        id: 6,
        name: "Men's Casual Sneakers",
        price: 4499,
        oldPrice: 5999,
        image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "men",
        isNew: true,
        description: "Comfortable casual sneakers for everyday wear."
    },

    // Women's Products
    {
        id: 7,
        name: "Women's Summer Dress 2025",
        price: 3799,
        oldPrice: 5299,
        image: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "women",
        isNew: true,
        description: "Elegant summer dress from our 2025 collection, perfect for warm weather."
    },
    {
        id: 8,
        name: "Women's Blouse",
        price: 2599,
        oldPrice: 3499,
        image: "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "women",
        isNew: false,
        description: "Stylish blouse that can be dressed up or down."
    },
    {
        id: 9,
        name: "Women's Skinny Jeans",
        price: 3999,
        oldPrice: 5699,
        image: "https://images.pexels.com/photos/1346187/pexels-photo-1346187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "women",
        isNew: true,
        description: "Comfortable skinny jeans with a perfect fit."
    },
    {
        id: 10,
        name: "Women's Casual Jacket",
        price: 5299,
        oldPrice: 6999,
        image: "https://images.pexels.com/photos/7691283/pexels-photo-7691283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "women",
        isNew: false,
        description: "Versatile casual jacket for everyday wear."
    },
    {
        id: 11,
        name: "Women's Formal Dress",
        price: 6999,
        oldPrice: 8999,
        image: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "women",
        isNew: true,
        description: "Elegant formal dress for special occasions."
    },
    {
        id: 12,
        name: "Women's Casual Shoes",
        price: 3799,
        oldPrice: 5299,
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "women",
        isNew: false,
        description: "Comfortable casual shoes for everyday wear."
    }
];

// DOM Elements
const featuredProductsGrid = document.querySelector('.products-grid');
const menProductsGrid = document.querySelector('.men-products');
const womenProductsGrid = document.querySelector('.women-products');
const newProductsGrid = document.querySelector('.new-products');
const cartOverlay = document.querySelector('.cart-overlay');
const cartDOM = document.querySelector('.cart');
const closeCartBtn = document.querySelector('.close-cart');
const cartIcon = document.querySelector('.cart-icon');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartCount = document.querySelector('.cart-count');
const checkoutBtn = document.querySelector('.checkout');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navIcons = document.querySelector('.nav-icons');

// Cart
let cart = [];

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Display Products
    displayProducts(products.slice(0, 8), featuredProductsGrid);
    displayProducts(products.filter(product => product.category === 'men'), menProductsGrid);
    displayProducts(products.filter(product => product.category === 'women'), womenProductsGrid);
    displayProducts(products.filter(product => product.isNew), newProductsGrid);

    // Setup Cart
    setupCart();

    // Mobile Menu
    setupMobileMenu();
    
    // Update year in any dynamic content
    updateYearReferences();
});

// Display Products
function displayProducts(products, element) {
    element.innerHTML = products.map(product => {
        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x400?text=Image+Not+Available'">
                    <div class="product-icons">
                        <a href="#" class="quick-view" data-id="${product.id}"><i class="fas fa-eye"></i></a>
                        <a href="#" class="add-to-wishlist" data-id="${product.id}"><i class="fas fa-heart"></i></a>
                    </div>
                    ${product.isNew ? '<span class="badge new-badge">New</span>' : ''}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="price">
                        ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ''}
                        ₹${product.price}
                    </div>
                    <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
    }).join('');

    // Add Event Listeners to Add to Cart Buttons
    const addToCartButtons = element.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(button.dataset.id);
            addToCart(id);
        });
    });
}

// Setup Cart
function setupCart() {
    // Show/Hide Cart
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartOverlay.classList.add('show');
    });

    closeCartBtn.addEventListener('click', () => {
        cartOverlay.classList.remove('show');
    });

    // Checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
        cartOverlay.classList.remove('show');
    });
}

// Add to Cart
function addToCart(id) {
    // Check if product is already in cart
    const item = cart.find(item => item.id === id);
    
    if (item) {
        // Increase quantity
        item.quantity++;
    } else {
        // Add new item
        const product = products.find(product => product.id === id);
        cart.push({
            ...product,
            quantity: 1
        });
    }

    // Update Cart
    updateCart();
    
    // Show Cart
    cartOverlay.classList.add('show');
}

// Update Cart
function updateCart() {
    // Update Cart Items
    cartItems.innerHTML = cart.map(item => {
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/75x75?text=No+Image'">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Update Cart Total
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);

    // Update Cart Count
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = count;

    // Add Event Listeners to Cart Items
    if (cart.length > 0) {
        // Increase Quantity
        const increaseButtons = cartItems.querySelectorAll('.increase');
        increaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.dataset.id);
                increaseQuantity(id);
            });
        });

        // Decrease Quantity
        const decreaseButtons = cartItems.querySelectorAll('.decrease');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.dataset.id);
                decreaseQuantity(id);
            });
        });

        // Remove Item
        const removeButtons = cartItems.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.dataset.id);
                removeItem(id);
            });
        });
    }
}

// Increase Quantity
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    item.quantity++;
    updateCart();
}

// Decrease Quantity
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    item.quantity--;
    
    if (item.quantity === 0) {
        removeItem(id);
    } else {
        updateCart();
    }
}

// Remove Item
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Setup Mobile Menu
function setupMobileMenu() {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        navIcons.classList.toggle('show');
        
        // Animate Hamburger
        hamburger.classList.toggle('active');
    });
}

// Add CSS for elements created in JS
const style = document.createElement('style');
style.textContent = `
    .badge {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .new-badge {
        background-color: var(--secondary-color);
        color: white;
    }
    
    .nav-links.show, .nav-icons.show {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 20px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        z-index: 999;
    }
    
    .nav-links.show {
        gap: 15px;
    }
    
    .nav-icons.show {
        top: calc(100% + 180px);
        flex-direction: row;
        justify-content: center;
    }
    
    .hamburger.active .line:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active .line:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .line:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
`;
document.head.appendChild(style);

// Update any email references
const footerSection = document.querySelector('.footer-section p:nth-child(3)');
if (footerSection) {
    footerSection.innerHTML = '<i class="fas fa-envelope"></i> info@asleshclothing777.com';
}

// Function to update any dynamic year references
function updateYearReferences() {
    const yearElements = document.querySelectorAll('.year-reference');
    yearElements.forEach(element => {
        element.textContent = '2025';
    });
} 