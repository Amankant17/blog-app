
import axios from "axios";

const API = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://blog-app-2rbn.onrender.com/api',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default API;
