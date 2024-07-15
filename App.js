import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {
    id: "title",
}, "Hello World");

const heading2 = React.createElement("h2", {
    id: "title2",
}, "FROM REACT");

const divContainer = React.createElement("div", {}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divContainer);