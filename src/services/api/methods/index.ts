import { AxiosRequestConfig } from "axios";
import axiosInstance from "../interceptor";

export default {
  getMethod: (url: string, config: AxiosRequestConfig) => {
    return axiosInstance.get(url, config);
  },
  postMethod: (url: string, body: object) => {
    return axiosInstance.post(url, body);
  },
  putMethod: (url: string, body: object) => {
    return axiosInstance.put(url, body);
  },
  patchMethod: (url: string, body: object) => {
    return axiosInstance.patch(url, body);
  },
  deleteMethod: (url: string) => {
    return axiosInstance.delete(url);
  },
};
