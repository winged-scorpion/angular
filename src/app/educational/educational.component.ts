import {Component, OnInit} from '@angular/core';
import {QuestionJson} from '../educationServices';
import {NgForm, FormControl, FormGroup, Validators, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.scss']
})
export class EducationalComponent implements OnInit {

  const;
  testForm: FormGroup;
  questionJson: any;
  inputJson: any = [];
  match: any;
  question: 0;
  arrLink: any;
  name: 'question';

  constructor(private eqJson: QuestionJson) {
  }




  submit(form: NgForm) {
    this.eqJson.sendAnswer(form.value);
  }

  sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].active === true) {
        if (arr[i].type !== 'checkbox') {
          this.arrLink = arr[i];
        } else {
          this.arrLink = arr[i].questionList;
        }
        if (this.arrLink.name === undefined || this.arrLink.name.length === 0) {
          if (this.arrLink.length > 1) {
            for (let item = 0; item < 2; item++) {
              this.question++;

              this.arrLink[item].name = name + this.question;

            }
          } else {
            this.question++;
            this.arrLink.name =  name + this.question;
          }
        }
        this.inputJson.push(arr[i]);


      }
    }
  }



  ngOnInit() {
    console.log( name);
    this.eqJson.get().subscribe((response) => {
        this.questionJson = response;
        this.sort(this.questionJson);
      },
      error => {
        console.log('error');
      });
    this.testForm = new FormGroup({
      'hobbies': new FormArray([])
    });


  }
  onAddHobbie() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.testForm.get("hobbies")).push(control);
  }
  testSubmit() {
    console.log(this.testForm);
  }
}
