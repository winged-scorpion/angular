import {Injectable} from '@angular/core';

@Injectable()
export class SafeUser {

  isLoggedIn: boolean = false; // false проверка проходит в обычном режиме true проверка отменена
  redirectUrl: string;

  // данный конструктор
  login() {
    document.cookie = 'login=true';
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
