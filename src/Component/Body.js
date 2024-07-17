import { restList, imgCDN } from "./config";
import {useState} from "react";


const RestCard = ({ name, area, cuisines, cloudinaryImageId, aggregatedDiscountInfoV2 }) => {
    let discountMeta = null;
    if (aggregatedDiscountInfoV2?.shortDescriptionList)
        discountMeta = (aggregatedDiscountInfoV2?.descriptionList[0].meta);
    return (
        <div className="card">
            <img
                src={
                    imgCDN +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{area}</h4>
            <h4>{cuisines.join(", ")}</h4>
            {discountMeta && <p>{discountMeta}</p>}
        </div>
    );
};

function filterData(resList, searchText){
    const filterRestList = resList.filter((res) => res.data.name.includes(searchText));
    return filterRestList;
}



const BodyComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [resList, setResList] = useState(restList);
    return (
        <>
            <div className="search-box">
                <input type="text" value={searchText} placeholder="Enter the key" onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button type="button" onClick={() => {
                    setResList(filterData(resList,searchText));
                }}>Submit</button>
            </div>
            <div className="card-container">
                {
                    resList.map((rest) => {
                        return <RestCard {...rest.data} key={rest.data.id} />
                    })
                }
            </div>
        </>
    );
};

export default BodyComponent;