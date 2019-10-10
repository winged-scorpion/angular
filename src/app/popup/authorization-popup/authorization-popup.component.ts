import {Component} from '@angular/core';
import {SafeUser} from '../../safe.user';
import {Router} from '@angular/router';
import {PopupShow} from '../../statusPopup';
import {AuthorizationService} from '../../authorization.service';
import {User} from '../../admin/user';
import {Http, Response} from '@angular/http';

declare let require: any;

@Component({
  selector: 'app-authorization-popup',
  templateUrl: './authorization-popup.component.html',
  styleUrls: ['./authorization-popup.component.scss']
})
export class AuthorizationPopupComponent {
  password: string;
  userLogin: string;
  visible: false;
  arr = new require('assets/user.json');

  // данный конструктор делает переадресовку
  constructor(public router: Router,
              private popupShow: PopupShow,
              private authEvent: AuthorizationService,
              private http: Http,
              private authService: SafeUser) {
  }

  user: User = new User(); // данные вводимого пользователя
  receivedUser: User; // полученный пользователь
  done: true;


  authorizationSend() {
    if (this.arr.login === this.userLogin && this.arr.password === this.password) {
      this.authService.login();
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
      this.router.navigate([redirect]);
      this.popupShow.sendMessage(
        {
          'status': this.visible,
          'id': ''
        }
      );
    } else {
      console.log('Не верный логин или пароль');
    }

    // авторизация на сервере
    // this.authEvent.getTest(this.userLogin, this.password).subscribe((data: User) => {
    //   this.user = data;
    //   if (this.user.status) {
    //     this.authService.login();
    //     const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
    //     this.router.navigate([redirect]);
    //     this.popupShow.sendMessage(
    //       {
    //         'status': this.visible,
    //         'id': ''
    //       }
    //     );
    //   } else {
    //     console.log('ошибка');
    //   }
    // });
  }
}
