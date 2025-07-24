import axios from 'axios';

 const baseURL = 'http://localhost:3001';

const axiosObject = axios.create({
  baseURL,
});

axiosObject.interceptors.request.use(
  function (config) {
    // You can modify the request config here if needed
    return config;
  },
  function (error) {
    // Do something with request error
    // eslint-disable-next-line no-console
    console.error('error: interceptors', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosObject.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosObject;
