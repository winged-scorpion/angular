import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare let require: any;

@Injectable()

export class AuthorizationService implements OnInit {
  constructor(private http: HttpClient) {
  }
  getTest(login: string, password: string) {
    const body = {login: login, password: password};
    return this.http.post('/assets/php/lpAdmin.php', body, {responseType: 'json'});
  }
  ngOnInit() {
  }
}
