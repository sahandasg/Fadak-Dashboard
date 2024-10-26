import React from 'react';
import EcommerceMenu from "./SecondaryMenuItems/EcommerceMenu";
import DashboardMenu from "./SecondaryMenuItems/DashboardMenu";
import ProfileMenu from "./SecondaryMenuItems/ProfileMenu";
import ReportsMenu from "./SecondaryMenuItems/ReportsMenu";
import SettingMenu from "./SecondaryMenuItems/SettingMenu";


function SecondaryMenu({ShowSecondaryMenu}) {
    // eslint-disable-next-line default-case
    switch (ShowSecondaryMenu) {
        case "dashboard":
            return <DashboardMenu/>
        case "e-commerce":
            return <EcommerceMenu/>
        case "profile":
            return <ProfileMenu/>
        case "reports":
            return <ReportsMenu/>
        case "setting":
            return <SettingMenu/>
    }
}

export default SecondaryMenu;