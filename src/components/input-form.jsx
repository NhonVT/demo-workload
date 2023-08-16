/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useController } from "react-hook-form";

const InputField = ({ control, ...props }) => {
    const { field } = useController({
        control,
        name: props.name,
        defaultValue: "",
    });
    return (
        <input
            className="p-4 border border-gray-100 rounded-[1rem] bg-white outline-none transition-all focus:border-blue-500"
            {...field}
            {...props}
        ></input>
    );
};

export default InputField;
