## Things that we learned in this lecture

1. What is pollyfill

2. what converts the newer code to older code?

3. What is Babel?

4. Suppose an interviewer ask you, how can you build a performant scalable webapp

5. Differnece between npm and npx.

6. read about react key reconciliation

7. How does createElement work

8. What is JSX?

9. Major differneces between HTML and JSX

10. Advatages of JSX

11. How many package-lock.json file is present inside a project?

12. React component

13. differnece between react element and functional component

14. How to use the react element inside the component?

15. what is component composition?

### Q. What is pollyfill?

A. Pollyfill is a code which is a replacement for a newer version of code, so that it can become compatible with olde rversion of browser.
For e.g. suppose if your browser does not understand promises, then will convert that peice of code to something which is understandable by the browser.

### Q. what converts the newer code to older code?

A. Babel does it, and Babel does this with the help of something known as browserlist.
Browserlist keeps tracks for which version of our code should work.

### Q. What is Babel?

A. Is is just a peice of JS code which is reading our code and then convert it to older version of code which is compatible with older versions of browser.

**Note:** Create-react-app uses webpack along with Babel

### Q.Suppose an interviewer ask you, how can you build a performant scalable webapp

A. You have to tell the interviewer that there are so many things that react optimizes and there are so many things which bundler gives us.
So an app is a combination of all these things which makes it optimised

### Q.Differnece between npm and npx.

A. npm is used for installing stuffs and npx is used for execution.
So we say "npx" is equivalent to "npm run"

### read about react key reconciliation

[sibling children, keys, render, re-render, performance, why keys are important]

### Q. How does createElement work

A. So when you write React.creatElement it will create an object,

    **Q.Now what happens with the object?**
    A. The object is then converted to HTML code and then it puts up on DOM

    [React.createElement => object => HTML(DOM)]

### Q. What is JSX?

A. The ability to write HTML like syntax inside Javascript is given by JSX. It made writing code in react more developer friendly.

### Q. Major differneces between HTML and JSX

A. One example is class and className

**Note:** The browser cannot understand JSX syntax directly, it needs **Babel**

JSX is coverted to react.createElement with the help of babel and then it is converted to object which is then converted to HTML(DOM)

[JSX => React.createElement => Object => HTML(DOM)]

```
// React

const h = React.createElement(
    "h1"
    {
        id:"title",
        key:"h2",
    }
    "Namaste React"
)

// JSX syntax

const h = (
    <h1 id = "title" key = "h2">
         Namaste React
    </h1>
)
```

### Q. Advatages of JSX

A. Developer expereience, readability, less code, maintainability

### Q. How many package-lock.json file is present inside a project?

A. Two,one is created by us it conatins exact verions of all the dependcies that we have and the other one is present inside node_modules it takes care of transitive dependencies so the versions of transitive dependencies is present inside this one.

### Q. React element

```
const heading =(
    <h1 id="title" key="h2">
    Namaste react
    </h1>
);
```

**Syntax for rendering react element:**
root.render(heading)

### Q. React component

A. two types of components are there: 1. Functional components => New 2. Class Based components => Old

**Functional Components:** Functional component is nothing but a JS function that returns some piece of JSX(react element) or a component itself
e.g.:
`    const HeaderComponent =() =>{
            return (
                <h1>hello, world</h1>
            )
        }`
**Remember:** In Functional component the name starts with capital letter. It's a good practice to follow this

    ```
    const HeaderComponent =() =>{
            return (
                <div>
                <h1>hello, world</h1>
                </div>
            )
        }

    // we can write the same function without return also

     const HeaderComponent =() =>{
          <div>
                <h1>hello, world</h1>
        </div>

        }
    ```

    **Syntax for rendering functional component:**
    root.render(<HeaderComponent/>)

### differnece between react element and functional component

const heading =(), const HeaderComponent =() =>{}

### Q. How to use the react element inside the component?

A. we will do that with the help of curly braces{}

```
const heading =(
    <h1 id="title" key="h2">
    Namaste react
    </h1>
);

const HeaderComponent =() =>{
    return (
        {heading}
                <div>
                <h1>hello, world</h1>
                </div>
            )
}


```

### **Imp:** In JSX=> {} inside this curly braces we can write any piece of JS code

### Q. what is component composition?

A. If we are using component inside a component then this is known as component composition
