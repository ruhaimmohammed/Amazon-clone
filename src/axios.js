import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-3421f/us-central1/api' // THE API URL
})

export default instance;