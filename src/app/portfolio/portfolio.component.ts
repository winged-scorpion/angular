import {Component, OnInit} from '@angular/core';
import {PortfolioServices} from '../portfolioServices';


@Component({
  moduleId: module.id,
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  constructor(private porJson: PortfolioServices) {
  }
  const;
  info: any;

  ngOnInit() {
    this.porJson.get().subscribe(value => {
        this.info = value;

      },
      error => {
        console.log('error');
      });
  }
}
