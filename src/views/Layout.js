import { Outlet } from "react-router-dom";
// import Searchbar from "../components/SearchBar";

export const Layout = () => {
    return (
        <>
            {/* <Searchbar/> */}
        <Outlet></Outlet>
        </>
    )
}