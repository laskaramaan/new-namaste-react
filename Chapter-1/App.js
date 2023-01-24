const heading = React.createElement("h1", {}, "heading1");
const heading2 = React.createElement("h1", {}, "heading2");
const container = React.createElement("div", {}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root")); // we are now modifying the DOM

root.render(container);
