/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import { Line } from "@ant-design/plots";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const Chart = ({ data }) => {
    const month = [...new Set(data.map(item => item.month || null))];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
        // xField: "month",
        // yField: "value",
        // seriesField: "category",
        // color: ["#1979C9", "#D62A0D", "#FAA219"],
        // smooth: true,
    };
    const dataSource =  {
        labels: month,
        datasets: [
            {
                label: 'Workload',
                data:  data.filter(item => item.value && item.category === 'value').map(month => month.value),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                cubicInterpolationMode: 'monotone',
            },
            {
                label: 'Average',
                data: data.filter(item => item.value && item.category === 'avg').map(avg => avg.value),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                cubicInterpolationMode: 'monotone',
            },
        ],
    };

    return (
        <div className="relative block max-w-[75rem] w-[100%] m-auto">
            <Line options={options}  data={dataSource}/>
        </div>
    );
};

export default Chart;
