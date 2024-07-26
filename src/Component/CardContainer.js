import React from "react";
import { Link } from "react-router-dom";
import RestCard from "./RestCard";

const CardContainer = ({ restaurants }) => {
    return (
        <div className="flex flex-wrap p-5 m-5">
            {restaurants?.length > 0 ? (
                restaurants.map((rest) => (
                    <Link to={"/rest/" + rest.info.id} key={rest.info.id}>
                        <RestCard {...rest.info} key={rest.info.id} />
                    </Link>
                ))
            ) : (
                <h1>No Match Found</h1>
            )}
        </div>
    );
};

export default CardContainer;
