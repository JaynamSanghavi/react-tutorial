import { useState } from "react";

//for named import
export const Title = () => (
    <a href="/">
        <img src="https://wishu.io/wp-content/uploads/2021/09/Uber-Eats-Logo-2018-1024x576-1.jpeg" alt="logo" className="logo" />
    </a>
);

const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    {isLoggedIn ? (
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) : (
                        <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    )}
                </ul>
            </div>
        </div>
    );
};


export default HeaderComponent;