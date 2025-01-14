let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();

    // Afișează mesajul de succes
    showSuccessMessage("Ai adăugat produsul cu succes");
}

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");

    // Clear the list
    cartList.innerHTML = '';

    // Add items to cart
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - ${item.price} Lei`;
        cartList.appendChild(listItem);
    });

    totalPriceElement.textContent = totalPrice;
    cartCount.textContent = cart.length;
}

function showSuccessMessage(message) {
    // Creează un element pentru mesaj
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("success-message");

    // Afișează mesajul
    document.body.appendChild(messageElement);

    // Îl ascunde după câteva secunde
    setTimeout(() => {
        messageElement.remove();
    }, 3000); // 3 secunde
}

function toggleCartModal() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function proceedToCheckout() {
    const modal = document.getElementById("cart-modal");
    modal.style.display = "none";

    const form = document.getElementById("delivery-form");
    form.classList.remove("hidden");
}

function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!name || !address || !phone) {
        alert("Te rog completează toate câmpurile!");
        return;
    }

    alert(`Comanda ta a fost plasată!\nNume: ${name}\nAdresă: ${address}\nTelefon: ${phone}\nTotal: ${totalPrice} Lei`);

    // Clear cart and reset form
    cart = [];
    totalPrice = 0;
    updateCart();
    document.getElementById("delivery-form").reset();
    document.getElementById("delivery-form").classList.add("hidden");
}
