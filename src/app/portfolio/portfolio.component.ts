import {Component} from '@angular/core';

declare var require: any;
const infoObject = require('assets/portfolio.json');

@Component({
  moduleId: module.id,
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss']
})

export class PortfolioComponent {
  info = infoObject;
}
