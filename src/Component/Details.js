import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { imgCDN } from "./config";
const DetailsComponent = () => {
    const params = useParams();
    const [resDetails, setResDetails] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0177989&lng=72.84781199999999&restaurantId=" + params.id
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setResDetails(data.data);
            //console.log(data.data.cards[2]);
            //console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card?.itemCards.map((c) => (c.card.info.name)));
        } catch (error) {
            console.error('Error fetching the restaurant data:', error);
        }
    }
    return !resDetails ? (
        <Shimmer />
    ) : (
        <div className="details">
            <div className="detail-card">
                <h2>{resDetails?.cards[2]?.card?.card?.info?.name}</h2>
                <img src={imgCDN + resDetails?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
                <h3>{resDetails?.cards[2]?.card?.card?.info?.areaName}</h3>
                <h3>{resDetails?.cards[2]?.card?.card?.info?.city}</h3>
                <h3>{resDetails?.cards[2]?.card?.card?.info?.avgRating} stars</h3>
                <h3>{resDetails?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            </div>
            <div>
                <h2>Menu</h2>
                <ul>
                    {Object.values(resDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card?.itemCards).map((item) => (
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DetailsComponent;