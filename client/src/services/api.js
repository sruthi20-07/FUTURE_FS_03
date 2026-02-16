import axios from "axios";

const API = axios.create({
  baseURL: "https://cloud-kitchen-backend-dp2o.onrender.com/api",
});

export default API;