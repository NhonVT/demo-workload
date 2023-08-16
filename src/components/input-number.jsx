import React from "react";
import { useController } from "react-hook-form";
import { InputNumber } from "antd";

const InputNumberForm = ({ control, ...props }) => {
    const { field } = useController({
        control,
        name: props.name,
        min: props.min,
        max: props.max,
        defaultValue: props.defaultValue,
    });
    return <InputNumber {...field} {...props} defaultValue={props.defaultValue} min={props.min} max={props.max} controls={false} />;
};

export default InputNumberForm;
