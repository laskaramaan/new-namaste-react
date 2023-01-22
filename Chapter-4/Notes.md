# Build our own food ordering app

**Steps:**
1.Plan the project
Header - Logo(Title) - Nav Items(Right Side) - Cart
Body - Search bar - RestrauntList - RestaurantCard (many cards) - Image - Name - Rating - Cusines
Footer - links - Copyright

      2.Start building the components starting with the header

Note: JSX can have only one parent

### Q.What is React.Fragment?

A.Its an empty tag which react provides us "<React.Fragment></React.Fragment> or <></>"

### Q. Join items in array JS

A. Read about it

### Read about Config driven UI

when you build a real world application, The UI is driven by a config which is sent by backend

### Q. Optional chaining (?.)

A. The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.

### Props in react

    Props is shorthand for properties, when we say pass props-> that means i am passing some data or some properties into my component

### Arguments and parameters in functions

    function fn(param1,param2) -> when we create the function

    fn(arg1, arg2) -> when we are calling the function

    Therefore we can say that, we pass-in args and we recieve params

**Remember**: We use map() and not for loop in functional programming

### Q.What is virtual DOM

    First of all,Virtual is not a concept just of react it's used in many places.
    We keep a representation of the DOM with us , this is known as virtual DOM.

**Why do we need virtual DOM?**
we need virtual DOM for something known as reconsiliation in react

    **Reconciliation** is an algorithm(i.e. DIFF algorithm) that react uses to find out the differnece between the actual DOM and virtual DOM and then it finds out what needs to be updated and only updated that small part

### Why do we use Keys?

**Very Imporrtant**: Suppose there are 3 sibling div , now one div is added....react would get confused which div is added later on and because of this it will re-render everyhing.To overcome this problem we need key so that react can identify the divs uniquely, now it will add only the div and render that.

### Q. Why react is fast?

A. react uses virtual DOM, virtial DOM is a representation(blueprint) of actual DOM and react uses something known reconcilliation, reconcilliation is the process where we have DIFF algorithm which finds out the differnece between the actual DOM and virtual DOM and then it will re-render only the portiom which is required.

### Q. WHy not to use index as Key
