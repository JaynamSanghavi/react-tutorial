import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



function filterData(allRest, searchText) {
    const filterRestList = allRest.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())));
    return filterRestList;
}



const BodyComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [allRest, setAllRest] = useState([]);
    const [filterRest, setFilterRest] = useState([]);


    // empty dependency array => once after render
    // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
    useEffect(() => {
        // API call
        getRestaurants();
        console.log("Inside use effect");
    }, []);
    
    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (!allRest) return null;

    // not render component (Early return)
    if(allRest?.length == 0)
        return <Shimmer/>

    return (

        <>
            <div className="search-box">
                <input type="text" value={searchText} placeholder="Enter the key" onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button type="button" onClick={() => {
                    setFilterRest(filterData(allRest, searchText));
                }}>Submit</button>
            </div>
            <div className="card-container">
                {
                    
                    filterRest?.length > 0 ?
                        filterRest.map((rest) => {
                            return <Link to={"/rest/"+rest.info.id} key={rest.info.id}>  <RestCard {...rest.info} key={rest.info.id} /> </Link>
                        })
                    :
                        <h1>No Find Match</h1>
                }
            </div>
        </>
    );
};

export default BodyComponent;