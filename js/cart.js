let cart = {};
let total = 0;

function updateBasket() {
    const cartItemsList = document.getElementById("cart-items");
    const totalText = document.getElementById("total");
    const cartTotalSpan = document.getElementById("cart-total");

    cartItemsList.innerHTML = "";

    for (const productName in cart) {
        const product = cart[productName];

        const cartItem = document.createElement("li");
        cartItem.textContent = `${productName} x${product.quantity} - ${product.total.toFixed(0)} $`;
        cartItemsList.appendChild(cartItem);
    }

    totalText.textContent = ` ${total.toFixed(0)} $`;
    cartTotalSpan.textContent = total.toFixed(0);
}

function addToBasket(productName, price) {
    if (cart[productName]) {
        cart[productName].quantity++;
        cart[productName].total += price;
    } else {
        cart[productName] = { quantity: 1, total: price };
    }
    total += price;
    updateBasket();
}

function removeFromBasket(productName, price) {
    if (cart[productName]) {
        cart[productName].quantity--;
        cart[productName].total -= price;

        if (cart[productName].quantity === 0) {
            delete cart[productName];
        }
        total -= price;
        updateBasket();
    }
}

function addToBasketButtonClick(productName, price) {
    addToBasket(productName, price);
}

function removeFromBasketButtonClick(productName, price) {
    removeFromBasket(productName, price);
}

// Function to handle the complete purchase process
function completePurchase() {
    const loggedInUser = localStorage.getItem("loggedInUsername");

    if (!loggedInUser) {
        alert("Please sign in to complete the purchase.");
        return;
    }

    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty. Add items to the cart before completing the purchase.");
        return;
    }

    const confirmPurchase = confirm(`Are you sure you want to complete the purchase, ${loggedInUser}?`);

    if (confirmPurchase) {
        alert(`Congratulations, ${loggedInUser}! Your purchase is complete.`);
        clearCart();
    }
}

// Function to close the popup and clear the cart
function closePopup() {
    clearCart();
}

// Function to clear the cart
function clearCart() {
    cart = {};
    total = 0;
    updateBasket();
}
