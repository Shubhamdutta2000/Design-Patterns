interface IProduct {
  id?: number;
  name: string;
  price: number;
}

export default class Cart {
  private static instance: Cart;
  private products: IProduct[];
  private incrementalId: number;

  private constructor() {
    this.products = [];
    this.incrementalId = 1;
  }

  public static getInstance(): Cart {
    if (!Cart.instance) {
      Cart.instance = new Cart();
    }

    return Cart.instance;
  }

  public addToCart(product: IProduct): IProduct {
    const productWithId: IProduct = { ...product, id: this.incrementalId };
    this.products.push(productWithId);
    this.incrementalId++;
    return productWithId;
  }

  public listCart() {
    for (const product of this.products) {
      console.log(`[${product.id}] ${product.name} - ${product.price}`);
    }
  }
}
