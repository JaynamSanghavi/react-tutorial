import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import { useSelector } from "react-redux";

//for named import
export const Title = () => (
    <a href="/">
        <img src="https://wishu.io/wp-content/uploads/2021/09/Uber-Eats-Logo-2018-1024x576-1.jpeg" alt="logo" className="h-24 w-24 px-1" />
    </a>
);

const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useIsOnline();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title />
            <div className="nav-items">
                <ul className="flex py-8 px-10">
                    <li className="px-6"><Link to="/">Home</Link></li>
                    <li className="px-6">
                        <Link to="/about">About US</Link>
                    </li>
                    <li className="px-6"><Link to="/contact">Contact US</Link></li>
                    <li className="px-6"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-6"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                </ul>
                <div className="px-16">
                    <h1>
                        {isOnline ? <h1>✅</h1> : <h1>❌</h1>}
                    </h1>

                </div>
            </div>
            <div className="py-8">
                {isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )}

            </div>
        </div>
    );
};


export default HeaderComponent;