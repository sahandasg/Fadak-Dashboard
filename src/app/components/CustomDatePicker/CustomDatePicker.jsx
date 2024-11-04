import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

//css
import "./CustomDatePicker.css"

export default function CustomDatePicker(props) {
    const changeHandler = (e) => {
        props.handelChange(e)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker slotProps={{textField: {size: 'small'}}}
                        minDate={props.minDate}
                        disabled={props.disabled}
                        onChange={(e) => changeHandler(e)}/>
        </LocalizationProvider>
    );
}