let labe = document.getElementById("label");
let shoppingcart = document.getElementById("shopping-car");

var cartquantity = document.getElementById("cart-badg");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let baske = JSON.parse(localStorage.getItem("dat")) || [];
let calculation = () => {
  let sum = baske.map((x) => x.item).reduce((x, y) => x + y, 0);
  let carticon = document.getElementById("cartAmount");
  cartquantity.innerHTML = sum;
};
calculation();

let generatecartitems = () => {
  if (baske.length !== 0) {
    return (shoppingcart.innerHTML = baske
      .map((x) => {
        let { id, item } = x;
        let sea = shopItemsData.find((y) => y.id === id) || [];
        console.log("Amartya ", sea);
        // console.log(shopItemsData);

        return `
        <div class="cartitem"> 
        <img width="223px" height="100px" class="cart-img" src=${
          sea.img
        } alt=""/>

        <div class="details">
        <div class="title-price-x">
        <h4 class="title-price "><p>${sea.name}</p>
        <p class="cart-item-price">$ ${sea.price}</p>
        </h4>
        <i  onclick="removeitem(${id})" class="bi bi-x-lg"></i>
        </div>
         
        <h4>Total : $ ${item * sea.price}</h4>
        <button onclick="addtocart(${id})" class="checkout">Add to cart </button>
        </div>
        </div> 

        `;
      })
      .join(""));
  } else {
    shoppingcart.innerHTML = ``;
    labe.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="./index.html"><button class="homebtn">Back to Home</button></a>
    `;
  }
};
generatecartitems();
let increment = (id) => {
  //   document.getElementById(id).innerHTML = ++count;

  let search = baske.find((x) => x.id === id);
  if (search === undefined) {
    baske.push({ id: id, item: 1 });
  } else {
    search.item++;
  }

  update(id);
  generatecartitems();
  localStorage.setItem("data", JSON.stringify(baske));
};
let decrement = (id) => {
  //   document.getElementById(id).innerHTML = --count;
  let search = baske.find((x) => x.id === id);
  if (search === undefined) return;
  else if (search.item === 0) {
    return;
  } else {
    search.item--;
  }
  update(id);
  baske = baske.filter((x) => x.item != 0);
  generatecartitems();
  localStorage.setItem("data", JSON.stringify(baske));
};
let update = (id) => {
  let search = baske.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  totalamount();
};
let removeitem = (id) => {
  baske = baske.filter((x) => x.id !== id);

  generatecartitems();
  localStorage.setItem("data", JSON.stringify(baske));
  totalamount();
};

let clearcart = () => {
  baske = [];
  generatecartitems();
  localStorage.setItem("data", JSON.stringify(baske));
};

let totalamount = () => {
  if (baske.length !== 0) {
    let amount = baske
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    labe.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
   <a href="./thankyou.html"> <button class="checkout">checkout</button></a>
    <button onclick="clearcart()" class="removeall">clear cart</button>
    `;
  } else return;
};

let addtocart = (id) => {
  basket.push({ id: id, item: 1 });
  localStorage.setItem("data", JSON.stringify(basket));
  removeitem(id);
};

totalamount();
