import React from "react";
import { Modal } from "antd";
import FormChart from "./form";

const ModalForm = ({ open, handleOk, handleCancel, setDataSourceTable, setIsModalOpen, dataSourceTable }) => {
    return (
        <Modal footer={null} open={open} onOk={handleOk} onCancel={handleCancel}>
            <FormChart setIsModalOpen={setIsModalOpen} dataSourceTable={dataSourceTable} setDataSourceTable={setDataSourceTable} />
        </Modal>
    );
};

export default ModalForm;
