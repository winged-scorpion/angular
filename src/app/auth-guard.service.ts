import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SafeUser} from './safe.user';
import {PopupShow} from './statusPopup';

@Injectable()

export class AuthGuard implements CanActivate {
  visible: boolean = true;
  current: boolean;
  value: any;


  // данный конструктор проверяет данные
  constructor(private authService: SafeUser, private router: Router, private popupShow: PopupShow) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // проверяем куки
    this.value = document.cookie.match('login');
    if (this.value || this.authService.isLoggedIn) {
      return true;
    } else {
      this.authService.redirectUrl = state.url;
      this.router.navigate(['/']);
      this.popupShow.sendMessage(
        {
          'status': this.visible,
          'id': 'auPopup'
        }
      );
      return false;
    }
  }
}
