package Factory_pattern_java;

enum CreditCardType {
    Gold,
    Silver

}

public class CreditCardFactory {

    public static ICreditCard GetCreditCardObject(CreditCardType ccType) {

        switch (ccType) {
            case Gold:
                return new Gold();

            case Silver:
                return new Silver();

            default:
                return null;
        }
    }

}
