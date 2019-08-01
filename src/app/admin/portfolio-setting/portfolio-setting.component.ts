import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-portfolio-setting',
  templateUrl: './portfolio-setting.component.html',
  styleUrls: ['./portfolio-setting.component.scss']
})

export class PortfolioSettingComponent implements OnInit {

  @Input() infoText;
  constructor() { }

  ngOnInit() {


  }

}
