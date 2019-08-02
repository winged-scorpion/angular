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
  questionJson: any;
  inputJson: any = [];
  match: any;
  question: number = 0;
  arrLink: any;
  name: string = 'question';

  constructor(private eqJson: QuestionJson) {
  }


  submit(form: NgForm) {
    console.log(form.value);
  }

  sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].active == true) {
        if (arr[i].type !== 'checkbox') {
          this.arrLink = arr[i]
        } else {
          this.arrLink = arr[i].questionList
        }
        if (this.arrLink.name == undefined || this.arrLink.name.length == 0) {
          if (this.arrLink.length > 1) {
            for (let item = 0; item < 2; item++) {
              this.question++;
              this.arrLink[item].name = name+ this.question;
            }
          } else {
            this.question++;
            this.arrLink.name = name+ this.question;
          }
        }
        this.inputJson.push(arr[i]);
      }
    }
  }

  ngOnInit() {
    this.eqJson.get().subscribe(value => {
        this.questionJson = value;
        this.sort(this.questionJson)
      },
      error => {
        console.log('error');
      });
  }
}
