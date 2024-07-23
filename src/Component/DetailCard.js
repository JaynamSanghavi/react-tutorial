import { imgCDN } from "../utils/config";

const DetailCard = ({ name, cloudinaryImageId, areaName, city, avgRating, costForTwoMessage }) => {
    return (
        <div className="detail-card">
            <h2>{name}</h2>
            <img src={imgCDN + cloudinaryImageId} />
            <h3>{areaName}</h3>
            <h3>{city}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{costForTwoMessage}</h3>
        </div>
    );
};

export default DetailCard;