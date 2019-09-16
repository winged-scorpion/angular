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

  canvasGenerator() {
    const canvas: any = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();


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
    this.canvasGenerator();
  }

}
