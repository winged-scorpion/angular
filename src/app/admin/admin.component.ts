import {Component, OnInit} from '@angular/core';
import {SafeUser} from '../safe.user';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(public authService: SafeUser) {
  }

  const;
  info: any;
  portfolio: number = 1;
  active: string = 'edit-item';

  portfolioTab(item) {
    this.portfolio = item;
    switch (item) {
      case 1:
        this.active = 'edit-item';
        break;
      case 2:
        this.active = 'add-item';
        break;
      case 3:
        this.active = 'editing-questions';
        break;
    }
  }


  logout() {
    this.authService.logout();
  }

  ngOnInit() {

}
