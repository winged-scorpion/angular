import {Component, OnInit} from '@angular/core';
import {QuestionJson} from '../educationServices';


declare let require: any;


@Component({
  moduleId: module.id,
  selector: 'app-instrumental',
  templateUrl: 'instrumental.component.html',
  styleUrls: ['instrumental.component.scss'],

})

export class InstrumentalComponent implements OnInit {
  numOut: string;
  numIn: string;
  plus: number;
  el: any;


  ngOnInit() {
    this.el = document.getElementsByClassName('js-im');

  }

  number(item) {
    if (typeof item === 'number') {
      if (this.el[0].dataset.num1.indexOf('.') === -1) {
        this.numOut = this.el[0].dataset.num1 + item;
      } else {
        this.numOut = (this.el[0].dataset.num1 + item) * 1;
      }
    } else {
      if (this.el[0].dataset.num1.indexOf('.') === -1) {
        this.numOut = this.el[0].dataset.num1 + item;
      }
    }
    this.num();
  }

  numberDelete() {
    this.numOut = '';
    this.num();
  }

  numberPlus = () => {
    this.numOut = this.numOut + 8890;
    this.num();

  };
  numberMinus = () => {
    this.numOut = this.numOut - 8890;
    this.num();
  };
  numberEnter = () => {

  };

  num() {
    this.el[0].dataset.num1 = this.numOut;
  }
}

