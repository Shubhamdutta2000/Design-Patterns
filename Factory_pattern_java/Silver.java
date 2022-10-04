package Factory_pattern_java;

/**
 * Silver
 */
public class Silver implements ICreditCard {

    @Override
    public double getLimit() {
        return 50000.00;
    }

    @Override
    public void makePayment() {
        System.out.println("Payment made for Silver Credit Card");

    }

    @Override
    public void getTransactions() {
        System.out.println("Silver credit card transactions listed here");

    }

}