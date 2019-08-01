import {Component, OnInit} from '@angular/core';
import {SafeUser} from '../safe.user';

declare var require: any;
const infoObject = require('assets/portfolio.json');

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(public authService: SafeUser) {
  }

  info = infoObject;

  portfolio: number = 3;
  active: string = 'editing-questions';

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
}
