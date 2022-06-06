let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
});

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
});

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
});

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};
