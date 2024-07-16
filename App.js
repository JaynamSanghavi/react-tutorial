import React from "react";
import ReactDOM from "react-dom/client";


//React element
// const JsxHeading = () => (
//     <h1 id="title1" key="jsxtitle">
//         Using JSX
//     </h1>
// );

//React component
// 1. Functional - new | Name should start with capital letter for coding convention

// const Header = () => (
//     <div class="header">
//         {/* <JsxHeading /> */}
//         {JsxHeading()}
//         <h1>Hello World</h1>
//         <ul>
//             <li>Home</li>
//             <li>Contact Us</li>
//             <li>Support</li>
//         </ul>
//     </div>
// );

// const Header2 = () => (
//     <h2 id="title1" key="jsxtitlecomponent2">Using JSX FUnctional Component 2</h2>
// );

// 2. Class Based - old |

const Title = () => (
    <a href="/">
        <img src="https://wishu.io/wp-content/uploads/2021/09/Uber-Eats-Logo-2018-1024x576-1.jpeg" alt="logo" className="logo" />
    </a>
);

const HeaderComponent = () => (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
            </ul>
        </div>
    </div>
);

const BodyComponent = () => (
    <h2>Body</h2>
);
const FooterComponent = () => (
    <h2>Footer</h2>
);

const AppLayout = () => (
    <>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);