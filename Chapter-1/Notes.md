### Q. Difference between Library and framework

### VS Code extensions

1. Better comments
2. Bracket pair colorization toggler
3. Prettier
4. vscode-icons

### Q.How do we create h1 tag inside JS?

```
<body>
<div id="root">

</div>
 <script>
    const heading = document.createElement("h1");
    heading.innerHTML = "Namaste everyone from JS";
    document.getElementById("root");
    root.appendChild(heading);
  </script>
</body>
```

**How to do the same thing with react**

```
<body>
    <div id="root">

    </div>

<script>
    const heading = React.createElement("h1", {}, "Namaste everyone!");

    console.log(heading)

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading); // the render() will modify the DOM
  </script>
</body>
```

### Q. What will I see on " console.log(heading)"

A. Plain JS Object
Therefore we can say that createElement is an object

**Note:** React.CreateElement Takes in three args

```
React.createElement(
  type,
  [props],
  [...children]
)
```

**Note:** We can inject react onto our project using CDN links

```
<script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
```

### Q. What are SOP and CORS

### Q. In the above script tags what's the difference between React and ReactDOM

A. React-> it has core react library
ReactDOM->it is used for web version of react. (we know that react can be written for web as well as mobile)

### Q. What is cross origin attribute?

A. Cross Origin attributes provide support for CORS.
IF we serve react from CDN , keep cross origin attribute set:

<script crossorigin src=""></script>

This indicates that the script should be loaded from a different origin

### Q. What is async and defer?

A. **Async** in script tag in JavaScript is a way to load scripts asynchronously. That means, if a script is async, it will be loaded independently of other scripts on the page, and will not block the page from loading.

If you have a page with several external scripts, loading them all asynchronously can speed up the page load time, because the browser can download and execute them in parallel.

By using the **defer** attribute in HTML, the browser will load the script only after parsing (loading) the page. This can be helpful if you have a script that is dependent on other scripts, or if you want to improve the loading time of your page by loading scripts after the initial page load.

**Main difference:**
Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

In most cases, it doesn’t matter which attribute you use – both will improve performance by allowing the browser to continue parsing while waiting for JavaScript to download. However, there are some situations where one attribute may be preferable to the other.
