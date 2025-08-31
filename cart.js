// Local Storage for Cart Handling
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const delivery = 120;
const taxRate = 0.09;

// Add to Cart Function
document.querySelectorAll(".addToCart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const image = button.dataset.image;
    const description = button.dataset.description;

    let existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, image, description, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  });
});

// Render Cart Page
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  if (!cartContainer) return;

  cartContainer.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <div class="item-left">
        <div class="image-placeholder"><img src="${item.image}" alt="${item.name}"></div>
        <div class="item-details">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
          <span class="item-price">${item.price} Rs</span>
        </div>
      </div>
      <div class="item-right">
        <button class="decrease">−</button>
        <span class="quantity">${item.quantity}</span>
        <button class="increase">+</button>
        <button class="delete-btn">❌</button>
      </div>
    `;

    // Add Event Listeners
    div.querySelector(".increase").addEventListener("click", () => updateQuantity(index, 1));
    div.querySelector(".decrease").addEventListener("click", () => updateQuantity(index, -1));
    div.querySelector(".delete-btn").addEventListener("click", () => removeItem(index));

    cartContainer.appendChild(div);
  });

  // Update Summary
  document.querySelector(".item-count").textContent = `${cart.length} items in your cart`;
  const tax = subtotal * taxRate;
  const total = subtotal + tax + delivery;
  document.getElementById("subtotal").textContent = `${subtotal} Rs`;
  document.getElementById("tax").textContent = `${Math.round(tax)} Rs`;
  document.getElementById("total").textContent = `${Math.round(total)} Rs`;

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Quantity
function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity < 1) cart[index].quantity = 1;
  renderCart();
}

// Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// Place Order Function
function placeOrder() {
  alert("✅ Order placed successfully!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

// Initialize Cart Page
renderCart();




