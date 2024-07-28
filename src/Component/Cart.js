import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { removeItem, clearCart } from "../utils/cart-slice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(removeItem());
    }
    const clearcart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <div className="flex">
            <h1 className="p-2 m-2 text-2xl font-bold text-center">You cart: </h1>
            <button className="p-2 m-2 bg-red-500" onClick={()=> clearcart()}>Clear Cart</button>
            </div>
            {
                cartItems.map((item) => 
                    <div className="flex">
                        <h1 className="p-4 m-4 text-xl font-semibold">{item.payload}</h1>
                        <button className="p-4 m-4 bg-red-500" onClick={()=> removeItemFromCart()}>Remove</button>

                    </div>
                )
            }
        </div>
    );
}

export default Cart;