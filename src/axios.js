import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tiktok-mern-jr.herokuapp.com/"
});

export default instance;