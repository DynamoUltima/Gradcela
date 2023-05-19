import axios from "axios";



const BASE_URL = "http://localhost:3001";
const BASE_URL_PROD = "https://expeed-admin.vercel.app";

export const fetchAllProjects = async () => {
    const response = await axios.get(`${BASE_URL_PROD}/api/projects/getAll`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }

    });
    return response.data;

}