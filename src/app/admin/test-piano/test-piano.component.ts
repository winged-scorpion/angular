import {Component, OnInit} from '@angular/core';
import {QuestionJson} from '../../educationServices';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-test-piano',
  templateUrl: './test-piano.component.html',
  styleUrls: ['./test-piano.component.scss']
})

export class TestPianoComponent implements OnInit {
  const;
  urlBase = 'http://api.stackexchange.com';
  urlDetail = '/2.2/users?order=desc&sort=reputation&site=stackoverflow';
  url = this.urlBase + this.urlDetail;
  userArr;

  constructor(private piano: QuestionJson) {
  }

  filter(form: NgForm) {
    console.log(form.value.purpose);
  }

  ngOnInit() {
    this.piano.testP(this.url).subscribe(value => {
      this.userArr = value.items;
      console.log(this.userArr);

    });
  }
  

}
