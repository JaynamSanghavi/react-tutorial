import { imgCDN } from "../utils/config";

const DetailCard = ({ name, cloudinaryImageId, areaName, city, avgRating, costForTwoMessage }) => {
    return (
        <div className="w-52 mr-5">
            <h2 className="text-2xl">{name}</h2>
            <img src={imgCDN + cloudinaryImageId} className="w-full" />
            <h3>{areaName}</h3>
            <h3>{city}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwoMessage}</h3>
        </div>
    );
};

export default DetailCard;