let contacts = {
  india: "+91 8888888888",
  usa: "+18888888888",
  canada: "+198888888",
  uae: "+971 88888888",
};

// contacts.get('india');
document.getElementById("select1").addEventListener("change", () => {
  var inn = contacts[document.getElementById("select1").value];
  document.getElementById("contact").innerHTML = inn;
  document
    .getElementById("flag")
    .setAttribute(
      "src",
      "./images/" + document.getElementById("select1").value + ".png"
    );
});

document.getElementById("scroll-up").classList.add("hide");
getYPosition = () => {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  return top;
};

document.addEventListener("scroll", () => {
  var scroll = getYPosition();
  var arrow = document.getElementById("scroll-up");
  scrolled = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (scroll < 250) {
    document.getElementById("header-sticky").classList.remove("sticky-bar");
  } else {
    document.getElementById("header-sticky").classList.add("sticky-bar");
  }

  if (scroll > 1000) {
    arrow.classList.remove("hide");
    arrow.classList.add("show");
    arrow.addEventListener("click", scrolled);
  } else {
    document.getElementById("scroll-up").classList.remove("show");
    document.getElementById("scroll-up").classList.add("hide");
    document.getElementById("scroll-up").removeEventListener("click", scrolled);
  }
});
document.querySelectorAll(".product-hover").forEach((product) => {
  product.classList.add("hide");
});

document.querySelectorAll('div[id^="product"]').forEach((product) => {
  product.addEventListener("mouseover", (event) => {
    product.querySelector(".product-img").classList.add("blur");
    product
      .querySelector(".product-img")
      .querySelector(".product-hover")
      .classList.remove("hide");
    product
      .querySelector(".product-img")
      .querySelector(".product-hover")
      .classList.add("show");
  });

  product.addEventListener("mouseout", (event) => {
    product.querySelector(".product-img").classList.remove("blur");
    product
      .querySelector(".product-img")
      .querySelector(".product-hover")
      .classList.add("hide");
    product
      .querySelector(".product-img")
      .querySelector(".product-hover")
      .classList.remove("show");
  });
});

// let ProductListUrl =
//   "http://my-json-server.typicode.com/swagofindia/products/db";

// async function loadProducts(ProductListUrl) {

let htmlToReturn;

fetch("./products.json")
  .then((response) => response.json())
  .then((json) => {
    productsList = json;
    productsList.products.forEach((product) => {
      console.log(product.name);
      htmlToReturn =
        '<div class="col-xl-4 col-lg-4 col-md-6">' +
        '<div class="single-product mb-60" id="product1">' +
        '  <div class="product-img">' +
        '   <img src="./images/product' +
        product.id +
        '.png" alt="" />' +
        '   <div class="new-product">' +
        "    <span> New </span>" +
        "  </div>" +
        '  <div class="product-hover">' +
        '     <div class="container">' +
        "      </div>" +
        "    </div>" +
        "   </div>" +
        '  <div class="product-caption">' +
        '    <div class="product-rating">' +
        '      <i class="far fa-star"></i>' +
        '      <i class="far fa-star"></i>' +
        '      <i class="far fa-star"></i>' +
        '      <i class="far fa-star low-star"></i>' +
        '      <i class="far fa-star low-star"></i>' +
        "    </div>" +
        '    <h4><a href="#">' +
        product.name +
        "</a></h4>" +
        '    <div class="price">' +
        "      <ul>" +
        "        <li>" +
        product.priceAfterDiscount +
        "</li>" +
        '        <li class="discount">' +
        product.price +
        "</li>" +
        "      </ul>" +
        "    </div>" +
        "  </div>" +
        " </div>" +
        " </div>";
      document.querySelector("#product-list-area").innerHTML += htmlToReturn;
    });
    document.querySelectorAll('div[id^="product"]').forEach((product) => {
      product.addEventListener("mouseover", (event) => {
        product.querySelector(".product-img").classList.add("blur");
        product
          .querySelector(".product-img")
          .querySelector(".product-hover")
          .classList.remove("hide");
        product
          .querySelector(".product-img")
          .querySelector(".product-hover")
          .classList.add("show");
      });

      product.addEventListener("mouseout", (event) => {
        product.querySelector(".product-img").classList.remove("blur");
        product
          .querySelector(".product-img")
          .querySelector(".product-hover")
          .classList.add("hide");
        product
          .querySelector(".product-img")
          .querySelector(".product-hover")
          .classList.remove("show");
      });
    });
  });
// }

// loadProducts(productsListUrl);
