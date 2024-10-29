import React from 'react';

//icons
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';


function SelectBox(props) {
    const [show, setShow] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(props.placeHolder);

    const clickHandler = (item) => {
        props.selectHandler(item);
    }

    return (
        <div className="flex flex-col gap-1" id="select-box">
            <div
                className="flex justify-between items-center gap-2 w-full h-[39px] bg-input-bg rounded p-2 cursor-pointer shadow"
                onClick={() => setShow(!show)}
            >
                <div className="w-90% overflow-hidden">
                    <p className="text-[#9CA3AF] text-[0.9rem] whitespace-nowrap">
                        {selectedItem}
                    </p>
                </div>
                <i>{show ? <KeyboardArrowUpRoundedIcon/> : <KeyboardArrowDownRoundedIcon/>}</i>
            </div>
            {
                show && <div className="bg-input-bg rounded z-10 shadow">
                    <ul>
                        <li className="p-2 m-2 cursor-pointer hover:bg-third hover:rounded"
                            onClick={() => {
                                setShow(false)
                                setSelectedItem(props.placeHolder)
                                 clickHandler(props.placeHolder)
                            }}
                        >
                            {props.placeHolder}
                        </li>
                        {
                            props.data.map(item => (
                                <li key={item} className="p-2 m-2 cursor-pointer hover:bg-third hover:rounded"
                                    onClick={() => {
                                        setShow(false)
                                        setSelectedItem(item)
                                        clickHandler(item)
                                    }}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default SelectBox;