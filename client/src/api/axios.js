import axios from "axios";
const BASE_URL = process.env.API_URL;

axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if (err.response) {
            console.log(err.response);
            console.error(err.response.data.message);
            return Promise.reject(err.response);
        } else {
            return Promise.reject({
                status: 500,
                data: { message: "No Server Response" },
            });
        }
    }
);

export default axios.create({
    baseURL: BASE_URL,
    //headers: { "ngrok-skip-browser-warning": true },
});