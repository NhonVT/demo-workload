import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_API_URL, //will change
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        // document.body.classList.add('loading');
        const token = localStorage.getItem("token");
        // Add the JWT token to the request headers
        if (token) {
            config.headers["Authorization"] = `token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        // document.body.classList.remove('loading');
        if (response && response?.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        return Promise.reject(error?.response);
    }
);

export default axiosClient;
