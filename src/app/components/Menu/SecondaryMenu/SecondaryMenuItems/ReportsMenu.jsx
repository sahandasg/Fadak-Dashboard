import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import ThemeContext from "../../../../contexts/ThemeContext";

//icons
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';

function ReportsMenu(props) {
    const contextData = useContext(ThemeContext)

    return (
        <div className="mt-3">
            <p className="font-semibold border-divider border-b-[1.2px] py-1.5 mx-1">Reports</p>
            <ul className="flex flex-col gap-1.5 mt-2 mx-1">
                <Link to="/reports/sales-report">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "sales-report" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("sales-report")}>
                        <TrendingUpRoundedIcon/>Sales Report
                    </li>
                </Link>
                <Link to="/reports/users-report">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "users-report" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("users-report")}>
                        <PeopleAltRoundedIcon/>Users Report
                    </li>
                </Link>
                <Link to="/reports/store-report">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "store-report" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("store-report")}>
                        <Inventory2RoundedIcon/>Store Report
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default ReportsMenu;