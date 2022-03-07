import { request } from 'services/httpService';

class AuthApi {
  static login(data) {
    const url = 'https://apptesting.docsumo.com/api/v1/eevee/login/';

    return request(url, 'post', data);
  }
}

export default AuthApi;