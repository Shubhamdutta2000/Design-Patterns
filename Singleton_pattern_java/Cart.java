package Singleton_pattern_java;

import java.util.ArrayList;

public class Cart {

    private static Cart instance = null;

    ArrayList<String> items;

    private Cart() {
        items = new ArrayList<String>();
    }

    public static Cart getInstance() {
        try {
            if (instance == null) {
                instance = new Cart();
            }
        } catch (Exception e) {
            System.out.println("Encountered an error while initializing the Cart.");
        }
        return instance;
    }

    public void addItem(String item) {
        items.add(item);
    }
    
    public String toString() {
        return items.toString();
    }
}
