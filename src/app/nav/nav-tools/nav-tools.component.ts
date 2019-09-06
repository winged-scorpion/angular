import {Component, EventEmitter, Output} from '@angular/core';
import {PopupShow} from '../../statusPopup';
import {OpenNav} from '../openNav';



@Component({
  selector: 'app-nav-tools',
  templateUrl: './nav-tools.component.html',
  styleUrls: ['../nav.scss']
})
export class NavToolsComponent {
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

  back(item: string) {
    this.onChanged.emit(item);
  }

}

