import React from 'react'


import { Chart } from "react-google-charts";

export const data = [
    ["Element", "Monthly Erning", { role: "style" }],
    ["Jan", 42.94, "#d9d1d0"], // RGB value
    ["Feb", 38.49, "#d9d1d0"], // English color name
    ["Mar", 45.3, "#e5e4e2"],
    ["Apr", 41.45, "color: #e5e4e2",], // CSS-style declaration
    ["May", 21.45, "color: #e5e4e2"], // CSS-style declaration
    ["Jun", 35.45, "color: #e5e4e2"], // CSS-style declaration
    ["Jul", 40.45, "color: #e5e4e2"], // CSS-style declaration
    ["Aug", 45.45, "color: #222fbd"], // CSS-style declaration
    ["Sep", 41.45, "color: #e5e4e2"], // CSS-style declaration
    ["Oct", 48.45, "color: #e5e4e2"], // CSS-style declaration
    ["Nov", 21.45, "color: #e5e4e2"], // CSS-style declaration
    ["Dec", 50.45, "color: #e5e4e2"], // CSS-style declaration
];


const BarChart = () =>
{
    var options = {
        isStacked: true,
        vAxis: {
            baselineColor: '#fff',
            gridlineColor: '#fff',
            textPosition: 'none',
            gridlines: {
                count: 0

            }
        },
        bar: { groupWidth: "90%", },
        chartArea: { width: '80%', height: "80%", },
        legend: {
            position: 'top',
            alignment: 'top',
            textStyle: {
                color: '233238',
                fontSize: 14,
            },
        },

    };
    return (
        <div className='w-full'>
            <Chart chartType="ColumnChart" width="100%" height="250px" data={data} options={options} />
        </div>
    )
}

export default BarChart