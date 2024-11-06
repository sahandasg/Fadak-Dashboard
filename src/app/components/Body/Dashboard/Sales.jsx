import React, {useEffect} from 'react';
import Chart from "../../Chart/Chart"
import SelectBox from "../../SelectBox";
import CustomDatePicker from "../../CustomDatePicker/CustomDatePicker";
import dayjs from 'dayjs';


function Sales(props) {
    //selector
    const toDay = [new Date().toJSON().slice(0, 10)]
    const customDate = (dayNum, skipNum) => {
        return [...Array(dayNum)].map(
            (_, i) => {
                const d = new Date()
                d.setDate(d.getDate() - (i * skipNum))
                return d.toJSON().slice(0, 10)
            }
        ).reverse()
    }
    const date = [toDay, 'Last 7 days', 'Last month', 'Last 3 months', 'Last 6 months', 'Last 12 months'];
    const [selectedItem, setSelectedItem] = React.useState(customDate(7, 1));

    const selectHandler = (item) => {
        switch (item) {
            case toDay:
                setSelectedItem(toDay);
                break
            case 'Last 7 days':
                setSelectedItem(customDate(7, 1));
                break
            case 'Last month':
                setSelectedItem(customDate(8, 4));
                break
            case 'Last 3 months':
                setSelectedItem(customDate(3, 30));
                break
            case 'Last 6 months':
                setSelectedItem(customDate(6, 30))
                break
            case 'Last 12 months':
                setSelectedItem(customDate(12, 30))
                break
            default :
                setSelectedItem(customDate(7, 1))
        }
    }

    //calender
    const [startDate, setStartDate] = React.useState()
    const [endDate, setEndDate] = React.useState()
    const [minDate, setMinDate] = React.useState()
    const [disableCalender, setDisableCalender] = React.useState(true)

    const handelChangeStart = (e) => {
        setStartDate(dayjs(e).add(1, "day"))
        setMinDate(dayjs(e).add(1, "day"))
        setDisableCalender(false)
    }
    const handelChangeEnd = (e) => {
        setEndDate(dayjs(e).add(1, "day"))
    }

    useEffect(() => {
        const daysNum = (endDate - startDate) / (1000 * 3600 * 24)
        if (daysNum) {
            const customDays = [...Array(daysNum)].map((_, i) => {
                return dayjs(dayjs(startDate).add(1, "day")).add(i, "day").$d.toJSON().slice(0, 10)
            })
            const customDate = [startDate.$d.toJSON().slice(0, 10), ...customDays]
            setSelectedItem(customDate)
        }
    }, [endDate]);

    return (
        <div className="flex flex-wrap gap-4 justify-center mt-8 px-6 xl:w-[85%] w-full text-secondary">
            <div className="flex w-full sm:flex-nowrap flex-wrap gap-4">
                <div className="flex justify-between items-center gap-2 lg:w-[70%] w-full h-[37px] rounded">
                    <div className="w-full sm:w-[30%] mt-auto">
                        <SelectBox placeHolder={"Date"} data={date} selectHandler={selectHandler}/>
                    </div>
                    <CustomDatePicker handelChange={handelChangeStart} disabled={false}/>
                    <p className='text-[#9CA3AF]'>to</p>
                    <CustomDatePicker minDate={minDate} handelChange={handelChangeEnd} disabled={disableCalender}/>
                </div>
            </div>
            <Chart date={selectedItem}/>
        </div>
    );
}

export default Sales;