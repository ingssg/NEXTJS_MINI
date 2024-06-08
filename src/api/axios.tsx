import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

export default instance;
