import axios, { AxiosRequestConfig } from 'axios';

const apiUtil = (args: AxiosRequestConfig) => {
  const { url, method, params, data, headers } = args;

  const config = {
    baseURL: process.env.REACT_APP_DEFAULT,
    url,
    method,
    headers: { Accept: 'application/json', ...headers },
    params,
    data,
  };

  return axios
    .request(config)
    .then((response: any) => response.data)
    .catch(error => {
      throw error.message;
    });
};

export default apiUtil;
