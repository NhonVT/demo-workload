/* eslint-disable no-unused-vars */
import React, { useId } from "react";
import InputField from "./input-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import formApi from "../api/form-post";
import InputNumberForm from "./input-number";

const schema = yup
    .object()
    .shape({
        month: yup.string().required("please enter your month"),
        workload: yup.string().required("please enter your workload"),
    })
    .required();

const FormChart = ({ setDataSourceTable, setIsModalOpen, dataSourceTable }) => {
    const {
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        control,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
        defaultValues: {},
    });

    // let createForm = async (value) => {
    //     return await formApi.postForm(value);
    // };
    // const { mutateAsync } = useMutation(createForm);

    const submitHandler = async (values) => {
        console.log("🚀 ~ file: form.jsx:37 ~ submitHandler ~ values:", values);
        const keyRandom = Math.floor(Math.random() * 1000000);
        const valueSubmit = {
            month: parseInt(values.month),
            workload: parseInt(values.workload),
            key: keyRandom,
        };

        setDataSourceTable((prev) => {
            const isExist = prev.find((item) => item.month === valueSubmit.month);
            if (isExist) {
                return prev.map((item) => {
                    if (item.month === valueSubmit.month) {
                        return valueSubmit;
                    }
                    return item;
                });
            } else {
                return [...prev, valueSubmit].sort((a, b) => a.month - b.month);
            }
        });
        setIsModalOpen(false);
        // await mutateAsync(values);
        reset({
            month: "",
            workload: "",
        });
    };

    return (
        <div className="parent relative block w-[100%]  m-auto  bg-[#fff] rounded-[2rem] ">
            <h1 className="child relative w-full block text-center text-[2.5rem] font-bold mb-[2.5rem]">Form Chart</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="relative" autoComplete="off">
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="month" className="font-semibold cursor-pointer">
                        Month
                    </label>
                    {/* <InputNumberForm
                        min={1}
                        max={12}
                        name="month"
                        defaultValue=""
                        placeholder="Enter your month"
                        id="month"
                        control={control}
                        type="number"
                    ></InputNumberForm> */}
                    <InputField name="month" defaultValue="" placeholder="Enter your month" id="month" control={control} type="text"></InputField>
                    {errors.month && <p className="mb-0 text-sm text-red-500">{errors.month.message}</p>}
                </div>
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="value" className="font-semibold cursor-pointer">
                        Value
                    </label>
                    <InputNumberForm
                        defaultValue=""
                        min={0}
                        name="workload"
                        placeholder="Enter your workload"
                        id="workload"
                        control={control}
                        type="number"
                    ></InputNumberForm>
                    {errors.workload && <p className="mb-0 text-sm text-red-500">{errors.workload.message}</p>}
                </div>
                <button
                    className={`w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg ${isSubmitting ? "opacity-50" : ""}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    ) : (
                        "Add"
                    )}
                </button>
            </form>
        </div>
    );
};

export default FormChart;
