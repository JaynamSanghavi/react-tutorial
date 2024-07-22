import React from "react";
import ReactDOM from "react-dom/client";
//Default Import
import HeaderComponent from "./Component/Header";
import BodyComponent from "./Component/Body";
import FooterComponent from "./Component/Footer";
import AboutUSComponent from "./Component/About";
import ErrorComponent from "./Component/Error";
import ContactUSComponent from "./Component/Contact";
import DetailsComponent from "./Component/Details";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Named Import
import { Title } from "./Component/Header";


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




const AppLayout = () => (
    <>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
    </>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/about",
                element: <AboutUSComponent />,
            },
            {
                path: "/",
                element: <BodyComponent />,
            },
            {
                path: "/contact",
                element: <ContactUSComponent />,
            },
            {
                path: "/rest/:id",
                element: <DetailsComponent />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
