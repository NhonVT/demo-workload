/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Line } from "@ant-design/plots";

const Chart = ({ data }) => {
    const config = {
        data,
        xField: "month",
        yField: "value",
        seriesField: "category",
        color: ["#1979C9", "#D62A0D", "#FAA219"],
        smooth: true,
    };

    return (
        <div className="relative block max-w-[75rem] w-[100%] m-auto">
            <Line {...config} />
        </div>
    );
};

export default Chart;
