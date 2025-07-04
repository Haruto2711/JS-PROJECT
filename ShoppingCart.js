let cart = [
  { name: "Áo thun", price: 200000, quantity: 2 },
  { name: "Quần jeans", price: 350000, quantity: 1 },
];

function addToCart(name, price, quantity) {
  let newCart = {
      name: name,
      price: price,
      quantity: quantity,
  };
  cart.push(newCart);
  console.log("Add cart");
  console.log(newCart);
  console.log("Successfully");
  return cart;
}

const cart1 = addToCart("Mũ",30000,1);
console.log(cart1);

function showCart(){
    cart.forEach((carts) => {
        console.log("All cart: ");
        console.log("Name: " + carts.name);
        console.log("Price: " + carts.price);
        console.log("Quantity: " + carts.quantity);
        console.log();
    })
}

showCart();

function getTotalPrice(){
    let total = cart.reduce((accumlator,currentValue) => {
        return accumlator + currentValue.price;
    },0);
    return "Total of price: " + total;
}

const totalPrice = getTotalPrice();
console.log(totalPrice);



function removeFromCart(name){
    cart = cart.filter((carts) => {
        return carts.name !== name;
    })
    return cart;
}

const removeProduct1 = removeFromCart("Mũ");
console.log(removeProduct1);

function updateQuantity(name, newQuantity) {
  let found = cart.find((item) => item.name === name);
  if (found) {
    found.quantity = newQuantity;
    console.log(`Update ${name} to ${newQuantity} cái.`);
  } else {
    console.log(`Not Found ${name}`);
  }
}

updateQuantity("Áo thun",3);
updateQuantity("Quần jeans",10);

console.log(cart);