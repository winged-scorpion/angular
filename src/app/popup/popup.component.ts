import {Component} from '@angular/core';
import {PopupShow} from '../statusPopup';
import {FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';


@Component({
  moduleId: module.id,
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss']
})

export class PopupComponent {
  visible: boolean = false;
  message: any;
  subscription: Subscription;
  popup: string = '';

  constructor(private fb: FormBuilder, private messageService: PopupShow) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
      this.popup = this.message.status.id;
      if (!this.message.status.status) {
        this.hide();
      } else {
        this.show();
      }
    });
  }

  hide() {
    this.visible = false;
  }

  show() {
    this.visible = true;
  }
}

