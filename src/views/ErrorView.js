import { useRouteError } from "react-router-dom";

export const ErrorView = () => {
    const error = useRouteError();
    return (
        <>
            <p>Sorry, something went wrong</p>
            <p>{error.statusText ?? error.message}</p>
        </>
    )
}