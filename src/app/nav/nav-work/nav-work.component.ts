import {Component, Output, EventEmitter} from '@angular/core';
import {PopupShow} from '../../statusPopup';


import {OpenNav} from '../openNav';


@Component({
  selector: 'app-nav-work',
  templateUrl: './nav-work.component.html',
  styleUrls: ['../nav.scss']
})

export class NavWorkComponent {
  visible: boolean = true;
  current: boolean;

  constructor(private popupShow: PopupShow, public navVisibleMobile: OpenNav) {
  }

  openSendPopup(): void {
    // отправляем сообщения ко всем кто подписался через observable subject
    this.popupShow.sendMessage({
      'status': this.visible,
      'id': 'sendPopup'
    });
  }

  openNav(): void {
    this.navVisibleMobile.changeVisibility();
  }

  @Output() onChanged = new EventEmitter<string>();

  changeNavigation(item: string) {
    this.onChanged.emit(item);
  }
}

