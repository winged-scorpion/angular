import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private http: HttpClient) {
  }

  authorizationSend(message: any) {
    const body = {login: message.login, password: message.password};
    return this.http.post(
      'https://winged-scorpion.ru/assets/php/lpAdmin.php',
      body,
      {responseType: 'json'}
    );
  }
}
