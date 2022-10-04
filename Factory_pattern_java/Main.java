package Factory_pattern_java;

public class Main {
    public static void main(String[] args) {

        CreditCardType ccType = CreditCardType.Silver;

        ICreditCard cc = CreditCardFactory.GetCreditCardObject(ccType);

        System.out.println("Limit = " + cc.getLimit());
        cc.getTransactions();
    }
}
