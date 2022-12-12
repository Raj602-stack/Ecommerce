var special = document.getElementById("special");
var cartquantity = document.getElementById("cart-badge");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let baske = JSON.parse(localStorage.getItem("dat")) || [];

let shopItemsData = [
  {
    id: "1",
    name: "Awesome Product 1",
    price: "28.4",
    priceAfterDiscount: "25",
    imageName: "cat1",
    isNew: "TRUE",
    rating: "3",
    img: "./images/product1.png",
  },
  {
    id: "2",
    name: "Cool Product 1",
    price: "63.9",
    priceAfterDiscount: "40",
    imageName: "cat2",
    isNew: "FALSE",
    rating: "4",
    img: "./images/product2.png",
  },
  {
    id: "3",
    name: "Amazing Product 3",
    price: "26.4",
    priceAfterDiscount: "19",
    imageName: "cat3",
    isNew: "FALSE",
    rating: "2",
    img: "./images/product3.png",
  },
  {
    id: "4",
    name: "Huge Product 4",
    price: "58.1",
    priceAfterDiscount: "50",
    imageName: "cat4",
    isNew: "TRUE",
    rating: "4",
    img: "./images/product4.png",
  },
  {
    id: "5",
    name: "Tiny Product 5",
    price: "58.3",
    priceAfterDiscount: "48",
    imageName: "cat5",
    isNew: "FALSE",
    rating: "5",
    img: "./images/product5.png",
  },
  {
    id: "6",
    name: "Expensive Product 6",
    price: "82.4",
    priceAfterDiscount: "77",
    imageName: "cat6",
    isNew: "TRUE",
    rating: "5",
    img: "./images/product6.png",
  },
];
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

let generateShop = () => {
  return (special.innerHTML = shopItemsData
    .map((x) => {
      let {
        id,
        name,
        price,
        priceAfterDiscount,
        imageName,
        isNew,
        rating,
        img,
      } = x;
      return `<div id="product-id-${id}" class="col-xl-4 col-lg-4 col-md-6">
      <div class="single-product mb-60" id="product1">
        <div class="product-img">
          <img src=${img} alt="" />
          <div class="new-product">
            <span> New </span>
          </div>
          <div class="product-hover">
            <div class="container">
              <div class="row">

                <div  class="col-4">
                  <img onclick="cartupdate(${id})" src="./images/cart.png" alt="">


                </div>
                <div class="col-4">
                 <a href="./productview.html"><img src="./images/view.png" alt=""></a> 


                </div>
                <div class="col-4">
                  <img onclick="cartupdat(${id})" src="./images/wishlist.png" alt="">

                  
                </div>
                
              </div>
            </div>
           
          </div>
        </div>

        <div class="product-caption">
          <div class="product-rating">
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star low-star"></i>
            <i class="far fa-star low-star"></i>
          </div>

          <h4><a href="#">${x.name}</a></h4>
          <div class="price">
            <ul>
              <li>$ ${x.price}</li>
              <li class="discount">$ ${x.priceAfterDiscount}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
    })
    .join(" "));
};

generateShop();

// fetch("./products.json")
//   .then((response) => response.json())
//   .then((json) => {
//     productsList = json;
//     productsList.products.forEach((product) => {
//       console.log(product.name);
//       htmlToReturn = `<div id="product-id-${product.id}" class="col-xl-4 col-lg-4 col-md-6">
//        <div class="single-product mb-60" id="product1">
//          <div class="product-img">
//            <img src=${product.img} alt="" />
//            <div class="new-product">
//              <span> New </span>
//            </div>
//            <div class="product-hover">
//              <div class="container">
//                <div class="row">

//                  <div  class="col-4">
//                    <img onclick="cartupdate(${product.id})" src="./images/cart.png" alt="">

//                  </div>
//                  <div class="col-4">
//                   <a href="./productview.html"><img src="./images/view.png" alt=""></a>

//                  </div>
//                  <div class="col-4">
//                    <img src="./images/wishlist.png" alt="">

//                  </div>

//                </div>
//              </div>

//            </div>
//          </div>

//          <div class="product-caption">
//            <div class="product-rating">
//              <i class="far fa-star"></i>
//              <i class="far fa-star"></i>
//              <i class="far fa-star"></i>
//              <i class="far fa-star low-star"></i>
//              <i class="far fa-star low-star"></i>
//            </div>

//            <h4><a href="#">${product.name}</a></h4>
//            <div class="price">
//              <ul>
//                <li>$ ${product.price}</li>
//                <li class="discount">$ ${product.priceAfterDiscount}</li>
//              </ul>
//            </div>
//          </div>
//        </div>
//      </div>`;
//       special.innerHTML += htmlToReturn;
//     });
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

let cartupdate = (id) => {
  let cart = document.getElementById("cart-badge");

  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    basket.push({ id: id, item: 1 });
  } else {
    search.item += 1;
  }
  let sum = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  cart.innerHTML = sum;
  localStorage.setItem("data", JSON.stringify(basket));
};

let cartupdat = (id) => {
  let wish = document.getElementById("cart-badg");

  let search = baske.find((x) => x.id === id);
  if (search === undefined) {
    baske.push({ id: id, item: 1 });
  } else {
    search.item += 1;
  }
  let su = baske.map((x) => x.item).reduce((x, y) => x + y, 0);
  wish.innerHTML = su;
  localStorage.setItem("dat", JSON.stringify(baske));
};

loadProducts(productsListUrl);
