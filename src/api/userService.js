import axios from "axios";

const baseUrl = "https://projectnode-1-fofg.onrender.com/api/user";

export const checkUser = (data) => {
    return axios.post(`${baseUrl}/login`, data);
};

