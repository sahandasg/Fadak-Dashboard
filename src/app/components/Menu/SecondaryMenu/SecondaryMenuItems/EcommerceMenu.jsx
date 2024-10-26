import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import ThemeContext from "../../../../contexts/ThemeContext";

//icons
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';

function EcommerceMenu(props) {
    const contextData = useContext(ThemeContext)

    return (
        <div className="mt-3">
            <p className="font-semibold border-divider border-b-[1.2px] py-1.5 mx-1">E-commerce</p>
            <ul className="flex flex-col gap-1.5 mt-2 mx-1">
                <Link to="/e-commerce/products">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "products" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("products")}>
                        <CategoryRoundedIcon/>Products
                    </li>
                </Link>
                <Link to="/e-commerce/add-products">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "add-products" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("add-products")}
                    >
                        <AddBoxRoundedIcon/>Add Product
                    </li>
                </Link>
                <Link to="/e-commerce/comments">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "comments" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("comments")}
                    >
                        <TextsmsRoundedIcon/>Comments
                    </li>
                </Link>
                <Link to="/e-commerce/discounts">
                    <li
                        className={`flex items-center gap-1 p-1 rounded transition-all cursor-pointer hover:bg-third ${contextData.selectedMenu === "discounts" ? "bg-third rounded" : ""}`}
                        onClick={() => contextData.setSelectedMenu("discounts")}
                    >
                        <PercentRoundedIcon/>Discounts
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default EcommerceMenu;