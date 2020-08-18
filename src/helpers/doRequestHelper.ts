import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


export default async function (options :AxiosRequestConfig): Promise<AxiosResponse> {
  const {data} = await Axios(options);
  return data;
}
