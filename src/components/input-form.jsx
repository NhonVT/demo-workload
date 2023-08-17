/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useController } from "react-hook-form";
import { Input } from "antd";

const InputField = ({ control, ...props }) => {
    const { field } = useController({
        control,
        name: props.name,
        defaultValue: "",
    });

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        if (/^(1[0-2]?|0?[1-9])$/.test(newValue) || newValue === "") {
            setInputValue(newValue);
            field.onChange(newValue);
        }
    };

    const handleInputKeyDown = (e) => {
        const invalidChars = ["-", "+", "e"];
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    };

    return (
        // <input
        //     pattern="[0-9]+"
        //     className="p-4 border border-gray-100 rounded-[1rem] bg-white outline-none transition-all focus:border-blue-500"
        //     {...field}
        //     {...props}
        // ></input>
        <Input {...field} {...props} value={inputValue} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
    );
};

export default InputField;
