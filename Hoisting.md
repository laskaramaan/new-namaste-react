### Definition of Hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

**Note**

1. Var does get hoisted but it gets hoisted with a default value "undefined"

2. Let and const also gets hoestd but without any default value

### Temporal Dead Zone

There's a name for the period during execution where let/const variables are hoisted but not accessible: it's called the **Temporal Dead Zone**.

**Resource**: https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/#:~:text=As%20I've%20explained%20in,a%20default%20initialization%20of%20undefined%20.
