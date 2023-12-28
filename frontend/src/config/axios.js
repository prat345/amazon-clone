import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.withCredentials = true;

export default axios;
