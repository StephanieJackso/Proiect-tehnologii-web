# Proiect-tehnologii-web
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cofetăria Secrete Dulci</title>
    <link rel="stylesheet" href="style.css"> <!-- Link către fișierul CSS -->
</head>
<body>

<header>
    Cofetăria Secrete Dulci
</header>

<!-- Produse -->
<div class="product-container">
    <div class="product">
        <img src="cheesecake.jpg" alt="Cheesecake cu fructe de pădure">
        <h3>Cheesecake cu fructe de pădure</h3>
        <p>15 Lei</p>
        <button onclick="addToCart('Cheesecake cu fructe de pădure', 35)">Adaugă în coș</button>
    </div>

    <div class="product">
        <img src="carrot.jpg" alt="Prăjitură cu morcov">
        <h3>Prăjitură cu morcov</h3>
        <p>10 Lei</p>
        <button onclick="addToCart('Prăjitură cu morcov', 25)">Adaugă în coș</button>
    </div>

    <div class="product">
        <img src="pavlova.jpg" alt="Pavlova cu fructe">
        <h3>Pavlova cu fructe</h3>
        <p>8 Lei</p>
        <button onclick="addToCart('Pavlova cu fructe', 30)">Adaugă în coș</button>
    </div>

    <div class="product">
        <img src="tiramisu.jpg" alt="Tiramisu">
        <h3>Tiramisu</h3>
        <p>15 Lei</p>
        <button onclick="addToCart('Tiramisu', 40)">Adaugă în coș</button>
    </div>

    <div class="product">
        <img src="afine.jpg" alt="Prăjitură cu afine">
        <h3>Prăjitură cu afine</h3>
        <p>10 Lei</p>
        <button onclick="addToCart('Prăjitură cu afine', 28)">Adaugă în coș</button>
    </div>
</div>

<!-- Coșul de cumpărături -->
<div class="cart">
    <button class="cart-icon" onclick="toggleCartModal()">🛒</button>
    <div id="cart-modal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="toggleCartModal()">&times;</span>
            <h2>Coșul de cumpărături</h2>
            <ul id="cart-list">
                <!-- Produsele vor fi adăugate dinamic aici -->
            </ul>
            <p>Total: <span id="total-price">0</span> Lei</p>
            <p>Produse: <span id="cart-count">0</span></p>
            <button onclick="proceedToCheckout()">Finalizare comandă</button>
        </div>
    </div>
</div>

<!-- Formular de livrare -->
<form id="delivery-form" class="delivery-form hidden" onsubmit="submitOrder(event)">
    <h3>Formular de livrare</h3>
    <input type="text" id="name" placeholder="Nume complet" required>
    <input type="text" id="address" placeholder="Adresă" required>
    <input type="text" id="phone" placeholder="Număr de telefon" required>
    <input type="submit" value="Plasează comanda">
</form>

<!-- Mesajul de succes va apărea aici (dinamic creat de JavaScript) -->
<script src="script.js"></script>
</body>
<footer>
    <p>© 2025 Cofetăria Secrete Dulci. Toate drepturile rezervate.</p>
    <p class="disclaimer">
        Disclaimer: Acest site este un proiect academic. Pentru detalii, contactați 
        <a>nitustefania22@stud.ase.ro</a>.
    </p>
</footer>
</html>
