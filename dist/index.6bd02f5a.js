// const heading=document.createElement("h1");
// heading.innerHTML="Welcome to Namste React Course";
// const root=document.getElementById("root");
// root.appendChild(heading);
// const heading=React.createElement("h1",{},"Welcome to Namaste React Course");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const heading1 = React.createElement("h1", {
    id: "title1"
}, "Heading1");
const heading2 = React.createElement("h2", {
    id: "title2"
}, "Heading2");
const heading3 = React.createElement("h3", {
    id: "title3"
}, "Heading3");
const container = React.createElement("div", {}, [
    heading1,
    heading2,
    heading3
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
