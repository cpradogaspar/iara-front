import axios from 'axios';

const API = axios.create({
    baseURL: 'http://10.1.113.1:3000'
})

export default API;