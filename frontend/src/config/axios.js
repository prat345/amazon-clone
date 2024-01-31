import axios from "axios";

// axios.defaults.baseURL = "https://amazon-clone-backend-chi.vercel.app";
axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.withCredentials = true;

export default axios;
