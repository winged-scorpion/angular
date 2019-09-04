import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Rx";

declare let require: any;

@Injectable()

export class AuthorizationService implements OnInit {
  user: {status: true};
  constructor(private http: HttpClient) {
  }
  getTest(login: string, password: string) {
    const body = {login: login, password: password};
    return rtrt//this.http.post('https://winged-scorpion.000webhostapp.com/public_html/lpAdmin.php', body, {responseType: 'json'});

  }




  ngOnInit() {
  }
}
