/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Chart from "../components/chart";
import TableChart from "../components/table";
import ModalForm from "../components/modal";
import { Button } from "antd";

const columns = [
    {
        title: "Month",
        dataIndex: "month",
        key: "month",
    },
    {
        title: "Workload",
        dataIndex: "value",
        key: "value",
    },
];

const LayoutForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataChart, setDataChart] = useState([]);
    const [dataSourceTable, setDataSourceTable] = useState([]);
    const [avg, setAvg] = useState(0);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const getColumnValues = (columnName) => {
        return dataSourceTable.map((item) => item[columnName]);
    };

    const getAvg = (columnName) => {
        const columnValues = getColumnValues(columnName);
        const sum = columnValues.reduce((a, b) => a + b, 0);
        return sum / columnValues.length;
    };

    useEffect(() => {
        const value = getColumnValues("value");
        const months = getColumnValues("month");
        const newData = [];
        for (let i = 0; i < value.length; i++) {
            newData.push(
                {
                    month: months[i].toString(),
                    value: value[i],
                    category: "value",
                },
                {
                    month: months[i].toString(),
                    value: getAvg("value"),
                    category: "avg",
                }
            );
        }
        setDataChart(newData);
    }, [dataSourceTable]);

    return (
        <div className="relative justify-center items-center w-full h-[100vh]">
            <div className="relative max-w-[80rem] m-auto">
                <TableChart showModal={showModal} columns={columns} getColumnValues={getColumnValues} dataSourceTable={dataSourceTable} avg={avg} />
            </div>

            <ModalForm
                open={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                dataSourceTable={dataSourceTable}
                setDataSourceTable={setDataSourceTable}
                setAvg={setAvg}
            />
            <Chart data={dataChart} />
        </div>
    );
};

export default LayoutForm;
