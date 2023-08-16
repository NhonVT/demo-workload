import React, { useEffect, useState } from "react";
import { Table } from "antd";

const TableChart = ({ dataSourceTable, getAvg, columns }) => {
    const [avg, setAvg] = useState(0);

    useEffect(() => {
        setAvg(getAvg("workload"));
    }, [dataSourceTable]);

    return (
        <div className="relative w-full">
            <Table columns={columns} dataSource={dataSourceTable} pagination={false} />
            <div className="relative mt-5 text-lg font-bold text-right text-black">Avg workload: {avg}</div>
        </div>
    );
};

export default TableChart;
