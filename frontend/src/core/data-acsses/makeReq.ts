// eslint-disable-next-line import/named
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { HttpMethods } from '../enums/httpMethods.enum';
import axiosObject from '../config/axios.config';





export type MakeRequest = {
  url: string;
  method: HttpMethods;
  data?: object | undefined;
  params?: object | undefined;
  headers?: AxiosRequestHeaders | object;
};

export const makeRequest = async (req: MakeRequest) => {

  const { url, method, data, params, headers } = req as AxiosRequestConfig;
  
  return axiosObject({
    url,
    method,
    data,
    params,
    headers,
  }).then((res) => {
    return res.data;
  });
};
