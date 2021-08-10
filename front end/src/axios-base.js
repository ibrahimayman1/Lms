import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7064/'
});

export default instance;