# Singleton pattern

Singleton pattern comes under creational pattern as this pattern provides a way to create only a single object for a specific class.

In Singleton pattern, we create an object when it is needed and then pass the same object when the client tries to create additional objects.

This design pattern is especially useful while we are dealing with File systems, database connections, etc, as we don't want to keep creating new database connections for every operation.

## Implementation

Here python3 is used as the base programming language. Implementation definition as follows:

- `cart.py` - Singleton class containing all the implementation details of Singleton design pattern. We modify the dunder method `__new__()` so that Python can automatically handle the instance creation.
- `main.py` - contains the main runnable function.

## Execution

To execute the program, navigate to /Design-Patterns parent directory and run the following script:

```sh
$ python3 Singleton_pattern_python/main.py
```
