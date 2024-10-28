import React, {useContext} from 'react';
import ThemeContext from "../../contexts/ThemeContext";
import {useRoutes} from "react-router-dom";
import routes from "../../routes";
import Breadcrumbs from "./Breadcrumbs";

function Body(props) {
    const contextData = useContext(ThemeContext);
    const router = useRoutes(routes)

    return (
        <div id="body"
            className={`absolute transition-all min-h-[calc(100vh-4rem)] top-16 right-0 overflow-auto bg-bg ${contextData.isShow === "true" ? "md:w-[calc(100vw-15rem)] w-full" : "md:w-[calc(100vw-4rem)] w-full"}`}>
            <Breadcrumbs/>
            <div
                className="transition-all w-full flex justify-center">
                {router}
            </div>
        </div>
    );
}

export default Body;