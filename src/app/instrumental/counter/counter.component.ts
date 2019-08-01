import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-test',
  templateUrl: 'counter.component.html',
  styleUrls: ['counter.component.scss'],
  inputs: ['name']
})
export class CounterComponent {

  name: string = 'default name';

  @Input()
  counterValue: number = 0;

  @Input('step')
  counterStep: number = 1;

  increment() {
    this.counterValue = this.counterValue + this.counterStep;
    console.log(this.counterStep);
  }
}
