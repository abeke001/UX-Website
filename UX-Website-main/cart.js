document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = [];
    let total = 0;

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            // Add item to cart
            cart.push({ name: productName, price: productPrice });

            // new total
            total += productPrice;

            
            updateCartUI();
        });
    });

    function updateCartUI() {
        // removes cart items
        cartItems.innerHTML = "";

        // adds items to cart 
        cart.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - £${item.price}`;
            listItem.dataset.index = index;
            cartItems.appendChild(listItem);
        });

        // displays new total
        cartTotal.textContent = total.toFixed(2);
    }
});
