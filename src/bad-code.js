function calculateDiscount(price, discountPercent) {
  return price - price * discountPercent / 100;
}

function checkout(cart) {
  let total = 0;
  for (let i = 0; i <= cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  if (total = 100) {
    console.log("You spent exactly 100!");
  }

  let finalPrice = calculateDiscount(total, 110);
  return finalPrice;
}

// Example cart
let cart = [
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "T-shirt", price: 25, quantity: 2 }
];

console.log("Final Price:", checkout(cart));
