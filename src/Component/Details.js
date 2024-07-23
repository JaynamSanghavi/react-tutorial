import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestDetails from "../utils/useRestDetails";
import DetailCard from "./DetailCard";
import DetailMenu from "./DetailMenu";


const DetailsComponent = () => {
    const params = useParams();

    const resDetails = useRestDetails(params.id);
    console.log(resDetails);

    return !resDetails ? (
        <Shimmer />
    ) : (
        <div className="details">
            <DetailCard {...resDetails?.cards[2]?.card?.card?.info} />
            <DetailMenu {...resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card} />
        </div>
    );
}

export default DetailsComponent;