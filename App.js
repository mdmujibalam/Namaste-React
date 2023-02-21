<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
=======

// const heading=document.createElement("h1");

// heading.innerHTML="Welcome to Namste React Course";

// const root=document.getElementById("root");

// root.appendChild(heading);


// const heading=React.createElement("h1",{},"Welcome to Namaste React Course");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
>>>>>>> 0fff51601bcc35844f6a7be59ac34dedd2436be9

const heading1=React.createElement(
    "h1",
    {
        id:"title1"
    },
    "Heading1"
    );

const heading2=React.createElement(
    "h2",
    {
        id:"title2"
    },
    "Heading2"
    );
const heading3=React.createElement(
    "h3",
    {
        id:"title3"
    },
    "Heading3"
    );

const container=React.createElement("div",{},[heading1,heading2,heading3]);

const root=ReactDOM.createRoot(document.getElementById("root"));

<<<<<<< HEAD
root.render(container);
=======
root.render(container);

>>>>>>> 0fff51601bcc35844f6a7be59ac34dedd2436be9
