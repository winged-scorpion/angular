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
  test = ['fff', 'ddd'];
  questionAnswer;
  status = false;

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

  ngOnInit() {
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
