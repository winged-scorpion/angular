import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable()
export class QuestionJson {

  constructor(private http: HttpClient) {
  }

  const;
  answer;

  public sendAnswer(item) {
    this.answer = item;
  }


  public get(): Observable<any> {
    return this.http.get('/assets/question.json');
  }

  public precipitationGet(): Observable<any> {
    return this.http.get('/assets/leila/precipitation.json');
  }

  public temperatureGet(): Observable<any> {
    return this.http.get('/assets/leila/temperature.json');
  }

}
