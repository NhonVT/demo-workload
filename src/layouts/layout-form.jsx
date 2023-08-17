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
        dataIndex: "workload",
        key: "workload",
    },
];

const LayoutForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataChart, setDataChart] = useState([]);
    const [dataSourceTable, setDataSourceTable] = useState([
        {
            key: "1",
            month: 1,
            workload: 0,
        },
        {
            key: "2",
            month: 2,
            workload: 80,
        },
    ]);

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
        const workload = getColumnValues("workload");
        const months = getColumnValues("month");
        const newData = [];
        for (let i = 0; i < workload.length; i++) {
            newData.push(
                {
                    month: months[i].toString(),
                    workload: workload[i],
                    category: "workload",
                },
                {
                    month: months[i].toString(),
                    workload: getAvg("workload"),
                    category: "avg",
                }
            );
        }
        setDataChart(newData);
    }, [dataSourceTable]);

    return (
        <div className="relative justify-center items-center w-full h-[100vh]">
            <div className="relative max-w-[80rem] m-auto">
                <TableChart
                    showModal={showModal}
                    columns={columns}
                    getColumnValues={getColumnValues}
                    getAvg={getAvg}
                    dataSourceTable={dataSourceTable}
                />
            </div>

            <ModalForm
                open={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                dataSourceTable={dataSourceTable}
                setDataSourceTable={setDataSourceTable}
            />
            <Chart data={dataChart} />
        </div>
    );
};

export default LayoutForm;
