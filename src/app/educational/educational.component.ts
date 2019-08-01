import {Component, OnInit} from '@angular/core';
import {QuestionJson} from '../educationServices';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.scss']
})
export class EducationalComponent implements OnInit {

  const;
  questionJson: any;


  constructor(private eqJson: QuestionJson) {
  }

  submit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit() {
    this.eqJson.get().subscribe(value => {
        this.questionJson = value;
      },
      error => {
        console.log('error');
      });
  }
}
