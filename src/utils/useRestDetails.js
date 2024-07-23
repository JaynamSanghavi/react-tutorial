import { useState, useEffect } from "react";
import { DETAIL_URL } from "./config";

const useRestDetails = (restId) => {
    const [resDetails, setResDetails] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const response = await fetch(
                DETAIL_URL + restId
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setResDetails(data.data);
        } catch (error) {
            console.error('Error fetching the restaurant data:', error);
        }
    }

    return resDetails;

}

export default useRestDetails;