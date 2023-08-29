import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";

const TableChart = ({ dataSourceTable, columns, showModal, avg }) => {
    const handleOpenModal = () => {
        !!showModal && showModal();
    };

    return (
        <div className="relative w-full">
            <Table columns={columns} dataSource={dataSourceTable} pagination={false} />
            <Button className="mt-4" type="primary" onClick={handleOpenModal}>
                Add
            </Button>
            <div className="relative mt-5 text-lg font-bold text-right text-black">Avg workload: {avg}</div>
        </div>
    );
};

export default TableChart;
