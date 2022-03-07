import axios from "axios";

/**
 * Http Utility.
 */
const http = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/**
 * @param {String} url
 * @param {String} method
 * @param {Object} data
 */
export async function request(url, method, data) {
  const requestBody = data ? data : null;

  const config = {
    url,
    method,
    data: requestBody,
  };

  const res = await http.request(config);

  return res;
}
