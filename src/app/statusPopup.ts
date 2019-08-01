import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PopupShow {
  private subject = new Subject<any>();

  sendMessage(message: any): void {
    this.subject.next({status: message});
  }

  clearMessage(): void {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
