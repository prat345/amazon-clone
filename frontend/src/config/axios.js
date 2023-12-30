import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// axios.defaults.baseURL = "https://amazon-clone-backend-chi.vercel.app";
axios.defaults.baseURL = process.env.API_BASE_URL || "http://localhost:5000";
axios.defaults.withCredentials = true;

export default axios;
