import axios from "axios";

const Api = axios.create({
    baseURL: 'https://minimaleave.herokuapp.com/api',
    withCredentials: true,
    headers:{
        'Content-type':'application/x-www-form-urlencoded'
    }
});

export default Api