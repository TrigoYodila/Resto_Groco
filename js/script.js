let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
});
