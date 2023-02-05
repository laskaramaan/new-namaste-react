const heading1 = React.createElement("h1", {
    class: "head1"
}, "Heading1");
const heading2 = React.createElement("h1", {}, "Heading2");
const container = React.createElement("div", {
    class: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
