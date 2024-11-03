import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

//css
import "./chart.css"

//data
import {sales} from "../../../fake-db/db"

export default function Sales(props) {

    return (
        <Box sx={{width: '100%', paddingLeft: "5px", borderRadius: "0.25rem", backgroundColor: "var(--input-bg)",}}>
            <LineChart
                height={350}
                slotProps={{legend: {hidden: true}}}
                xAxis={[{
                    scaleType: 'band',
                    data: props.date
                }]}
                series={series
                    .map((s) => ({...s, data: s.data.slice(0, props.date.length)}))}
            />
        </Box>
    );
}

const highlightScope = {
    highlight: 'series',
    fade: 'global',
};

const series = sales.map((s) => ({...s, highlightScope}));