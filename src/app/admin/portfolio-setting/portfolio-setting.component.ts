import {Component, OnInit} from '@angular/core';
import {portfolioServices} from "../../portfolioServices";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-portfolio-setting',
  templateUrl: './portfolio-setting.component.html',
  styleUrls: ['./portfolio-setting.component.scss']
})

export class PortfolioSettingComponent implements OnInit {
  constructor(private porJson: portfolioServices) {
  }

  info: any;
  submit(form: NgForm) {
    console.log(form.value);
  }


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
