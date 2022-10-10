from cart import Cart
if __name__ == "__main__":
    cart1 = Cart()
    cart2 = Cart()
    print(cart1 is cart2)  # Output: True

    cart1.add_item("Cake")
    print(cart1)  # Output: ['Cake']

    cart2.add_item("Chocolates")
    print(cart2)  # Output: ['Cake', 'Chocolates']
