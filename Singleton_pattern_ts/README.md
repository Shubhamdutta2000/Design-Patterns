# Singleton Patten in TypeScript

Singleton Pattern is a design pattern in which the instantiation of a class is restricted to a single instance. 
This is done so that the same instance can be reused to store common data across the entire application. 
A few points related to Singleton design patterns are as follows
- Private constructor is used. This is done to make sure no one can instantiate the class from outside. The constructor can only be called internally.
- A public `getInstance()` method is used. As we cannot instantiate the class, still we need the instance of the class to work upon in our application, this `getInstance()` is useful. This method always checks whether there is an existing instance of the class to reuse the same. If not, then it'll create a new instance. This method holds the integrity of a singleton class.

## When to use the Singleton pattern?
- When you want to restrict the number of instances of a class
- When you want to use an instance as a shared data holding space
- Consider Singleton patterns over global variables as you can control the lazy allocation of memory though it
- Use-cases commonly following Singleton Patten:
  - Database connection pool
  - Logging framework


## Implementing Shopping Cart
A simple Shopping cart has been implemented following the singleton pattern. 
```ts
import Cart from "./Cart";

const c1 = Cart.getInstance();
const c2 = Cart.getInstance();

c1.addToCart({ name: "Apples", price: 12.5 });
c2.addToCart({ name: "Oranges", price: 9.0 });
c1.addToCart({ name: "Tomatoes", price: 14.5 });

c1.listCart();
```
Here multiple instances of the `Cart` class has been created (`c1` and `c2`), but as `Cart` is a singleton a single instance is only used internally.

This example can be thought of in a way: 
In an eCommerce Site, multiple pages can have their own instances of carts (let's say `c1` and `c2`). When a user adds a product from a page, the cart instance of that page will only be used (`c1`). Similarly, the other page will use the other cart instance (`c2`)
However, as `Cart` is a singleton, adding products from different pages will drop all the products into the single holding space. Thus, when the user tries to list the items in the cart(`c1.listCart()`), all the items regardless of from which page they were added will be listed down
