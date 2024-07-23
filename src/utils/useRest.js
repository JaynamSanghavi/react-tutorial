import { useState, useEffect } from "react";
import { GET_REST_URL } from "./config";

const useRest = () => {
    const [allRest, setAllRest] = useState([]);
    const [filterRest, setFilterRest] = useState([]);

    useEffect(() => {
        // API call
        getRestaurants();
        console.log("Inside use effect");
    }, []);
    
    async function getRestaurants() {
        const data = await fetch(
            GET_REST_URL
        );
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [allRest, filterRest, setFilterRest];
};

export default useRest;