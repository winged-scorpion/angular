import {Component, OnInit} from '@angular/core';
import {PortfolioServices} from '../../portfolioServices';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-portfolio-setting',
  templateUrl: './portfolio-setting.component.html',
  styleUrls: ['./portfolio-setting.component.scss']
})

export class PortfolioSettingComponent implements OnInit {
  constructor(private porJson: PortfolioServices) {
  }

  info: any;

  submit(form: NgForm) {
    console.log(form.value);
  }


  ngOnInit() {
    this.porJson.get().subscribe(value => {
        this.info = value;
        console.log(this.info);
      },
      error => {
        console.log('error');
      });
  }

}
