import {Component, OnInit} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'app.nav.html',
  styleUrls: ['app.nav.scss']
})

export class NavComponent implements OnInit {

  page: 'work';
  status: 'none';
  onChanged(item) {
    this.page = item;
  }

  statusNav(item) {
    this.status = item;
  }

  ngOnInit() {

  }
}
