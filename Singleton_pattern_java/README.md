# Singleton pattern

Singleton pattern comes under creational pattern as this pattern provides a way to create only a single object for a specific class.

In Singleton pattern, we create an object when it is needed and then pass the same object when the client tries to create additional objects.

This design pattern is especially useful while we are dealing with File systems, database connections, etc, as we don't want to keep creating new database connections for every operation.

## Implementation

Here java is used as the base programming language. Implementation definition as follows:

- `Cart.java` - Singleton class containing all the implementation details of Singleton design pattern. The method `getInstance()` is called to get the object as the constructor is set to be `private`.
- `Main.java` - contains the main runnable function of the package.

## Execution

To execute the program, navigate to /Design-Patterns parent directory and run the following script:

```sh
$ javac Singleton_pattern_java/Main.java
$ java Singleton_pattern_java/Main
```
