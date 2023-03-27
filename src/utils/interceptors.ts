import axios from "axios";
import API_PATHS from "~/constants/apiPaths";

export const axiosInterceptor = () => {
  axios.interceptors.response.use(undefined, (error) => {
    if (error && error.config.url.indexOf(API_PATHS.import) !== -1) {
      const { message } = error;
      alert(`Import error occured: ${message}`);
    }
    return Promise.reject(error.response);
  });
};
