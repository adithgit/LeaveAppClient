import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
    headers:{
        'Content-type':'application/x-www-form-urlencoded'
    }
});

export default Api