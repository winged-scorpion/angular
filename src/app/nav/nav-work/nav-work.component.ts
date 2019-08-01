import {Component, Output, EventEmitter} from '@angular/core';
import {PopupShow} from '../../statusPopup';
import {FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {OpenNav} from '../openNav';


@Component({
  selector: 'app-nav-work',
  templateUrl: './nav-work.component.html',
  styleUrls: ['../nav.scss']
})

export class NavWorkComponent {
  visible: boolean = true;
  current: boolean;
  subscription: Subscription;

  constructor(private popupShow: PopupShow, private navVisibleMobile: OpenNav) {
  }

  openSendPopup(): void {
    // отправляем сообщения ко всем кто подписался через observable subject
    this.popupShow.sendMessage({
      'status': this.visible,
      'id': 'sendPopup'
    });
  }

  openNav() {
    this.navVisibleMobile.changeVisibility();
  }

  @Output() onChanged = new EventEmitter<string>();

  changeNavigation(item: string) {
    this.onChanged.emit(item);
  }
}

