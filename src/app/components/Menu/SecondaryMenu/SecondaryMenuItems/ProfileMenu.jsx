import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import ThemeContext from "../../../../contexts/ThemeContext";

//icons
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

function ProfileMenu(props) {
    const contextData = useContext(ThemeContext)

    return (
        <div className="mt-3">
            <p className="font-semibold border-divider border-b-[1.2px] py-1.5 mx-1">Profile</p>
            <ul className="flex flex-col gap-1.5 mt-2 mx-1">
                <Link to="/profile/seller-profile">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "seller-profile" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("seller-profile")}>
                        <AssignmentIndRoundedIcon/>Seller profile
                    </li>
                </Link>
                <Link to="/profile/bills">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "bills" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("bills")}>
                        <AccountBalanceWalletRoundedIcon/>Bills
                    </li>
                </Link>
                <Link to="/profile/schedule">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "schedule" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("schedule")}>
                        <CalendarMonthRoundedIcon/>Schedule
                    </li>
                </Link>
                <Link to="/profile/message">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "message" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("message")}>
                        <EmailRoundedIcon/>Message
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default ProfileMenu;