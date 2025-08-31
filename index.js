// JavaScript for slideshow
let currentIndex = 0;
const banners = document.querySelectorAll(".banner_img");

function showBanner(index) {
  banners.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextBanner() {
  currentIndex = (currentIndex + 1) % banners.length;
  showBanner(currentIndex);
}


showBanner(currentIndex);
setInterval(nextBanner, 2000); 


// JavaScript for add to cart
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function() {
    let item = {
      name: this.dataset.name,
      price: parseFloat(this.dataset.price),
      image: this.dataset.image,
      description: this.dataset.description,
      quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(cartItem => cartItem.name === item.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(item.name + " added to cart!");
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".addToCart");

    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            let name = this.dataset.name;
            let description = this.dataset.description;
            let price = parseFloat(this.dataset.price);
            let image = this.dataset.image;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if item already exists
            let existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    name: name,
                    description: description,
                    price: price,
                    image: image,
                    quantity: 1
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${name} added to cart!`);
        });
    });
});


    window.addEventListener("load", function() {
        setTimeout(function() {
            document.getElementById("loader-container").style.display = "none";
        }, 2000);
    });


    document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader-container");
    const loginSection = document.getElementById("loginSection");
    const mainContent = document.getElementById("mainContent");
    const loginForm = document.getElementById("loginForm");

    mainContent.style.pointerEvents = "none";
    mainContent.style.opacity = "0.5";


    setTimeout(() => {
        loader.style.display = "none";

        
        if (!localStorage.getItem("isLoggedIn")) {
            alert("Please login first to access the site.");
            loginSection.scrollIntoView({ behavior: "smooth" });
        } else {
           
            mainContent.style.pointerEvents = "auto";
            mainContent.style.opacity = "1";
        }
    }, 3000); 

    // JavaScript for Login
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password) {
            localStorage.setItem("isLoggedIn", true);
            alert("✅ Login successful! Enjoy full access.");
            // Enable content
            mainContent.style.pointerEvents = "auto";
            mainContent.style.opacity = "1";
            // Scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            alert("❌ Please enter both email and password.");
        }
    });
});

// Cart Count
const addToCartButtons = document.querySelectorAll('.addToCart');
const cartCount = document.getElementById('cart-count');

let count = 0;

// Add event listener to each Add to Cart button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++; 
    cartCount.textContent = count;
  });
});



