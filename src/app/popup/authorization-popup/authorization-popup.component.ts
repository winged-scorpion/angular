import {Component} from '@angular/core';
import {SafeUser} from '../../safe.user';
import {Router} from '@angular/router';
import {PopupShow} from '../../statusPopup';
import {AuthorizationService} from '../../authorization.service';
import {User} from '../../admin/user';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-authorization-popup',
  templateUrl: './authorization-popup.component.html',
  styleUrls: ['./authorization-popup.component.scss']
})
export class AuthorizationPopupComponent {
  password: string;
  userLogin: string;
  visible: boolean = false;

  // данный конструктор делает переадресовку
  constructor(public router: Router, private popupShow: PopupShow, private authEvent: AuthorizationService, private http: Http, private authService: SafeUser) {
  }

  user: User = new User(); // данные вводимого пользователя
  receivedUser: User; // полученный пользователь
  done: boolean = true;


  authorizationSend() {
    this.authEvent.getTest(this.userLogin, this.password).subscribe((data: User) => {
      this.user = data;
      if (this.user.status) {
        this.authService.login();
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.router.navigate([redirect]);
        this.popupShow.sendMessage(
          {
            'status': this.visible,
            'id': ''
          }
        );
      } else {
        console.log('ошибка');
      }
    });
  }
}
