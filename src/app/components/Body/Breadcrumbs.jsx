import React from 'react';

//icons
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Breadcrumbs(props) {
    const breadcrumbsItems = (window.location.pathname).split("/")
    const breadcrumbsLastItem = breadcrumbsItems.pop()
    return (
        <ul className="flex items-center p-4 text-secondary text-[14px]">
            <li>Fadak<KeyboardArrowRightRoundedIcon/></li>
            {
                breadcrumbsItems.map((item) => (
                    item &&
                    <li key={item}>{item}<KeyboardArrowRightRoundedIcon/></li>
                ))
            }
            {
                breadcrumbsLastItem &&
                <li className="text-third">{breadcrumbsLastItem}</li>

            }
        </ul>
    );
}

export default Breadcrumbs;