import {imgCDN } from "../utils/config";
const RestCard = ({ name, areaName, cuisines, cloudinaryImageId, aggregatedDiscountInfoV3 }) => {
    let discountMeta = null;
    if (aggregatedDiscountInfoV3?.header){
        discountMeta = aggregatedDiscountInfoV3?.header;
        if(aggregatedDiscountInfoV3?.subHeader){
            discountMeta = discountMeta + " - " + aggregatedDiscountInfoV3?.subHeader;
        }

    }

    return (
        <div className="card">
            <img
                src={
                    imgCDN +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            {discountMeta && <p>{discountMeta}</p>}
        </div>
    );
};

export default RestCard;