import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class portfolioServices {

  constructor(private http: HttpClient) {
  }

  public get(): Observable<any> {
    return this.http.get('/assets/portfolio.json');
  }
}
