import React, {useContext, useState} from 'react';
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
import ThemeContext from "../../../contexts/ThemeContext";

//icons
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

function MainMenu(props) {
    const contextData = useContext(ThemeContext);
    const path = (window.location.pathname).split("/")
    const [showSecondaryMenu, setShowSecondaryMenu] = useState(path[1]);
    const [isShowTooltip, setIsShowTooltip] = useState(false);

    const ToolTip = styled(({className, ...props}) => (
        <Tooltip {...props} arrow classes={{popper: className}}/>
    ))(({theme}) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: "#7AB2B2",
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "#7AB2B2",
            color: "#E9EFEC",
        },
    }));

    return (
        <div className="flex fixed z-20" id="menu">
            <div
                className={`flex fixed bottom-0 z-40 flex-col items-center justify-between bg-main w-16 h-[calc(100vh-4rem)] p-4 text-secondary border-r-[1.2px] border-divider transition-all ${contextData.isShow ==="true" ? "left-0" : "left-[-64px] md:left-0"}`}>
                <ul className="flex flex-col items-center gap-5">
                    <ToolTip title="Dashboard" placement="right"
                             sx={contextData.isShow === "true" && {display: "none"}}>
                        <li className={`flex justify-center px-3 py-1.5 rounded cursor-pointer transition-all ${showSecondaryMenu === "dashboard" ? "bg-third" : "hover:bg-third"}`}
                            onClick={() => {
                                contextData.setIsShow("true")
                                localStorage.setItem("showSecondaryMenu", "true")
                                setShowSecondaryMenu("dashboard")
                            }}>
                            <DashboardRoundedIcon/></li>
                    </ToolTip>
                    <ToolTip title="E-commerce" placement="right"
                             sx={contextData.isShow === "true" && {display: "none"}}>
                        <li className={`flex justify-center px-3 py-1.5 rounded cursor-pointer transition-all ${showSecondaryMenu === "e-commerce" ? "bg-third" : "hover:bg-third"}`}
                            onClick={() => {
                                contextData.setIsShow("true")
                                localStorage.setItem("showSecondaryMenu", "true")
                                setShowSecondaryMenu("e-commerce")
                            }}>
                            <ShoppingCartRoundedIcon/></li>
                    </ToolTip>
                    <ToolTip title="Profile" placement="right" sx={contextData.isShow === "true" && {display: "none"}}>
                        <li className={`flex justify-center px-3 py-1.5 rounded cursor-pointer transition-all ${showSecondaryMenu === "profile" ? "bg-third" : "hover:bg-third"}`}
                            onClick={() => {
                                contextData.setIsShow("true")
                                localStorage.setItem("showSecondaryMenu", "true")
                                setShowSecondaryMenu("profile")
                            }}>
                            <AccountBoxRoundedIcon/></li>
                    </ToolTip>
                    <ToolTip title="reports" placement="right" sx={contextData.isShow === "true" && {display: "none"}}>
                        <li className={`flex justify-center px-3 py-1.5 rounded cursor-pointer transition-all ${showSecondaryMenu === "reports" ? "bg-third" : "hover:bg-third"}`}
                            onClick={() => {
                                contextData.setIsShow("true")
                                localStorage.setItem("showSecondaryMenu", "true")
                                setShowSecondaryMenu("reports")
                            }}>
                            <AssessmentRoundedIcon/></li>
                    </ToolTip>
                    <ToolTip title="Setting" placement="right" sx={contextData.isShow === "true" && {display: "none"}}>
                        <li className={`flex justify-center px-3 py-1.5 rounded cursor-pointer transition-all ${showSecondaryMenu === "setting" ? "bg-third" : "hover:bg-third"}`}
                            onClick={() => {
                                contextData.setIsShow("true")
                                localStorage.setItem("showSecondaryMenu", "true")
                                setShowSecondaryMenu("setting")
                            }}>
                            <SettingsRoundedIcon/></li>
                    </ToolTip>
                </ul>
                <div
                    className="md:flex hidden justify-center px-3 py-1.5 rounded cursor-pointer transition-all hover:bg-third"
                    onClick={() => {
                        contextData.setIsShow(contextData.isShow === "true" ? "false" : "true")
                        localStorage.setItem("showSecondaryMenu", contextData.isShow === "true" ? "false" : "true")
                        setIsShowTooltip(!isShowTooltip)
                    }}
                >
                    <p className={`transition-all ${contextData.isShow === "true" ? "rotate-180" : ""}`}>
                        <ChevronRightRoundedIcon/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;