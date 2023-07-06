import axios from "axios";



const BASE_URL = "http://localhost:3000";
const BASE_URL_PROD = "https://expeed-admin.vercel.app";

export const fetchAllProjects = async () => {
    const response = await axios.get(`${BASE_URL_PROD}/api/orders/getAll`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }

    });
    return response.data;

}

export const fetchProjectsById = async (id:string) => {
    const response = await axios.get(`${BASE_URL_PROD}/api/orders/get/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }

    });
    return response.data;

}