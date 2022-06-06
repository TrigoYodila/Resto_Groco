let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
});

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
});