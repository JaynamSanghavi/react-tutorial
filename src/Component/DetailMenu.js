const DetailMenu = ({ itemCards }) => {
    return (
        <div>
            <h2 className="text-2xl">Menu</h2>
            <ul>
                {Object.values(itemCards).map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailMenu;