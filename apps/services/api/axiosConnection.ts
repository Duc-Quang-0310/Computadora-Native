import axios from "axios"
import { baseURL } from "./axiosAddress";

export const AxiosClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});



