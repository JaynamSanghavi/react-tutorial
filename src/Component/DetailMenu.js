import { useDispatch } from "react-redux";
import { addItem } from "../utils/cart-slice";

const DetailMenu = ({ itemCards }) => {
    const dispatch = useDispatch();

    const addItemToCart = (itemName) => {
        dispatch(addItem(itemName));
    }
    return (
        <div>
            <h2 className="text-2xl">Menu</h2>
            <ul>
                {Object.values(itemCards).map((item) => (
                    <div className="flex">
                        <li className="p-1 m-2" key={item.card.info.id}>{item.card.info.name}</li>
                        <button className="p-1 m-2 bg-green-500" onClick={() => addItemToCart(item.card.info.name)} key={"btn-"+item.card.info.id}>Add item</button>
                    </div>

                ))}
            </ul>
        </div>
    );
};

export default DetailMenu;