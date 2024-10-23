import * as React from 'react';

function Header(props) {

    return (
        <div
            id="header"
            className="flex gap-4 fixed top-0 w-full h-16 bg-main border-b-[1.2px] border-divider items-center justify-between px-4">
            <p className="font-semibold text-xl text-secondary hidden md:flex ">Fadak-Dashboard</p>
        </div>
    )
        ;
}

export default Header;