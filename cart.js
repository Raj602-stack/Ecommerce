let label = document.getElementById("label");
let shoppingcart = document.getElementById("shopping-cart");

var cartquantity = document.getElementById("cart-badge");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = () => {
  let sum = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  let carticon = document.getElementById("cartAmount");
  cartquantity.innerHTML = sum;
};
calculation();

let generatecartitems = () => {
  if (basket.length !== 0) {
    return (shoppingcart.innerHTML = basket
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
          <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">${item}</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
        <h4>Total : $ ${item * sea.price}</h4>
        </div>
        </div> 

        `;
      })
      .join(""));
  } else {
    shoppingcart.innerHTML = ``;
    label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href="./index.html"><button class="homebtn">Back to Home</button></a>
    `;
  }
};
generatecartitems();
let increment = (id) => {
  //   document.getElementById(id).innerHTML = ++count;

  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    basket.push({ id: id, item: 1 });
  } else {
    search.item++;
  }

  update(id);
  generatecartitems();
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  //   document.getElementById(id).innerHTML = --count;
  let search = basket.find((x) => x.id === id);
  if (search === undefined) return;
  else if (search.item === 0) {
    return;
  } else {
    search.item--;
  }
  update(id);
  basket = basket.filter((x) => x.item != 0);
  generatecartitems();
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  totalamount();
};
let removeitem = (id) => {
  basket = basket.filter((x) => x.id !== id);

  generatecartitems();
  localStorage.setItem("data", JSON.stringify(basket));
  totalamount();
};

let clearcart = () => {
  basket = [];
  generatecartitems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let totalamount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    label.innerHTML = `
    <h2>Total Bill : $ ${amount}</h2>
   <a href="./thankyou.html"> <button class="checkout">checkout</button></a>
    <button onclick="clearcart()" class="removeall">clear cart</button>
    `;
  } else return;
};

totalamount();
