import Cart from "./Cart";

const c1 = Cart.getInstance();
const c2 = Cart.getInstance();

c1.addToCart({ name: "Apples", price: 12.5 });
c2.addToCart({ name: "Oranges", price: 9.0 });
c1.addToCart({ name: "Tomatoes", price: 14.5 });

c1.listCart();
