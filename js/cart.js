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
