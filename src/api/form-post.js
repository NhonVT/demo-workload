import axiosClient from "./axios-client";

const formApi = {
    async postForm(data) {
        const url = `users`;
        return await axiosClient.post(url, data);
    },
};
export default formApi;
