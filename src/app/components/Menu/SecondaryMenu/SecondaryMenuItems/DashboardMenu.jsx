import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import ThemeContext from "../../../../contexts/ThemeContext";

//icons
import BubbleChartRoundedIcon from '@mui/icons-material/BubbleChartRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';

function DashboardMenu(props) {
    const contextData = useContext(ThemeContext)
    return (
        <div className="mt-3">
            <p className="font-semibold border-divider border-b-[1.2px] py-1.5 mx-1">Dashboard</p>
            <ul className="flex flex-col gap-1.5 mt-2 mx-1">
                <Link to="/dashboard/overview">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "overview" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("overview")}
                    >
                        <BubbleChartRoundedIcon/>Overview
                    </li>
                </Link>
                <Link to="/dashboard/orders">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "orders" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("orders")}
                    >
                        <LocalGroceryStoreRoundedIcon/>Orders
                    </li>
                </Link>
                <Link to="/dashboard/sales">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "sales" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("sales")}
                    >
                        <MonetizationOnRoundedIcon/>Sales
                    </li>
                </Link>
                <Link to="/dashboard/inventory">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "inventory" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("inventory")}
                    >
                        <InventoryRoundedIcon/>Inventory
                    </li>
                </Link>
                <Link to="/dashboard/analytics">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "analytics" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("analytics")}
                    >
                        <AnalyticsRoundedIcon/>Analytics
                    </li>
                </Link>
            </ul>
        </div>
    )
        ;
}

export default DashboardMenu;