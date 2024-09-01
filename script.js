// Image Slider Code
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = Array.from(imgs);
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// Cart Functionality Code
const addToCartBtn = document.getElementById('add-to-cart-btn');
const resetCartBtn = document.getElementById('reset-cart-btn');
const quantityInput = document.getElementById('quantity');
const cartQuantity = document.getElementById('cart-quantity');
const cartTotal = document.getElementById('cart-total');

let cart = {
    quantity: 0,
    total: 0,
};

const productPrice = 249.00;  // Replace with the dynamic price if needed

// Add event listener for Add to Cart button
addToCartBtn.addEventListener('click', () => {
    updateCart();
});

// Add event listener for Reset Cart button
resetCartBtn.addEventListener('click', () => {
    cart.quantity = 0;
    cart.total = 0;
    quantityInput.value = 1; // Reset input value

    updateCartInfo();
});

// Function to update cart
function updateCart() {
    const quantity = parseInt(quantityInput.value, 10);

    if (quantity > 0) {
        cart.quantity += quantity;
        cart.total += quantity * productPrice;

        updateCartInfo();
    }
}

// Function to update cart information display
function updateCartInfo() {
    cartQuantity.textContent = cart.quantity;
    cartTotal.textContent = `$${cart.total.toFixed(2)}`;
}

// Handle quantity input change
quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value, 10);

    if (isNaN(quantity) || quantity <= 0) {
        quantityInput.value = 1;
    }

    updateCart();
});
