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
  inputJson: any = [];

  constructor(private eqJson: QuestionJson) {
  }

  submit(form: NgForm) {
    console.log(form.value);
  }
  sort(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i].active == true){
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
