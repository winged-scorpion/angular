import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {SubscribeTest} from '../eventScript';


declare let require: any;


@Component({
  moduleId: module.id,
  selector: 'app-instrumental',
  templateUrl: 'instrumental.component.html',
  styleUrls: ['instrumental.component.scss'],

})

export class InstrumentalComponent implements OnInit {
  eventForm: FormGroup;
  subscription: Subscription;

  ngOnInit() {

  }

  // constructor(private inputForm: SubscribeTest) {
  //   this.eventForm = new FormGroup({
  //     'input1': new FormControl(''),
  //     'input2': new FormControl(''),
  //     'input3': new FormControl('')
  //   });
  //   this subTest = this.inputForm.showInputText()
  // }


  onEvent() {
    //const item = this.eventForm;
    //this.inputForm.showInputText(item);
  }
}

