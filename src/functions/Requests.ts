import { AxiosResponse, AxiosRequestConfig, Method } from 'axios';
import doRequest from '../helpers/doRequestHelper';
import {MOORSE_URL ,API_URL, AUTH_URL, YOUR_TRIAL_NUMBER, DESTINATION_NUMBER, GROUPID} from '../config'

class Requests {
  public async login(user: string, password: string): Promise<AxiosResponse> {
    const options: AxiosRequestConfig = {
      url: MOORSE_URL + AUTH_URL,
      method: 'post',
      data: {
        login: user,
        senha: password
      },
    };
    try {
      const response = await doRequest(options);
      return response.data;
    } catch (err) {
      console.error(err)
    }
  }

  public async sendMEssageToContact(token, message): Promise<AxiosResponse> {
    const options: AxiosRequestConfig = {
      url:`${MOORSE_URL}${API_URL}/v2/whatsApp/sendMessage` ,
      method: 'post' ,
      data: {from: YOUR_TRIAL_NUMBER, to: DESTINATION_NUMBER, body: message },
      headers: {'Authorization': token},
    };
    try {
      const response = await doRequest(options);
      return response;
    } catch (err) {
      console.error(err)
    }
  }

  public async sendMEssageToGroup(token, message): Promise<AxiosResponse> {
    const options: AxiosRequestConfig = {
      url: `${MOORSE_URL}${API_URL}/v2/whatsApp/groups/sendMessage`,
      method: 'post',
      data: {groupId: GROUPID , body: message},
      headers: {'Authorization': token}
    };
    try {
      const response = await doRequest(options);
      return response;
    } catch (err) {
      console.error(err)
    }
  }
  
}
export default new Requests();
