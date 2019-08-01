import {Component, OnInit} from '@angular/core';
import {QuestionJson} from '../../educationServices';

@Component({
  selector: 'app-editing-questions',
  templateUrl: './editing-questions.component.html',
  styleUrls: ['./editing-questions.component.scss']
})
export class EditingQuestionsComponent implements OnInit {

  constructor(private eqJson: QuestionJson) {
  }
  const;
  questionList: any;



  ngOnInit() {
    this.eqJson.get().subscribe(value => {
        this.questionList = value;
        console.log(this.questionList);
      },
      error => {
        console.log('error');
      });

  }

}
