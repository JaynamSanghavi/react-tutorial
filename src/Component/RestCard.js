import { imgCDN } from "../utils/config";
const RestCard = ({ name, areaName, cuisines, cloudinaryImageId, aggregatedDiscountInfoV3 }) => {
    let discountMeta = null;
    if (aggregatedDiscountInfoV3?.header) {
        discountMeta = aggregatedDiscountInfoV3?.header;
        if (aggregatedDiscountInfoV3?.subHeader) {
            discountMeta = discountMeta + " - " + aggregatedDiscountInfoV3?.subHeader;
        }

    }

    return (
        <div className="w-52 pb-3 m-3 shadow-lg bg-lime-100 hover:bg-green-300">
            <img
                src={
                    imgCDN +
                    cloudinaryImageId
                }
                className="h-2/4 p-4"
            />
            <div className="text-center pb-2">
                <h3 className="text-3xl">{name}</h3>
            </div>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            {discountMeta && <p>{discountMeta}</p>}
        </div>
    );
};

export default RestCard;