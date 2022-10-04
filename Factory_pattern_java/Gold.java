package Factory_pattern_java;

/**
 * Gold
 */
public class Gold implements ICreditCard {

    @Override
    public double getLimit() {
        return 100000.00;
    }

    @Override
    public void makePayment() {
        System.out.println("Payment made for Gold Credit Card");

    }

    @Override
    public void getTransactions() {
        System.out.println("Gold credit card transactions listed here");

    }

}