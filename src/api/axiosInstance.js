/* axiosInstance.js
 * David D'Alessandro
 * March 26, 2024
 * Hold axios logic for use in app
 */

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3009/",
});

export default axiosInstance;
