import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    const err = useRouteError();
    return(
        <div>
            <h2>Page not found</h2>
            <h2>{err.status + " : " +  err.statusText}</h2>

        </div>
    );

};

export default ErrorComponent;