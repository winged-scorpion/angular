import {Injectable} from '@angular/core';

@Injectable()
export class OpenNav {
  visibleNav = 'none';
  width: number = window.innerWidth;
  changeVisibility(): void {
    if (this.width <= 768) {
      if (this.visibleNav === 'none') {
        this.visibleNav = 'show';
      } else {
        this.visibleNav = 'none';
      }
    }
  }
}
