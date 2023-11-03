## Deep copy and shallow copy

In JS whenerver we copy an object to another object, the refernce gets copied not the data.

But when we copy a variable to another variable , the value gets copied.

### Shallow copy <--in shallow copy only the first level of the object is covered where the value gets copied not the reference

1. use `Object.assign({},arr1)`

```
let obj={
    name:"peter"
}

let user=Object.assign({},obj);

user.name="amaan"

console.log("obj",obj)
console.log("user",user)
```

2. user `{...arr1}` spread operator

```
let obj={
    name:"peter"
}

let user={...obj}

user.name="amaan"

console.log("obj",obj)
console.log("user",user)
```

### Deep copy <-- In deep copy the nested object is also getting copied by value

Here neither spread operator nor Object.assign will work.

We have to convert the object to string and then again convert to object

```
let user=JSON.parse(JSON.stringify(obj))
```

```
let obj={
    name:"peter",
    address:{
        city:"Silchar",
        state:"Assam"
    }
}

let user=JSON.parse(JSON.stringify(obj))

user.address.city="xyz"

console.log("obj",obj)
console.log("user",user)
```

But there is one problem with this. If there is a function in the object then on strinfying..that function will get vanished...And there is no inbuilt solution in JS. We have to use A library for it. **Lodash**

```
let obj={
    name:"peter",
    address:{
        city:"Silchar",
        state:"Assam"
    },
    getData:function(){
        return "all data is here"
    }
}

let user=JSON.parse(JSON.stringify(obj))

user.address.city="xyz"

console.log("obj",obj)
console.log("user",user)
```

**Lodash**

```
arr2=_.cloneDeep(arr1)
```
