import axios from "axios";

const formApi = {
    async postForm(data) {
        const url = "https://devipropwebservice20230816185103.azurewebsites.net/api/average";
        const config = {
            headers: {
                "Content-Type": "application/json",
                // Cookie: "ARRAffinity=a6e48b9e9d2653435be7b61998d8624b44115214104213d6c8b8c526cc56dc70; ARRAffinitySameSite=a6e48b9e9d2653435be7b61998d8624b44115214104213d6c8b8c526cc56dc70",
            },
        };
        return await axios.post(url, data, config);
    },
};
export default formApi;
