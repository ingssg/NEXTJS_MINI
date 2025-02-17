import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

export default instance;
