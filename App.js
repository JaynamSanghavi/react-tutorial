import React from "react";
import ReactDOM from "react-dom/client";


//React element
const JsxHeading = () => (
    <h1 id="title1" key="jsxtitle">
        Using JSX
    </h1>
);

//React component
// 1. Functional - new | Name should start with capital letter for coding convention

const Header = () => (
    <div class="header">
        {/* <JsxHeading /> */}
        {JsxHeading()}
        <h1>Hello World</h1>
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Support</li>
        </ul>
    </div>
);

const Header2 = () => (
    <h2 id="title1" key="jsxtitlecomponent2">Using JSX FUnctional Component 2</h2>
);

// 2. Class Based - old |

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);