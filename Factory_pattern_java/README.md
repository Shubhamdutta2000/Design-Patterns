# Factory Design pattern

Factory design pattern comes under creational pattern as this pattern provides one of the best ways to create an object.

In Factory pattern, we create object without exposing the creation logic to the client and refer to newly created object using a common interface.

## Implementation

Here java is used as the base programming language. Implementation definition as follows:

- `ICreditCard.java` - interface containing all function signatures of the common functionalities regarding a credit card.
- `Gold.java` - Gold credit card class which implements ICreditCard Interface
- `Silver.java` - Silver credit card class which implements ICreditCard Interface
- `CreditCardFactory.java` - Class which returns an `ICreditCard` type object based on the parameter passed to `GetCreditCardObject()`
- `Main.java` - contains the main runnable function of the package.


## Execution

To execute the program:

```sh
$ javac Main.java
$ java Main
```
