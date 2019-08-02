import {Component} from '@angular/core';
import {portfolioServices} from '../portfolioServices';


@Component({
  moduleId: module.id,
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.scss']
})

export class PortfolioComponent {

  constructor(private porJson: portfolioServices) {
  }
  const;
  info: any;

  ngOnInit() {
    this.porJson.get().subscribe(value => {
        this.info = value;
        console.log(this.info)
      },
      error => {
        console.log('error');
      });
  }
}
