import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-timer-host',
  templateUrl: 'timer-host.component.html'
})
export class TimerHostComponent {
  tickHandler1(value) {
    console.log('Tick Handler 1 - ' + value);
  }
  tickHandler2(value) {
    console.log('Tick Handler 2 - ' + value);
  }
}
