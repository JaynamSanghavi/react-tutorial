import { useState } from "react";
import Shimmer from "./Shimmer";
import useRest from "../utils/useRest";
import SearchBox from "./SearchBox";
import CardContainer from "./CardContainer";
import { filterData } from "../utils/helper";

const BodyComponent = () => {
    const [searchText, setSearchText] = useState("");
    const [allRest, filterRest, setFilterRest] = useRest();

    if (!allRest) return null;

    // Early return if no restaurants are found
    if (allRest?.length === 0) return <Shimmer />;

    const handleSearch = () => {
        setFilterRest(filterData(allRest, searchText));
    };

    return (
        <div>
            <SearchBox
                searchText={searchText}
                setSearchText={setSearchText}
                onSubmit={handleSearch}
            />
            <CardContainer restaurants={filterRest} />
        </div>
    );
};

export default BodyComponent;
