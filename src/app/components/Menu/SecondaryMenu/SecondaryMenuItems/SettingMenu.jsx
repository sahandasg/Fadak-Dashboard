import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import ThemeContext from "../../../../contexts/ThemeContext";

//icons
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';

function SettingMenu(props) {
    const contextData = useContext(ThemeContext)

    return (
        <div className="mt-3">
            <p className="font-semibold border-divider border-b-[1.2px] py-1.5 mx-1">Reports</p>
            <ul className="flex flex-col gap-1.5 mt-2 mx-1">
                <Link to="/setting/profile">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "profile" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("profile")}>
                        <FolderSharedRoundedIcon/>Profile
                    </li>
                </Link>
                <Link to="/setting/change-password">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "change-password" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("change-password")}>
                        <VpnKeyRoundedIcon/>Change Password
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default SettingMenu;