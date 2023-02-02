### What is lexical environment?

-> Lexical environment is created whenever execution context is created.

-> Lexical environment = local memory + reference to lexical environment of parent scope

**Note** The whole chain of lexical enviroments is known as **scope chain**

```
function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}

a();
```
