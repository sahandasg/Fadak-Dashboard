import * as React from 'react';
import SearchBar from "../SearchBar";
import ThemeSwitcher from "./ThemeSwitcher";
import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext";

//icons
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

function Header(props) {
    const contextData = useContext(ThemeContext);

    return (
        <div
            id="header"
            className="flex gap-4 fixed top-0 w-full h-16 bg-main border-b-[1.2px] border-divider items-center justify-between px-4">
            <p className="font-semibold text-xl text-secondary hidden md:flex ">Fadak-Dashboard</p>
            <div
                className="flex md:hidden justify-center items-center p-1 rounded cursor-pointer transition-all hover:bg-third"
                onClick={() => {
                    contextData.setIsShow(contextData.isShow === "true" ? "false" : "true")
                    localStorage.setItem("showSecondaryMenu", contextData.isShow === "true" ? "false" : "true")
                }}
            >
                <i className={`text-secondary transition-all ${contextData.isShow === "true" ? "rotate-180" : ""}`}>
                    <ChevronRightRoundedIcon/>
                </i>
            </div>
            <div className="w-[100%] md:w-[50%] ">
                <SearchBar/>
            </div>
            <ThemeSwitcher/>
        </div>
    )
        ;
}

export default Header;