import {Component, OnInit} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'app.nav.html',
  styleUrls: ['app.nav.scss']
})

export class NavComponent implements OnInit {

  page: string = 'work';

  onChanged(item: string) {
    this.page = item;
  }

  status: string = 'none';

  statusNav(item: string) {
    this.status = item;
  }

  ngOnInit() {

  }
}
