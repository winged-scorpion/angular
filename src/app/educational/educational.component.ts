import {Component, OnInit} from '@angular/core';
import {QuestionJson} from '../educationServices';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.scss']
})
export class EducationalComponent implements OnInit {


  const;

  inputJson: any = [];
  match: any;
  name: 'question';
  questionAnswer;
  status = false;
  temperature;
  precipitation;
  yearOb = [];
  yearBase = [];


  constructor(private eqJson: QuestionJson) {
  }


  submit(form: NgForm) {

    let question = 0;
    this.questionAnswer = [];
    for (const i of form.value) {
      this.questionAnswer.push({question: this.inputJson[question].question, answer: form.value[i]});
      if (question >= this.inputJson.length) {
        question++;
      }
    }
    this.eqJson.sendAnswer(this.questionAnswer);
    this.status = true;
  }

  formFilter(form: NgForm) {
    const yearOt = form.value.yearOt;
    const yearDo = form.value.yearDo;
    const yearNew = this.yearOb.filter(function (elem) {
      return +(elem) >= yearOt && +(elem) <= yearDo;
    });


    for (let i = 0; i < yearNew.length; i++) {
      const test = this.yearBase.filter(function (elem) {
        //return +(elem.t).substr(0, 4) === yearNew[i];
        return elem;
      });
      console.log(test);
    }
  }


  ngOnInit() {

    this.eqJson.precipitationGet().subscribe(value => {
      this.yearBase = value;
      let i;
      let year2 = +(value[0].t).substr(0, 4);
      let year: number;
      let thisYear;

      let summa = 0;

      for (i = 0; i < value.length; i++) {
        year = +(value[i].t).substr(0, 4);
        if (year === year2) {
        } else {
          year = year2;
          year2 = year + 1;
          this.yearOb.push([year]);
        }
      }
      thisYear = value.filter(function (elem) {
        return +(elem.t).substr(0, 4) === 1999;
      });
      for (i = 0; i < thisYear.length; i++) {
        summa += thisYear[i].v;
      }
      summa = summa / thisYear.length;

      let test = value.filter(function (elem) {
        return +(elem.t).substr(0, 4) === 1999;
      });
      console.log(test);




      // let summa = this.precipitation += test[i].v;

      //let summa = this.precipitation += test[i].v;

      //console.log(this.yearOb);
      // for (const t of value) {
      //   stop--;
      //   console.log(stop);
      //   this.precipitation = t.t;
      //   console.log(this.precipitation);
      //   if (stop <= 0) {
      //     break;
      //   }
      // }

    });
    this.eqJson.temperatureGet().subscribe(value => {
      this.temperature = value;
    });

    this.eqJson.get().subscribe((response) => {
        this.inputJson = response.filter(function (i) {
          if (i.active) {
            return i;
          }
        });
      },
      error => {
        console.log('error');
      });
  }
}
