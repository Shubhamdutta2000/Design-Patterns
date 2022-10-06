package Singleton_pattern_java;

public class Main {
    public static void main(String[] args) {
        
        Cart cart1 = Cart.getInstance();
        cart1.addItem("Cake");
        cart1.addItem("Chocolates");

        System.out.println(cart1); // Output: [Cake, Chocolates]

        Cart cart2 = Cart.getInstance();
        cart2.addItem("Biscuits");

        System.out.println(cart2); // Output: [Cake, Chocolates, Biscuits]
        System.out.println(cart1 == cart2); // Output: true
    }
}
