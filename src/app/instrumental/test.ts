import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class SubscribeTest {
  private subject = new Subject<any>();
  public adminLogin: string;
  public text: string;
  public status: boolean;

  sendInfo(message: any): void {
    this.adminLogin = message;
    this.text = message;
    this.subject.next({status: message});
  }

  sendAjax(message: any): void {
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

