// Toggle class active hamburger menu
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingcart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingcart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar elemen

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const modalContent = itemDetailModal.querySelector(".modal-content");

const productData = {
  "baby-crab": {
    img: "Gambar/Baby Crab.jpg",
    title: "Baby Crab",
    description:
      "Nikmati gurih dan renyahnya Baby Crab pilihan, cocok untuk segala jenis hidangan.",
    stars: 3,
    price: "IDR 30K",
    oldPrice: "IDR 55K",
  },
  "nasi-padang": {
    img: "img/Products/1.jpeg",
    title: "Nasi Padang",
    description:
      "Hidangan khas Minang dengan cita rasa autentik, lengkap dengan pilihan lauk.",
    stars: 5,
    price: "IDR 30K",
    oldPrice: "IDR 55K",
  },
};

function generateStars(starCount) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<i data-feather="star" class="${
      i <= starCount ? "star-full" : ""
    }"></i>`;
  }
  return stars;
}

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    const productKey = btn.dataset.product;
    const product = productData[productKey];

    if (product) {
      modalContent.innerHTML = `
        <img src="${product.img}" alt="${product.title}" />
        <div class="product-content">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <div class="product-stars">${generateStars(product.stars)}</div>
          <div class="product-price">${product.price} <span>${
        product.oldPrice
      }</span></div>
          <a href="#"><i data-feather="shopping-cart"></i> <span>Add to Cart</span></a>
        </div>
      `;
      feather.replace();
      itemDetailModal.style.display = "flex";
    }
    e.preventDefault();
  };
});

document.querySelectorAll(".modal").forEach((modal) => {
  const closeIcon = modal.querySelector(".close-icon");

  closeIcon.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
  });
});
